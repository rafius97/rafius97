import type { Project } from '@api/projects';
import { $search, $selectedTechs, $viewMode } from '@lib/stores/projectsStore';
import { useStore } from '@nanostores/react';
import { Search } from 'lucide-react';
import { useMemo } from 'react';
import { ProjectsGrid } from './ProjectsGrid';
import { ProjectsList } from './ProjectsList';
import { useTranslations } from '@i18n/utils';
import type { Languages } from '@api/companies';

interface ProjectsDisplayProps {
  projects: Project[];
  lang?: Languages;
}

export function ProjectsDisplay({ projects, lang = 'en' }: ProjectsDisplayProps) {
  const search = useStore($search);
  const selectedTechs = useStore($selectedTechs);
  const viewMode = useStore($viewMode);
  const t = useTranslations(lang);

  const filteredProjects = useMemo(() => {
    const searchLower = search.toLowerCase();
    const selectedTechsLower = selectedTechs.map((t) => t.toLowerCase());

    return projects.filter((project) => {
      const matchesSearch =
        search === '' ||
        project.title.toLowerCase().includes(searchLower) ||
        project.shortDescription.toLowerCase().includes(searchLower);

      const projectTechs = project.technologies.map((t) =>
        t.name.toLowerCase(),
      );
      const matchesTech =
        selectedTechsLower.length === 0 ||
        selectedTechsLower.every((t) => projectTechs.includes(t));

      return matchesSearch && matchesTech;
    });
  }, [projects, search, selectedTechs]);

  const clearFilters = () => {
    $search.set('');
    $selectedTechs.set([]);
  };

  if (filteredProjects.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center gap-4 py-32 text-center'>
        <div className='flex size-16 items-center justify-center rounded-full border border-white/10 bg-white/5 opacity-50'>
          <Search className='size-8 text-foreground' />
        </div>
        <div>
          <h3 className='font-semibold text-[18px] text-foreground'>
            {t('projects.noProjectsFound')}
          </h3>
          <p className='text-[14px] text-foreground/50'>
            {t('projects.noProjectsDesc')}
          </p>
        </div>
        <button
          onClick={clearFilters}
          className='cursor-pointer rounded-md border border-white/10 bg-white/5 px-4 py-2 font-medium text-[14px] text-foreground transition-colors hover:bg-white/10 lg:w-auto'
        >
          {t('projects.clearFilters')}
        </button>
      </div>
    );
  }

  return (
    <div id='projects-container' className='relative min-h-[400px]'>
      {viewMode === 'grid' ? (
        <ProjectsGrid projects={filteredProjects} lang={lang} />
      ) : (
        <ProjectsList projects={filteredProjects} lang={lang} />
      )}
    </div>
  );
}
