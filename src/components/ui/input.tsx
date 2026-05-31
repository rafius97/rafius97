import { cn } from '@lib/utils';
import { X } from 'lucide-react';
import * as React from 'react';

export interface InputProps extends React.ComponentProps<'input'> {
  icon?: React.ReactNode;
  clearable?: boolean;
  onClear?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, clearable, onClear, ...props }, ref) => {
    const hasValue = Boolean(props.value && String(props.value).length > 0);

    return (
      <div
        className={cn(
          'group relative flex h-10 w-full items-center rounded-md border border-white/10 bg-black/40 transition-colors focus-within:border-[#ff2975]/40',
          className,
        )}
      >
        {icon && (
          <div className='-translate-y-1/2 pointer-events-none absolute top-1/2 left-3.5 z-10 text-foreground/40'>
            {icon}
          </div>
        )}
        <input
          type={type}
          ref={ref}
          data-slot='input'
          className={cn(
            'h-full w-full bg-transparent px-4 py-2 text-[13px] text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50',
            icon && 'pl-11',
            clearable && hasValue && 'pr-11',
          )}
          {...props}
        />
        {clearable && hasValue && (
          <button
            type='button'
            onClick={(e) => {
              e.preventDefault();
              onClear?.();
            }}
            className='-translate-y-1/2 absolute top-1/2 right-2 z-10 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-foreground/40 transition-all hover:bg-white/10 hover:text-foreground'
            aria-label='Clear input'
          >
            <X className='size-3.5' />
          </button>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
