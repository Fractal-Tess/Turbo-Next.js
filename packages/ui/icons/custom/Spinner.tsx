import { cn } from '@ui/lib/utils';

import { type SVGIconProps, iconVariants } from '../iconVariant';

export function Spinner({ className, alterations, variant, ...props }: SVGIconProps) {
  return (
    <svg
      {...props}
      className={cn(iconVariants({ variant, alterations }), className)}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}
