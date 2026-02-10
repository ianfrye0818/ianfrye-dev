import { TechDetails } from '@/lib/types';
import { ImageWrapper } from '../ImageWrapper';
import { Link } from '../Link';
import Typography from '../Typeography';

export function TechDetails({ label, url, logo, darkModeLogo }: TechDetails) {
  return (
    <div className='flex flex-col items-center gap-2'>
      <Link
        noCustomization
        href={url}
        externalLink
      >
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={label}
          className='transition-transform duration-300 md:hover:scale-110'
        />
      </Link>
      <Typography variant='body1'>{label}</Typography>
    </div>
  );
}
