import { cn } from '@ui/lib/utils';

import { type SVGIconProps, iconVariants } from '../iconVariant';

export function Mail({ className, alterations, variant, ...props }: SVGIconProps) {
  return (
    <svg
      {...props}
      className={cn(iconVariants({ variant, alterations }), className)}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="14.979"
      viewBox="0 0 20 14.979">
      <g id="email" transform="translate(0 -64.266)">
        <path
          id="Path_11963"
          data-name="Path 11963"
          d="M11.671,176.96a3.008,3.008,0,0,1-3.343,0L.133,171.5c-.045-.03-.09-.062-.133-.094v8.953A1.841,1.841,0,0,0,1.841,182.2H18.159A1.84,1.84,0,0,0,20,180.355V171.4c-.043.033-.088.064-.133.095Z"
          transform="translate(0 -102.951)"
          fill="#252525"
        />
        <path
          id="Path_11964"
          data-name="Path 11964"
          d="M.783,67.57l8.2,5.464a1.836,1.836,0,0,0,2.043,0l8.2-5.464A1.755,1.755,0,0,0,20,66.107a1.843,1.843,0,0,0-1.841-1.841H1.841A1.843,1.843,0,0,0,0,66.107,1.754,1.754,0,0,0,.783,67.57Z"
          fill="#252525"
        />
      </g>
    </svg>
  );
}
