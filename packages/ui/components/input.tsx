import { cn } from '@ui/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

export const inputVariants = cva(
  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50  my-2',
  {
    variants: {
      variant: {
        default: '',
        icons: 'px-12',
        iconLeft: 'pl-12'
      },
      sized: {
        default: '',
        hint: 'w-[425px] h-[56px]'
      }
    },

    defaultVariants: {
      variant: 'default',
      sized: 'default'
    }
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, sized, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, sized, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
