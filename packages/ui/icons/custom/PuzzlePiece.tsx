import { cn } from '@ui/lib/utils';

import { type SVGIconProps, iconVariants } from '../iconVariant';

export function PuzzlePiece({ className, alterations, variant, ...props }: SVGIconProps) {
  return (
    <svg
      {...props}
      className={cn(iconVariants({ variant, alterations }), className)}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20">
      <path
        id="puzzle"
        d="M18.333,10.333H17V7a2,2,0,0,0-2-2H11.667V3.667a2.667,2.667,0,1,0-5.333,0V5H3A2,2,0,0,0,1,7v4a.667.667,0,0,0,.667.667h2a1.333,1.333,0,1,1,0,2.667h-2A.667.667,0,0,0,1,15v4a2,2,0,0,0,2,2H7a.667.667,0,0,0,.667-.667v-2a1.333,1.333,0,0,1,2.667,0v2A.667.667,0,0,0,11,21h4a2,2,0,0,0,2-2V15.667h1.333a2.667,2.667,0,1,0,0-5.333Z"
        transform="translate(-1 -1)"
        fill="#252525"
      />
    </svg>
  );
}
