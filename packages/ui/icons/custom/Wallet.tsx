import { cn } from '@ui/lib/utils';

import { type SVGIconProps, iconVariants } from '../iconVariant';

export function Wallet({ className, alterations, variant, ...props }: SVGIconProps) {
  return (
    <svg
      {...props}
      className={cn(iconVariants({ variant, alterations }), className)}
      xmlns="http://www.w3.org/2000/svg"
      width="18.921"
      height="20"
      viewBox="0 0 18.921 20">
      <g id="wallet" transform="translate(-13.815 0)">
        <path
          id="Path_11957"
          data-name="Path 11957"
          d="M360.732,284.061H356.28a.557.557,0,0,0-.556.556v2.226a.557.557,0,0,0,.556.556h4.452a.557.557,0,0,0,.556-.556v-2.226A.557.557,0,0,0,360.732,284.061Z"
          transform="translate(-328.553 -272.965)"
          fill="#252525"
        />
        <path
          id="Path_11958"
          data-name="Path 11958"
          d="M27.727,151.614a1.67,1.67,0,0,1-1.669-1.669v-2.226a1.67,1.67,0,0,1,1.67-1.67H31.4a.223.223,0,0,0,.223-.223v-2.56a1.67,1.67,0,0,0-1.669-1.669H14.038a.223.223,0,0,0-.223.223V154.4a1.67,1.67,0,0,0,1.669,1.67H29.953a1.67,1.67,0,0,0,1.67-1.67v-2.56a.223.223,0,0,0-.223-.223H27.727Z"
          transform="translate(0 -136.066)"
          fill="#252525"
        />
        <path
          id="Path_11959"
          data-name="Path 11959"
          d="M91.889,1.673A1.67,1.67,0,0,0,89.561.139L80.073,4.2a.111.111,0,0,0,.044.214H91.666a.223.223,0,0,0,.223-.223V1.673Z"
          transform="translate(-63.605)"
          fill="#252525"
        />
      </g>
    </svg>
  );
}
