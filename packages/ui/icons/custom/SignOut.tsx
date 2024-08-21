import { cn } from '@ui/lib/utils';

import { type SVGIconProps, iconVariants } from '../iconVariant';

export function SignOut({ className, alterations, variant, ...props }: SVGIconProps) {
  return (
    <svg
      {...props}
      className={cn(iconVariants({ variant, alterations }), className)}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20">
      <g id="logout" transform="translate(0 -0.004)">
        <path
          id="Path_4"
          data-name="Path 4"
          d="M12.5,10.837a.833.833,0,0,0-.833.833V15a.834.834,0,0,1-.833.833h-2.5V3.337A1.68,1.68,0,0,0,7.2,1.753L6.952,1.67h3.882a.834.834,0,0,1,.833.833V5a.833.833,0,1,0,1.667,0V2.5a2.5,2.5,0,0,0-2.5-2.5H1.875a.655.655,0,0,0-.089.018C1.746.019,1.707,0,1.667,0A1.668,1.668,0,0,0,0,1.67v15a1.68,1.68,0,0,0,1.135,1.584L6.15,19.926A1.725,1.725,0,0,0,6.667,20a1.668,1.668,0,0,0,1.667-1.667V17.5h2.5a2.5,2.5,0,0,0,2.5-2.5V11.67A.833.833,0,0,0,12.5,10.837Zm0,0"
        />
        <path
          id="Path_5"
          data-name="Path 5"
          d="M286.255,110.243l-3.333-3.333a.833.833,0,0,0-1.422.589V110h-3.333a.833.833,0,1,0,0,1.667H281.5v2.5a.833.833,0,0,0,1.422.589l3.333-3.333A.832.832,0,0,0,286.255,110.243Zm0,0"
          transform="translate(-266.499 -102.495)"
        />
      </g>
    </svg>
  );
}
