import { $viewMode } from '@lib/stores/projectsStore';
import { useStore } from '@nanostores/react';
import { Grid, List } from 'lucide-react';

export function ProjectsViewToggle() {
  const viewMode = useStore($viewMode);

  return (
    <div className='flex h-6 w-auto items-center gap-2 border-white/10 border-l pl-4'>
      <button
        onClick={() => $viewMode.set('grid')}
        className={`flex size-[26px] cursor-pointer items-center justify-center rounded-[6px] border transition-all ${
          viewMode === 'grid'
            ? 'border-[#ff2975]/30 bg-[#ff2975]/10 text-white shadow-[0_0_15px_rgba(255,41,117,0.2)]'
            : 'border-white/10 bg-white/5 text-foreground/60 hover:border-white/20 hover:text-white'
        }`}
        aria-label='Grid view'
      >
        <Grid className='size-4' />
      </button>
      <button
        onClick={() => $viewMode.set('list')}
        className={`flex size-[26px] cursor-pointer items-center justify-center rounded-[6px] border transition-all ${
          viewMode === 'list'
            ? 'border-[#ff2975]/30 bg-[#ff2975]/10 text-white shadow-[0_0_15px_rgba(255,41,117,0.2)]'
            : 'border-white/10 bg-white/5 text-foreground/60 hover:border-white/20 hover:text-white'
        }`}
        aria-label='List view'
      >
        <List className='size-4' />
      </button>
    </div>
  );
}
