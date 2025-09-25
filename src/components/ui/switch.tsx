import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      // base size/layout
      'peer inline-flex h-10 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 transition-all disabled:cursor-not-allowed disabled:opacity-50',
      // button-like style (matches big buttons)
      'border-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:translate-x-[-1px]',
      // checked/unchecked background colors
      'data-[state=checked]:bg-green-400 data-[state=unchecked]:bg-red-500',
      // focus ring
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring focus-visible:ring-offset-background',
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block h-7 w-7 rounded-full bg-background ring-0 transition-transform border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
        'data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-1'
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
