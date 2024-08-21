import { cn } from '@ui/lib/utils';

import { type SVGIconProps, iconVariants } from '../iconVariant';

export function OpenEye({ className, alterations, variant, ...props }: SVGIconProps) {
  return (
    <svg
      {...props}
      className={cn(iconVariants({ variant, alterations }), className)}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 -4 20 20">
      <path
        id="Path_994"
        data-name="Path 994"
        d="M23-39a10.752,10.752,0,0,0-10,6.818,10.752,10.752,0,0,0,10,6.818,10.752,10.752,0,0,0,10-6.818A10.752,10.752,0,0,0,23-39Zm0,11.364a4.547,4.547,0,0,1-4.545-4.545A4.547,4.547,0,0,1,23-36.727a4.547,4.547,0,0,1,4.545,4.545A4.547,4.547,0,0,1,23-27.636Zm0-7.273a2.724,2.724,0,0,0-2.727,2.727A2.724,2.724,0,0,0,23-29.455a2.724,2.724,0,0,0,2.727-2.727A2.724,2.724,0,0,0,23-34.909Z"
        transform="translate(-13 39)"
        fill="#001f22"
      />
    </svg>
  );
}
