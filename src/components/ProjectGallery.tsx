import type { ProjectView } from '@api/projects';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@components/ui/dialog';
import { cn } from '@lib/utils';
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ProjectGallery({ views }: { views: ProjectView[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % views.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + views.length) % views.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') {
        setSelectedIndex((selectedIndex + 1) % views.length);
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((selectedIndex - 1 + views.length) % views.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, views.length]);

  return (
    <>
      {/* Grid Layout */}
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {views.map((view, idx) => (
          <button
            key={idx}
            type='button'
            onClick={() => setSelectedIndex(idx)}
            className={cn(
              'group flex h-full w-full flex-col overflow-hidden rounded-[20px] border border-white/5 bg-[#131313]/90',
              'cursor-pointer text-left transition-all duration-300 hover:border-[#ff2975]/30',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff2975]/50',
            )}
          >
            {/* Thumbnail */}
            <div className='relative aspect-[16/10] w-full overflow-hidden bg-[#0A0A0A]'>
              {view.type === 'video' ? (
                <video
                  src={view.resource}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
                />
              ) : (
                <img
                  src={view.resource}
                  alt={view.title}
                  className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
                />
              )}
              <div className='absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
              <div className='absolute right-3 bottom-3 flex size-[38px] translate-y-1 items-center justify-center rounded-full bg-gradient-to-r from-[#ff2975] to-[#ff6b35] text-white opacity-0 shadow-[0_4px_16px_rgba(255,41,117,0.5)] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                <ArrowUpRight className='size-[20px]' />
              </div>
            </div>

            {/* Text */}
            <div className='flex flex-grow flex-col px-4 py-4'>
              <p className='mb-1.5 font-semibold text-[17px] text-foreground'>
                {view.title}
              </p>
              <p className='text-[14px] text-foreground/55 leading-relaxed'>
                {view.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog
        open={selectedIndex !== null}
        onOpenChange={(open) => !open && setSelectedIndex(null)}
      >
        <DialogContent
          showCloseButton={false}
          className={cn(
            'w-full max-w-[820px] gap-0 overflow-hidden p-0 lg:max-w-[1060px]',
            'border border-white/8 bg-[#0E0E0E]',
            'rounded-[24px] shadow-[0_32px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,41,117,0.08)]',
          )}
        >
          {selectedIndex !== null && (
            <>
              {/* Media */}
              <div className='group/lightbox relative aspect-[16/9] w-full overflow-hidden bg-[#0A0A0A]'>
                {views[selectedIndex].type === 'video' ? (
                  <video
                    src={views[selectedIndex].resource}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='h-full w-full object-contain'
                  />
                ) : (
                  <img
                    src={views[selectedIndex].resource}
                    alt={views[selectedIndex].title}
                    className='h-full w-full object-contain'
                  />
                )}

                {/* Gradient overlay for text visibility */}
                <div
                  className='pointer-events-none absolute inset-0'
                  style={{
                    background:
                      'linear-gradient(180deg, transparent 60%, rgba(14,14,14,0.95) 100%)',
                  }}
                />

                {/* Navigation Buttons */}
                {views.length > 1 && (
                  <>
                    <button
                      type='button'
                      onClick={handlePrev}
                      className='-translate-y-1/2 absolute top-1/2 left-4 z-10 flex size-12 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/80 opacity-0 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#ff2975] hover:bg-[#ff2975]/80 hover:text-white focus:opacity-100 group-hover/lightbox:opacity-100'
                    >
                      <ChevronLeft className='size-7' />
                    </button>
                    <button
                      type='button'
                      onClick={handleNext}
                      className='-translate-y-1/2 absolute top-1/2 right-4 z-10 flex size-12 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/80 opacity-0 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#ff2975] hover:bg-[#ff2975]/80 hover:text-white focus:opacity-100 group-hover/lightbox:opacity-100'
                    >
                      <ChevronRight className='size-7' />
                    </button>
                  </>
                )}

                <DialogClose asChild>
                  <button
                    type='button'
                    className='absolute top-4 right-4 z-10 flex size-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/70 backdrop-blur-sm transition-all duration-200 hover:bg-black/70 hover:text-white'
                    aria-label='Close'
                  >
                    <X className='size-4' />
                    <span className='sr-only'>Close</span>
                  </button>
                </DialogClose>
              </div>

              {/* Content */}
              <div className='relative z-10 flex flex-col gap-3 p-8'>
                <div className='flex items-center justify-between gap-3'>
                  <div className='flex items-center gap-3'>
                    <div className='h-6 w-[3px] rounded-full bg-gradient-to-b from-[#ff2975] to-[#ff6b35] shadow-[0_0_10px_#ff2975]' />
                    <DialogTitle className='font-bold text-[22px] text-foreground'>
                      {views[selectedIndex].title}
                    </DialogTitle>
                  </div>
                  {views.length > 1 && (
                    <div className='w-fit shrink-0 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1 font-medium text-[14px] text-white/40'>
                      {selectedIndex + 1} / {views.length}
                    </div>
                  )}
                </div>
                <DialogDescription className='pl-6 text-[15px] text-foreground/60 leading-[1.7]'>
                  {views[selectedIndex].description}
                </DialogDescription>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
