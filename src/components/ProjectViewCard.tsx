import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@components/ui/dialog';
import { cn } from '@lib/utils';
import { ArrowUpRight, X } from 'lucide-react';

export interface ProjectView {
  resource: string;
  type: 'image' | 'video';
  title: string;
  description: string;
}

export default function ProjectViewCard({
  resource,
  type,
  title,
  description,
}: ProjectView) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type='button'
          className={cn(
            'group w-full overflow-hidden rounded-[20px] border border-white/5 bg-[#131313]/90',
            'cursor-pointer text-left transition-all duration-300 hover:border-[#ff2975]/30',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff2975]/50',
          )}
        >
          {/* Image */}
          <div className='relative aspect-[16/10] w-full overflow-hidden bg-[#0A0A0A]'>
            {type === 'video' ? (
              <video
                src={resource}
                autoPlay
                loop
                muted
                playsInline
                className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
              />
            ) : (
              <img
                src={resource}
                alt={title}
                className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
              />
            )}
            <div className='absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
            <div className='absolute right-3 bottom-3 flex size-[38px] translate-y-1 items-center justify-center rounded-full bg-gradient-to-r from-[#ff2975] to-[#ff6b35] text-white opacity-0 shadow-[0_4px_16px_rgba(255,41,117,0.5)] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
              <ArrowUpRight className='size-[20px]' />
            </div>
          </div>

          {/* Text */}
          <div className='px-4 py-4'>
            <p className='mb-1.5 font-semibold text-[17px] text-foreground'>
              {title}
            </p>
            <p className='text-[14px] text-foreground/55 leading-relaxed'>
              {description}
            </p>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className={cn(
          'w-full max-w-[820px] gap-0 overflow-hidden p-0 lg:max-w-[1060px]',
          'border border-white/8 bg-[#0E0E0E]',
          'rounded-[24px] shadow-[0_32px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,41,117,0.08)]',
        )}
      >
        {/* Image */}
        <div className='relative aspect-[16/9] w-full overflow-hidden bg-[#0A0A0A]'>
          {type === 'video' ? (
            <video
              src={resource}
              autoPlay
              loop
              muted
              playsInline
              className='h-full w-full object-cover'
            />
          ) : (
            <img
              src={resource}
              alt={title}
              className='h-full w-full object-cover'
            />
          )}
          <div
            className='absolute inset-0'
            style={{
              background:
                'linear-gradient(180deg, transparent 60%, rgba(14,14,14,0.95) 100%)',
            }}
          />
          <DialogClose asChild>
            <button
              type='button'
              className='absolute top-4 right-4 flex size-9 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/70 backdrop-blur-sm transition-all duration-200 hover:bg-black/70 hover:text-white'
              aria-label='Close'
            >
              <X className='size-4' />
              <span className='sr-only'>Close</span>
            </button>
          </DialogClose>
        </div>

        {/* Content */}
        <div className='flex flex-col gap-3 p-8'>
          <div className='flex items-center gap-3'>
            <div className='h-6 w-[3px] rounded-full bg-gradient-to-b from-[#ff2975] to-[#ff6b35] shadow-[0_0_10px_#ff2975]' />
            <DialogTitle className='font-bold text-[22px] text-foreground'>
              {title}
            </DialogTitle>
          </div>
          <DialogDescription className='pl-6 text-[15px] text-foreground/60 leading-[1.7]'>
            {description}
          </DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  );
}
