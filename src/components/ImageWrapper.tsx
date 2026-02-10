import { useTheme } from '@/providers/ThemeProvider';
import { useEffect, useState } from 'react';

type ImageWrapperProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  srcForDarkMode?: string;
};

export function ImageWrapper({ srcForDarkMode, src, alt, ...props }: ImageWrapperProps) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const finalSrc = theme === 'dark' ? srcForDarkMode || src : src;

  return (
    <img
      src={finalSrc!}
      alt={alt}
      {...props}
    />
  );
}
