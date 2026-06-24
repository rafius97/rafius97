import { getCompanyById } from '@api/companies';
import type { Project } from '@api/projects';
import { BentoCard, BentoGrid } from '@components/ui/bento-grid';
import { cn } from '@lib/utils';
import { useTranslations } from '@i18n/utils';
import type { defaultLang } from '@i18n/ui';
import type { Languages } from '@api/companies';

interface Props {
  projects: Project[];
  lang?: Languages;
}

export function ProjectsGrid({ projects, lang = 'en' }: Props) {
  const t = useTranslations(lang as typeof defaultLang);
  if (!projects || projects.length === 0) return null;

  return (
    <BentoGrid>
      {projects.map((project) => {
        const company = getCompanyById(project.companySlug, lang);

        return (
          <BentoCard
            key={project.slug}
            Icon={({ className }: { className?: string }) => (
              <img
                src={
                  typeof company?.logo === 'string'
                    ? company?.logo
                    : company?.logo?.src
                }
                alt={company?.name}
                className={cn('rounded-full', className)}
              />
            )}
            name={project.title}
            description={project.shortDescription}
            href={lang === 'es' ? `/es/projects/${project.slug}` : `/projects/${project.slug}`}
            cta={t('projects.viewProject')}
            background={
              <img
                src={project.headerImage}
                alt={project.title}
                className='absolute inset-0 z-0 h-full w-full object-cover opacity-[0.25] transition-all duration-500 group-hover:scale-105 group-hover:opacity-40'
              />
            }
            className='col-span-3 lg:col-span-1'
          />
        );
      })}
    </BentoGrid>
  );
}
