import { Copyright } from 'lucide-react';
import Typography from './Typeography';

export function Footer() {
  return (
    <footer className='w-full bg-gray-50 dark:bg-slate-950 py-6'>
      <div className='flex items-center justify-center gap-1'>
        <Typography
          className='flex items-center'
          variant='body3'
        >
          <Copyright className='mr-1 inline-block h-4 w-4' />
          {new Date().getFullYear()} | ianfrye.dev
        </Typography>
      </div>
    </footer>
  );
}
