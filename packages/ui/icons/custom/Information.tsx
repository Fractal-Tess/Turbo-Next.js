import { cn } from '@ui/lib/utils';

import { type SVGIconProps, iconVariants } from '../iconVariant';

export function Information({ className, alterations, variant, ...props }: SVGIconProps) {
  return (
    <svg
      {...props}
      className={cn(iconVariants({ variant, alterations }), className)}
      xmlns="http://www.w3.org/2000/svg"
      id="information"
      width="20"
      height="20"
      viewBox="0 0 20 20">
      <g id="Group_22376" data-name="Group 22376">
        <path
          id="Path_11962"
          data-name="Path 11962"
          d="M10,0A10,10,0,1,0,20,10,10.039,10.039,0,0,0,10,0Zm1.172,14.688a1.172,1.172,0,0,1-2.344,0V8.828a1.172,1.172,0,0,1,2.344,0ZM10,6.484a1.172,1.172,0,1,1,1.172-1.172A1.173,1.173,0,0,1,10,6.484Z"
          fill="#252525"
        />
      </g>
    </svg>
  );
}
