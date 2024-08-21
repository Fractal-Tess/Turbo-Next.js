import { cn } from '@ui/lib/utils';

import { type SVGIconProps, iconVariants } from '../iconVariant';

export function Heart({ className, alterations, variant, ...props }: SVGIconProps) {
  return (
    <svg
      {...props}
      className={cn(iconVariants({ variant, alterations }), className)}
      xmlns="http://www.w3.org/2000/svg"
      width="27.273"
      height="25"
      viewBox="0 0 27.273 25">
      <g id="heart" transform="translate(0 -21.333)">
        <g id="Group_22397" data-name="Group 22397" transform="translate(0 21.333)">
          <path
            id="Path_11967"
            data-name="Path 11967"
            d="M20.17,21.333c-3.025,0-5.524,2.81-6.534,4.136-1.01-1.326-3.509-4.136-6.534-4.136-3.916,0-7.1,3.6-7.1,8.026a8.383,8.383,0,0,0,2.636,6.2.561.561,0,0,0,.089.116l10.51,10.489a.568.568,0,0,0,.8,0L24.9,35.311l.112-.109c.089-.084.176-.169.275-.277a.552.552,0,0,0,.1-.135,8.578,8.578,0,0,0,1.887-5.43C27.273,24.934,24.087,21.333,20.17,21.333Z"
            transform="translate(0 -21.333)"
            fill="#f4ca04"
          />
        </g>
      </g>
    </svg>
  );
}
