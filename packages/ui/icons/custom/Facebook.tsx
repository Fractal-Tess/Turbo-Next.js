import { cn } from '@ui/lib/utils';

import { type SVGIconProps, iconVariants } from '../iconVariant';

export function Facebook({ className, alterations, variant, ...props }: SVGIconProps) {
  return (
    <svg
      {...props}
      className={cn(iconVariants({ variant, alterations }), className)}
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 23 23">
      <path
        id="facebook"
        d="M23,11.543a11.5,11.5,0,1,0-14.276,11.2V15.069H6.352V11.543H8.724v-1.52c0-3.927,1.77-5.749,5.615-5.749a12.613,12.613,0,0,1,2.5.289V7.755c-.27-.027-.741-.045-1.33-.045-1.887,0-2.614.717-2.614,2.579v1.253h3.755l-.647,3.526H12.893V23A11.526,11.526,0,0,0,23,11.543Z"
      />
    </svg>
  );
}
