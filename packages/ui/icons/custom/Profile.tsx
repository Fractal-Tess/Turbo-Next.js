import { cn } from '@ui/lib/utils';

import { type SVGIconProps, iconVariants } from '../iconVariant';

export function Profile({ className, alterations, variant, ...props }: SVGIconProps) {
  return (
    <svg
      {...props}
      className={cn(iconVariants({ variant, alterations }), className)}
      xmlns="http://www.w3.org/2000/svg"
      width="17.203"
      height="20"
      viewBox="0 0 17.203 20">
      <g
        id="Layer_2_00000088855313069222395470000001121463647142642833_"
        transform="translate(-35.799)">
        <g id="Social_Icon" transform="translate(35.799 0)">
          <g id="Avatar">
            <path
              id="Path_7"
              data-name="Path 7"
              d="M44.4,260.419a6.321,6.321,0,0,0,3.434-.98,1.935,1.935,0,0,1,2.348.2A8.591,8.591,0,0,1,53,266.017v1.043a1.951,1.951,0,0,1-1.953,1.949h-13.3A1.951,1.951,0,0,1,35.8,267.06v-1.043a8.565,8.565,0,0,1,2.816-6.379,1.935,1.935,0,0,1,2.348-.2A6.365,6.365,0,0,0,44.4,260.419Z"
              transform="translate(-35.799 -249.009)"
            />
            <circle
              id="Ellipse_1"
              data-name="Ellipse 1"
              cx="4.836"
              cy="4.836"
              r="4.836"
              transform="translate(3.766)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
