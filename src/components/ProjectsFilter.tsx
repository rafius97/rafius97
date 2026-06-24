import { getTechnologies } from '@api/technologies';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@components/ui/dropdown-menu';
import { Input } from '@components/ui/input';
import { $search, $selectedTechs } from '@lib/stores/projectsStore';
import { useStore } from '@nanostores/react';
import { Check, Filter, Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslations } from '@i18n/utils';
import type { Languages } from '@api/companies';

interface Props {
  lang?: Languages;
}

export function ProjectsFilter({ lang = 'en' }: Props) {
  const search = useStore($search);
  const t = useTranslations(lang);
  const selectedTechs = useStore($selectedTechs);
  const { frontend, backend, blockchain, others } = getTechnologies();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const allTechsFlat = [...frontend, ...backend, ...blockchain, ...others];
  const techByName = Object.fromEntries(allTechsFlat.map((t) => [t.name, t]));

  const toggleTech = (tech: string) => {
    const current = $selectedTechs.get();
    if (current.includes(tech)) {
      $selectedTechs.set(current.filter((t) => t !== tech));
    } else {
      $selectedTechs.set([...current, tech]);
    }
  };

  const clearFilters = () => {
    $search.set('');
    $selectedTechs.set([]);
  };

  const allTechs = [
    { label: t('tech.frontend'), items: frontend },
    { label: t('tech.backend'), items: backend },
    { label: t('tech.blockchain'), items: blockchain },
    { label: t('tech.others'), items: others },
  ];

  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='z-20 mx-auto flex w-full max-w-[1240px] items-center justify-end pt-12'>
        <div className='flex items-center gap-3'>
          <Input
            type='text'
            value={search}
            onChange={(e) => $search.set(e.target.value)}
            placeholder={t('projects.searchPlaceholder')}
            className='w-[340px] rounded-full focus-within:border-[#ff2975]/40'
            icon={<Search className='size-4' />}
            clearable={true}
            onClear={() => $search.set('')}
          />

          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <button className='flex h-10 w-auto cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-[13px] text-foreground/70 transition-all hover:border-white/20 hover:text-foreground'>
                <Filter className='size-3.5' />
                {t('projects.filters')}
                {selectedTechs.length > 0 && (
                  <span className='ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff2975] text-[10px] text-white'>
                    {selectedTechs.length}
                  </span>
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side={isMobile ? 'bottom' : 'right'}
              sideOffset={12}
              className='data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 mx-6 w-[calc(100vw-4rem)] border-white/10 bg-[#131313] text-foreground duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in md:mx-0 md:w-56'
            >
              <DropdownMenuGroup>
                <DropdownMenuLabel className='text-foreground/50'>
                  {t('projects.filterByTech')}
                </DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator className='bg-white/5' />

              <div className='max-h-[300px] overflow-y-auto pr-1'>
                {allTechs.map((group) => (
                  <DropdownMenuGroup key={group.label}>
                    <DropdownMenuLabel className='py-2 text-[11px] text-foreground/30 uppercase tracking-wider'>
                      {group.label}
                    </DropdownMenuLabel>
                    {group.items.map((tech) => {
                      const isSelected = selectedTechs.includes(tech.name);
                      return (
                        <DropdownMenuItem
                          key={tech.name}
                          onSelect={(e) => {
                            e.preventDefault();
                            toggleTech(tech.name);
                          }}
                          className='flex cursor-pointer items-center gap-3 py-2 focus:bg-white/5 focus:text-foreground'
                        >
                          <div
                            className={`flex size-3.5 shrink-0 items-center justify-center rounded-[3px] border transition-colors ${
                              isSelected
                                ? 'border-[#ff2975] bg-[#ff2975] text-white'
                                : 'border-white/20 bg-black/20 text-transparent'
                            }`}
                          >
                            <Check strokeWidth={3} className='size-2.5' />
                          </div>
                          <div className='flex items-center gap-2'>
                            <img
                              src={tech.image}
                              className='size-3.5 object-contain'
                              alt=''
                            />
                            {tech.name}
                          </div>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuGroup>
                ))}
              </div>

              {selectedTechs.length > 0 && (
                <>
                  <DropdownMenuSeparator className='bg-white/5' />
                  <DropdownMenuItem
                    onSelect={clearFilters}
                    className='justify-center font-medium text-[#ff2975] text-[12px] focus:bg-[#ff2975]/10 focus:text-[#ff2975]'
                  >
                    {t('projects.clearFilters')}
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {selectedTechs.length > 0 && (
        <div className='fade-in z-20 mx-auto flex w-full max-w-[1240px] animate-in items-center justify-end duration-300'>
          <div className='flex flex-wrap items-center gap-2'>
            <span className='mr-1 text-[11px] text-foreground/40'>
              {t('projects.activeFilters')}
            </span>
            {selectedTechs.map((techName) => {
              const technologie = techByName[techName];
              return (
                <button
                  key={techName}
                  onClick={() => toggleTech(techName)}
                  className='flex w-auto cursor-pointer flex-row items-center gap-1.5 whitespace-nowrap rounded-full border border-[#ff2975]/20 bg-[#ff2975]/10 px-2.5 py-1 text-[11px] text-white transition-all hover:bg-[#ff2975]/20'
                >
                  {technologie?.image && (
                    <img
                      src={technologie.image}
                      alt={techName}
                      className='size-3 object-contain opacity-80'
                    />
                  )}
                  {techName}
                  <X className='size-3 shrink-0' />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
