import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground focus:outline-none',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 focus:outline-none',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground focus:outline-none',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:outline-none',
        ghost:
          'hover:bg-accent hover:text-accent-foreground focus:outline-none',
        link: 'text-primary underline-offset-4 hover:underline focus:outline-none',
        orangeround:
          'text-black bg-orange-400 rounded-full border-2 border-black hover:bg-orange-400 focus:outline-none border-b-4 shadow-[1px_2px_0px_0px_rgba(0,0,0,1)] active:border-b-2 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] transition-all duration-100',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
