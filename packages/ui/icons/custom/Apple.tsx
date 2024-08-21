import { cn } from '@ui/lib/utils';

import { type SVGIconProps, iconVariants } from '../iconVariant';

export function Apple({ className, alterations, variant, ...props }: SVGIconProps) {
  return (
    <svg
      {...props}
      className={cn(iconVariants({ variant, alterations }), className)}
      xmlns="http://www.w3.org/2000/svg"
      width="19.328"
      height="23"
      viewBox="0 0 19.328 23">
      <path
        id="apple"
        d="M20.159,44.154A4.794,4.794,0,0,1,22.727,39.8a5.517,5.517,0,0,0-4.349-2.29c-1.823-.144-3.815,1.063-4.544,1.063-.77,0-2.537-1.012-3.923-1.012C7.045,37.607,4,39.846,4,44.4a12.8,12.8,0,0,0,.739,4.17c.657,1.884,3.03,6.506,5.5,6.429,1.294-.031,2.208-.919,3.892-.919,1.633,0,2.48.919,3.923.919,2.5-.036,4.642-4.236,5.268-6.126A5.09,5.09,0,0,1,20.159,44.154Zm-2.906-8.431A4.836,4.836,0,0,0,18.485,32,5.445,5.445,0,0,0,15,33.792a4.912,4.912,0,0,0-1.315,3.692A4.313,4.313,0,0,0,17.253,35.723Z"
        transform="translate(-4 -32)"
      />
    </svg>
  );
}
