import { cn } from '@ui/lib/utils';

import { type SVGIconProps, iconVariants } from '../iconVariant';

export function Gender({ className, alterations, variant, ...props }: SVGIconProps) {
  return (
    <svg
      {...props}
      className={cn(iconVariants({ variant, alterations }), className)}
      xmlns="http://www.w3.org/2000/svg"
      width="18.046"
      height="20"
      viewBox="0 0 18.046 20">
      <g id="Icon" transform="translate(-25 0)">
        <g id="Peoples" transform="translate(25 0)">
          <circle
            id="Ellipse_2"
            data-name="Ellipse 2"
            cx="2.605"
            cy="2.605"
            r="2.605"
            transform="translate(10.355)"
            fill="#252525"
          />
          <path
            id="Path_11960"
            data-name="Path 11960"
            d="M236.739,156.69l-1.484-5.824a2.344,2.344,0,0,0-2.27-1.766h-2.578a2.34,2.34,0,0,0-2.27,1.766l-1.484,5.824a1.367,1.367,0,0,0,1.324,1.7h1.109V162.1a1.17,1.17,0,0,0,1.172,1.172h2.871A1.17,1.17,0,0,0,234.3,162.1v-3.711h1.113A1.367,1.367,0,0,0,236.739,156.69Z"
            transform="translate(-218.735 -143.276)"
            fill="#252525"
          />
          <path
            id="Path_11961"
            data-name="Path 11961"
            d="M29.824,149.2h-2.48A2.346,2.346,0,0,0,25,151.544v4.211a1.172,1.172,0,0,0,.977,1.156V162.2a1.17,1.17,0,0,0,1.172,1.172H30.02a1.17,1.17,0,0,0,1.172-1.172v-5.289a1.172,1.172,0,0,0,.977-1.156v-4.211A2.341,2.341,0,0,0,29.824,149.2Z"
            transform="translate(-25 -143.372)"
            fill="#252525"
          />
          <circle
            id="Ellipse_3"
            data-name="Ellipse 3"
            cx="2.605"
            cy="2.605"
            r="2.605"
            transform="translate(0.98)"
            fill="#252525"
          />
        </g>
      </g>
    </svg>
  );
}
