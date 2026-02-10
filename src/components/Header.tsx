import { useScroll, useWindowSize } from '@/hooks';
import { NAV_LINKS } from '@/lib/data';
import { cn } from '@/lib/utils';
import { MenuIcon, XIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { DownloadCV } from './DownloadCv';
import { Link } from './Link';
import { Logo } from './Logo';
import { ModeToggle } from './ModeToggle';
import Typography from './Typeography';
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from './ui/drawer';
import IconButton from './ui/icon-button';

export function Header() {
  const { scrolled } = useScroll(40);
  const [isOpen, setIsOpen] = useState(false);
  const { size } = useWindowSize();

  useEffect(() => {
    if (size?.width && size.width > 768 && isOpen) {
      setIsOpen(false);
    }
  }, [size, isOpen]);

  return (
    <header
      className={cn(
        'sticky top-0 z-30 w-full border-b border-transparent bg-gray max-md:border-gray-100',
        scrolled ? 'bg-gray/50 backdrop-blur-xl md:border-gray-100' : '',
      )}
    >
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8'>
        <Link href='/'>
          <Logo />
        </Link>
        <div className='hidden items-center gap-6 md:flex'>
          <ul className='flex list-none items-center gap-6'>
            {NAV_LINKS.map((link, index) => (
              <li key={index}>
                <Link href={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className='h-6 w-0.5 bg-gray-100'></div>
          <div className='flex items-center gap-4'>
            <ModeToggle />
            <DownloadCV />
          </div>
        </div>

        <Drawer
          open={isOpen}
          onOpenChange={setIsOpen}
        >
          <DrawerTrigger
            asChild
            className='flex md:hidden'
          >
            <IconButton>
              <MenuIcon />
            </IconButton>
          </DrawerTrigger>
          <DrawerContent>
            <div className='flex items-center justify-between border-b border-gray-100 p-4'>
              <Logo />
              <DrawerClose asChild>
                <IconButton>
                  <XIcon />
                </IconButton>
              </DrawerClose>
            </div>
            <div className='border-b border-gray-100 p-4'>
              <ul className='flex list-none flex-col gap-4'>
                {NAV_LINKS.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.to}
                      onClick={() => {
                        const timeoutId = setTimeout(() => {
                          setIsOpen(false);
                          clearTimeout(timeoutId);
                        }, 500);
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col gap-4 p-4'>
              <div className='flex items-center justify-between'>
                <Typography>Switch Theme</Typography>
                <ModeToggle />
              </div>
              <DownloadCV />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
