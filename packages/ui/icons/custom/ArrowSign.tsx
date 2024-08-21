import { cn } from '@ui/lib/utils';

import { type SVGIconProps, iconVariants } from '../iconVariant';

export function ArrowSign({ className, alterations, variant, ...props }: SVGIconProps) {
  return (
    <svg
      {...props}
      className={cn(iconVariants({ variant, alterations }), className)}
      xmlns="http://www.w3.org/2000/svg"
      width="15.5"
      height="9.129"
      viewBox="0 0 15.5 9.129">
      <g id="arrow-down-sign-to-navigate" transform="translate(0.25 0.25)">
        <path
          id="Path_11619"
          data-name="Path 11619"
          d="M7.5,97.141a1.047,1.047,0,0,0-.743.308L.308,103.9a1.05,1.05,0,0,0,1.486,1.486L7.5,99.676l5.707,5.707a1.05,1.05,0,0,0,1.485-1.486l-6.45-6.45A1.047,1.047,0,0,0,7.5,97.141Z"
          transform="translate(-0.001 -97.141)"
          fill="#f4ca04"
          stroke="#fff"
          strokeWidth="0.5"
        />
      </g>
    </svg>
  );
}
