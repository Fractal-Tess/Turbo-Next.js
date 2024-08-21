import { cn } from '@ui/lib/utils';

import { type SVGIconProps, iconVariants } from '../iconVariant';

export function Dashboard({ className, alterations, variant, ...props }: SVGIconProps) {
  return (
    <svg
      {...props}
      className={cn(iconVariants({ variant, alterations }), className)}
      xmlns="http://www.w3.org/2000/svg"
      id="dashboard"
      width="20"
      height="20"
      viewBox="0 0 20 20">
      <path
        id="Path_8"
        data-name="Path 8"
        d="M7.708,0H1.458A1.46,1.46,0,0,0,0,1.458v3.75A1.46,1.46,0,0,0,1.458,6.667h6.25A1.46,1.46,0,0,0,9.167,5.208V1.458A1.46,1.46,0,0,0,7.708,0Zm0,0"
      />
      <path
        id="Path_9"
        data-name="Path 9"
        d="M7.708,213.332H1.458A1.46,1.46,0,0,0,0,214.79v8.75A1.46,1.46,0,0,0,1.458,225h6.25a1.46,1.46,0,0,0,1.458-1.458v-8.75A1.46,1.46,0,0,0,7.708,213.332Zm0,0"
        transform="translate(0 -204.999)"
      />
      <path
        id="Path_10"
        data-name="Path 10"
        d="M285.04,341.332h-6.25a1.46,1.46,0,0,0-1.458,1.458v3.75A1.46,1.46,0,0,0,278.79,348h6.25a1.46,1.46,0,0,0,1.458-1.458v-3.75A1.46,1.46,0,0,0,285.04,341.332Zm0,0"
        transform="translate(-266.499 -327.999)"
      />
      <path
        id="Path_11"
        data-name="Path 11"
        d="M285.04,0h-6.25a1.46,1.46,0,0,0-1.458,1.458v8.75a1.46,1.46,0,0,0,1.458,1.458h6.25a1.46,1.46,0,0,0,1.458-1.458V1.458A1.46,1.46,0,0,0,285.04,0Zm0,0"
        transform="translate(-266.499)"
      />
    </svg>
  );
}
