import { VariantProps, cva } from 'class-variance-authority';
import { SVGProps } from 'react';

export const iconVariants = cva('pointer-events-none', {
  variants: {
    variant: {
      default: '',
      inputRight: 'absolute top-[52px] -translate-y-1/2 right-4',
      inputLeft: 'absolute top-[52px] -translate-y-1/2 left-4 ',
      SSO: 'absolute left-4 top-4 h-6 w-6'
    },
    alterations: {
      default: '',
      noFormLabel: '!top-[28px]'
    }
  },

  defaultVariants: {
    variant: 'default',
    alterations: 'default'
  }
});

export interface SVGIconProps extends SVGProps<SVGSVGElement>, VariantProps<typeof iconVariants> {}
