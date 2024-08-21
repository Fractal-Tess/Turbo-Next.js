import { cn } from '@ui/lib/utils';

import { type SVGIconProps, iconVariants } from '../iconVariant';

export function AgeGroup({ className, alterations, variant, ...props }: SVGIconProps) {
  return (
    <svg
      {...props}
      className={cn(iconVariants({ variant, alterations }), className)}
      viewBox="0 0 395 334"
      focusable="false"
      stroke-width="1"
      stroke-opacity="0.10">
      <path
        stroke="currentColor"
        d="M1 1.305c5.496 110.802 64.608 332.307 169.152 331.916 104.544-.392 192.967-124.509 224.111-186.519"></path>
      <path
        stroke="currentColor"
        d="M71.836 1.305c4.665 111.7 54.844 267.881 143.589 267.487 88.745-.395 152.58-61.07 177.617-149.621"></path>
      <path
        stroke="currentColor"
        d="M134.734 1c3.296 77.016 39.151 177.293 101.437 184.431C345.41 197.951 382.66 56.268 382.66 1"></path>
      <path
        stroke="currentColor"
        d="M197.631 1.305c2.068 51.005 24.306 122.321 63.636 122.14 39.33-.18 71.319-39.695 71.319-122.14"></path>
    </svg>
  );
}
