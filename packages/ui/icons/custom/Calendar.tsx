import { cn } from '@ui/lib/utils';

import { type SVGIconProps, iconVariants } from '../iconVariant';

export function Calendar({ className, alterations, variant, ...props }: SVGIconProps) {
  return (
    <svg
      {...props}
      className={cn(iconVariants({ variant, alterations }), className)}
      xmlns="http://www.w3.org/2000/svg"
      width="20.479"
      height="18"
      viewBox="0 0 20.479 18">
      <g id="calendar" transform="translate(0 -30.988)">
        <path
          id="Path_11948"
          data-name="Path 11948"
          d="M.6,160.588h15.68a.6.6,0,0,0,.384-.139c.151-.126,3.586-3.082,3.8-9.461H3.619C3.41,156.779.246,159.5.213,159.528a.6.6,0,0,0,.386,1.06Z"
          transform="translate(0 -115.2)"
          fill="#252525"
        />
        <path
          id="Path_11949"
          data-name="Path 11949"
          d="M107.216,32.188h-3v-.6a.6.6,0,0,0-1.2,0v.6h-3.04v-.6a.6.6,0,0,0-1.2,0v.6h-3v-.6a.6.6,0,0,0-1.2,0v.6h-3a.594.594,0,0,0-.6.6v1.8h16.84v-1.8A.594.594,0,0,0,107.216,32.188Z"
          transform="translate(-87.337 0)"
          fill="#252525"
        />
        <path
          id="Path_11950"
          data-name="Path 11950"
          d="M104.772,302.35a1.805,1.805,0,0,1-1.155.419H90.977v1.8a.6.6,0,0,0,.6.6h15.64a.6.6,0,0,0,.6-.6v-6.726A11.892,11.892,0,0,1,104.772,302.35Z"
          transform="translate(-87.338 -256.181)"
          fill="#252525"
        />
      </g>
    </svg>
  );
}
