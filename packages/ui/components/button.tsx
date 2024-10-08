import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@ui/lib/utils';

export const oldButtonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border text-primary border-primary hover:text-muted hover:border-muted',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        formLoading: 'pointer-events-none bg-muted text-muted-foreground'
      },
      size: {
        default: 'h-[56px] min-w-[216px] px-4 py-2 !rounded-[28px] text-[20px]',
        small: 'h-[45px] min-w-[144px] px-4 py-2 !rounded-[28px] text-[18px]'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);
export const linkVariants = cva('', {
  variants: {
    variant: {
      default: '',
      blue: 'text-[#006CFF] underline-offset-2 underline',
      asideNav:
        'rounded-[35px] w-[275px] h-[70px] [&_svg]:mx-[25px] py-[25px] [&>_*]:inline transition-all duration-300',
      primary: 'text-primary',
      button:
        'bg-primary text-white fill-white !font-bold w-52 h-14 rounded-[28px] flex items-center justify-center',
      buttonOutline:
        'border border-primary text-primary w-52 h-14 rounded-[28px] flex items-center justify-center',
      SSO: 'block flex items-center justify-center relative h-[55px] w-[425px]  rounded-[5px] shadow-[0_3px_6px_rgba(0,0,0,0.3)]'
    },
    active: {
      default: '',
      active: 'bg-primary text-white fill-white !font-bold'
    },
    font: {
      default: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
      black: 'font-black'
    },
    fontSize: {
      default: 'text-base',
      small: 'text-sm',
      medium: 'text-xl',
      big: 'text-2xl'
    }
  },
  defaultVariants: {
    variant: 'default',
    active: 'default',
    font: 'default'
  }
});

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        shimmer:
          'animate-shimmer inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors !outline-none !ring-0',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
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
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
