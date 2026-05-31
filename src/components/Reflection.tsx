import { cn } from '@lib/utils';

interface ReflectionProps {
  className?: string;
}

export function Reflection({ className }: ReflectionProps) {
  return (
    <div
      className={cn(
        'absolute top-[35%] right-[43%] h-[450px] w-[200px] blur-2xl',
        className,
      )}
      style={{
        background:
          'conic-gradient(from -10deg at bottom, rgba(255,41,117,0.4) 0deg 20deg, #0000 21deg)',
        // maskImage: 'linear-gradient(#000,#0000)',
      }}
    ></div>
  );
}
