import { SOCIAL_LINKS } from '@/lib/data';
import IconButton from '../ui/icon-button';

export function SocialIcons() {
  return (
    <div className='flex gap-1'>
      {SOCIAL_LINKS.map((socialLink, index) => (
        <IconButton
          key={index}
          onClick={() => window.open(socialLink.url, '_blank')}
        >
          <socialLink.icon />
        </IconButton>
      ))}
    </div>
  );
}
