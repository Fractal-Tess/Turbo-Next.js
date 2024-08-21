import { cn } from '@ui/lib/utils';

import { type SVGIconProps, iconVariants } from '../iconVariant';

export function AgeGroup({ className, alterations, variant, ...props }: SVGIconProps) {
  return (
    <svg
      {...props}
      className={cn(iconVariants({ variant, alterations }), className)}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20">
      <g id="age-group" transform="translate(0 -0.155)">
        <path
          id="Path_11972"
          data-name="Path 11972"
          d="M325.581,95.178a3.73,3.73,0,0,0-3.7,3.328,4.9,4.9,0,0,1,2.323,4.166v2.512a3.013,3.013,0,0,1-1.089,2.32v3.374a.586.586,0,0,0,.586.586h3.766a.586.586,0,0,0,.586-.586v-5.831A1.845,1.845,0,0,0,329.3,103.3V98.9A3.729,3.729,0,0,0,325.581,95.178Z"
          transform="translate(-309.305 -91.309)"
          fill="#252525"
        />
        <path
          id="Path_11973"
          data-name="Path 11973"
          d="M370.862,3.869A1.862,1.862,0,1,0,369,2.006,1.865,1.865,0,0,0,370.862,3.869Z"
          transform="translate(-354.586 0)"
          fill="#252525"
        />
        <path
          id="Path_11974"
          data-name="Path 11974"
          d="M212.356,98.107a1.863,1.863,0,1,0-1.862,1.863A1.865,1.865,0,0,0,212.356,98.107Z"
          transform="translate(-200.494 -92.333)"
          fill="#252525"
        />
        <path
          id="Path_11975"
          data-name="Path 11975"
          d="M164.914,191.578a3.73,3.73,0,0,0-3.7,3.328,4.9,4.9,0,0,1,2.323,4.166v.628a3.013,3.013,0,0,1-1.089,2.32v1.49a.586.586,0,0,0,.586.586H166.8a.586.586,0,0,0,.586-.586v-3.947a1.845,1.845,0,0,0,1.255-1.747V195.3A3.729,3.729,0,0,0,164.914,191.578Z"
          transform="translate(-154.914 -183.941)"
          fill="#252525"
        />
        <path
          id="Path_11976"
          data-name="Path 11976"
          d="M3.724,287.978A3.723,3.723,0,0,0,0,291.7v.628a1.845,1.845,0,0,0,1.255,1.747v2.063a.586.586,0,0,0,.586.586H5.607a.586.586,0,0,0,.586-.586v-2.063a1.845,1.845,0,0,0,1.255-1.747V291.7A3.723,3.723,0,0,0,3.724,287.978Z"
          transform="translate(0 -276.573)"
          fill="#252525"
        />
        <path
          id="Path_11977"
          data-name="Path 11977"
          d="M49.528,196.669a1.862,1.862,0,1,0-1.862-1.863A1.865,1.865,0,0,0,49.528,196.669Z"
          transform="translate(-45.804 -185.264)"
          fill="#252525"
        />
      </g>
    </svg>
  );
}
