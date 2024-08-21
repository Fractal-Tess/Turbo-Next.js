import { cn } from '@ui/lib/utils';

import { type SVGIconProps, iconVariants } from '../iconVariant';

export function Padlock({ className, alterations, variant, ...props }: SVGIconProps) {
  return (
    <svg
      {...props}
      className={cn(iconVariants({ variant, alterations }), className)}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="20"
      viewBox="0 0 15 20">
      <path
        id="padlock"
        d="M16.125,7.5H15.5V5a5,5,0,0,0-10,0V7.5H4.875A1.877,1.877,0,0,0,3,9.375v8.75A1.877,1.877,0,0,0,4.875,20h11.25A1.877,1.877,0,0,0,18,18.125V9.375A1.877,1.877,0,0,0,16.125,7.5ZM7.167,5a3.333,3.333,0,1,1,6.667,0V7.5H7.167Zm4.167,8.935v1.9a.833.833,0,0,1-1.667,0v-1.9a1.667,1.667,0,1,1,1.667,0Z"
        transform="translate(-3)"
        fill="#252525"
      />
    </svg>
  );
}
