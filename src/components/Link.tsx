import { cn } from '@/lib/utils';
import * as React from 'react';

interface BaseLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  externalLink?: boolean;
  withUnderline?: boolean;
  noCustomization?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, BaseLinkProps>((props, ref) => {
  return (
    <a
      ref={ref}
      {...props}
      className={cn(
        props.noCustomization
          ? 'text-base font-medium text-gray-600 transition-all hover:text:gray-900 active:text-gray-600'
          : '',
        props.withUnderline
          ? 'underline underline-offset-4 transition-all hover:text-gray-900 active:text-gray-600'
          : '',
        props.className,
      )}
    >
      {props.children}
    </a>
  );
});
