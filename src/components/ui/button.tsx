import { cn } from '@lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-[8px] whitespace-nowrap rounded-md text-[14px] font-normal transition-colors hover:cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-[18px] shrink-0 [&_svg]:shrink-0 outline-none  aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary:
          'bg-linear-90/srgb from-primary-gradient-1 from-0% to-primary-gradient-2 to-75% text-primary-foreground hover:from-primary-gradient-1/90 hover:to-primary-gradient-2/90 opacity-90',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/60',
        link: 'text-primary-foreground hover:bg-black/20',
        plain: 'text-primary-foreground',
        none: '',
      },
      size: {
        default: 'px-[16px] py-[12px]',
        sm: 'px-[12px] py-[8px]',
        icon: 'p-[10px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
