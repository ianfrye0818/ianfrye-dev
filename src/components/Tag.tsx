import { cn } from '@/lib/utils';
import * as React from 'react';
import Typography from './Typeography';

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ label, className, ...props }: TagProps) => {
    return (
      <div
        className={cn(
          'flex items-center justify-center rounded-xl bg-gray-200 dark:bg-slate-800 px-5 py-1',
          className,
        )}
        {...props}
      >
        <Typography
          variant='body3'
          className='font-medium'
        >
          {label}
        </Typography>
      </div>
    );
  },
);

Tag.displayName = 'Tag';

export default Tag;
