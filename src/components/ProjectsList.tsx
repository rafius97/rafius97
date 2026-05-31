import { getCompanyById } from '@api/companies';
import type { Project } from '@api/projects';
import { cn } from '@lib/utils';
import { ArrowRightIcon } from '@radix-ui/react-icons';

export function ProjectsList({ projects }: { projects: Project[] }) {
  if (!projects || projects.length === 0) return null;

  return (
    <div className='flex w-full flex-col gap-4'>
      {projects.map((project) => {
        const company = getCompanyById(project.companySlug);
        const logoSrc =
          typeof company?.logo === 'string' ? company.logo : company?.logo?.src;

        return (
          <a
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={cn(
              'group relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-lg p-6 md:flex-row md:items-center',
              // light styles
              'bg-card shadow-[0_8px_24px_rgba(0,0,0,0.3)]',
              // dark styles
              'transform-gpu dark:bg-card dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
              'transition-all duration-300 hover:dark:[border:1px_solid_rgba(255,41,117,.3)] hover:dark:[box-shadow:0_0_20px_rgba(255,41,117,0.1)_inset]',
            )}
          >
            {/* Background Image */}
            <div className='pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-lg'>
              <img
                src={project.headerImage}
                alt={project.title}
                className='mask-image-rtl absolute top-0 right-0 h-full w-full object-cover opacity-[0.25] transition-all duration-700 group-hover:scale-105 group-hover:opacity-[0.35] md:w-2/3'
                style={{
                  maskImage: 'linear-gradient(to right, transparent, black)',
                  WebkitMaskImage:
                    'linear-gradient(to right, transparent, black)',
                }}
              />
            </div>

            {/* Content */}
            <div className='relative z-10 flex w-full flex-col gap-6 md:flex-row md:items-center'>
              <div className='flex size-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-sm transition-colors duration-300 group-hover:border-white/20 md:size-20'>
                <img
                  src={logoSrc}
                  alt={company?.name}
                  className='h-10 w-10 rounded-full object-contain transition-transform duration-300 group-hover:scale-110 md:h-12 md:w-12'
                />
              </div>

              <div className='flex min-w-0 flex-grow flex-col'>
                <h3 className='flex items-center gap-3 truncate font-bold text-neutral-700 text-xl transition-colors duration-300 md:text-2xl dark:text-neutral-100'>
                  {project.title}
                </h3>
                <p className='mt-2 line-clamp-2 max-w-2xl text-neutral-400 text-sm md:text-base'>
                  {project.shortDescription}
                </p>

                <div className='mt-4 flex flex-wrap gap-2'>
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech.name}
                      className='inline-flex w-auto flex-row items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70 backdrop-blur-sm'
                    >
                      <img
                        src={tech.image}
                        alt={tech.name}
                        className='h-3 w-3 object-contain'
                      />
                      {tech.name}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className='inline-flex w-auto flex-row items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/50 backdrop-blur-sm'>
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Action */}
            <div className='relative z-10 mt-4 flex w-full shrink-0 justify-end md:mt-0 md:w-auto'>
              <div className='pointer-events-auto flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 font-medium text-[13px] text-white/80 transition-colors duration-300 hover:border-[#ff2975]/30 hover:border-white/20 hover:bg-white/10 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(255,41,117,0.2)]'>
                View Project
                <ArrowRightIcon className='ms-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#ff2975] rtl:rotate-180' />
              </div>
            </div>

            <div className='pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/3 group-hover:dark:bg-neutral-800/10' />
          </a>
        );
      })}
    </div>
  );
}
