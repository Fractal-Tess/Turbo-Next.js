import { cn } from '@ui/lib/utils';

import { type SVGIconProps, iconVariants } from '../iconVariant';

export function Pin({ className, alterations, variant, ...props }: SVGIconProps) {
  return (
    <svg
      {...props}
      className={cn(iconVariants({ variant, alterations }), className)}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="20"
      viewBox="0 0 15 20">
      <path
        id="location-pin"
        d="M10.5,0A7.536,7.536,0,0,0,3,7.554c0,5.919,6.8,12.031,7.084,12.287a.626.626,0,0,0,.832,0C11.2,19.585,18,13.473,18,7.554A7.536,7.536,0,0,0,10.5,0Zm0,11.667A4.167,4.167,0,1,1,14.667,7.5,4.171,4.171,0,0,1,10.5,11.667Z"
        transform="translate(-3)"
        fill="#252525"
      />
    </svg>
  );
}
