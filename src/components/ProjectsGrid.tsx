import { getCompanyById } from '@api/companies';
import type { Project } from '@api/projects';
import { BentoCard, BentoGrid } from '@components/ui/bento-grid';
import { cn } from '@lib/utils';

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) return null;

  return (
    <BentoGrid>
      {projects.map((project) => {
        const company = getCompanyById(project.companySlug);

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
            href={`/projects/${project.slug}`}
            cta='View Project'
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
