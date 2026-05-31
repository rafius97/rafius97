import { cn } from '@lib/utils';
import * as React from 'react';

export interface TextareaProps extends React.ComponentProps<'textarea'> {
  icon?: React.ReactNode;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, icon, ...props }, ref) => {
    return (
      <div
        className={cn(
          'group relative flex w-full rounded-md border border-white/10 bg-black/40 transition-colors focus-within:border-[#ff2975]/40',
          className,
        )}
      >
        {icon && (
          <div className='pointer-events-none absolute top-3 left-3.5 z-10 text-foreground/40'>
            {icon}
          </div>
        )}
        <textarea
          ref={ref}
          data-slot='textarea'
          className={cn(
            'flex min-h-[80px] w-full resize-none bg-transparent px-4 py-3 text-[13px] text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50',
            icon && 'pl-11',
          )}
          {...props}
        />
      </div>
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
