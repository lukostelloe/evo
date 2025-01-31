import React from "react";
import { cn } from "../../lib/utils";



/**
 * A flex div
 */
export const Stack = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>((props, ref) => {
  const { className, ...rest } = props
  return (
    <div
      ref={ref}
      className={cn('flex', className)}
      {...rest}
    />
  )
})

/**
 * A flex column div
 */
export const YStack = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>((props, ref) => {
  const { className, ...rest } = props
  return (
    <div
      ref={ref}
      className={cn('flex flex-col', className)}
      {...rest}
    />
  )
})

/**
 * A flex row div
 */
export const XStack = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>((props, ref) => {
  const { className, ...rest } = props
  return (
    <div
      ref={ref}
      className={cn('flex flex-row', className)}
      {...rest}
    />
  )
})