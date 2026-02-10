import { useWindowSize } from '@/hooks';
import { CONTACT_INFO } from '@/lib/data';
import { copyTextToClipboard } from '@/lib/utils';
import { Copy, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import Container from '../Container';
import { Link } from '../Link';
import Tag from '../Tag';
import Typography from '../Typeography';
import IconButton from '../ui/icon-button';
import { SocialIcons } from './SocialIcons';

type CopyValue = 'email' | 'phone';

export function ContactSection() {
  const { size } = useWindowSize();
  const { email, phone } = CONTACT_INFO;

  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState<CopyValue | null>(null);

  const handleCopyClick = async (text: string, type: CopyValue) => {
    try {
      await copyTextToClipboard(text);
      setIsCopied(true);
      setCopiedValueType(type);
      let timoutId: any = setTimeout(() => {
        setIsCopied(false);
        setCopiedValueType(null);
        clearTimeout(timoutId);
      }, 1500);
    } catch (error) {
      setIsCopied(false);
      setCopiedValueType(null);
      alert('Unable to copy!');
    }
  };

  return (
    <Container id='contact'>
      <div className='flex flex-col items-center gap-4'>
        <div className='self-center'>
          <Tag label='Get in touch' />
        </div>
        <Typography
          variant='subtitle'
          className='max-w-xl text-center'
        >
          What’s next? Feel free to reach out to me if you are looking for a developer, have a
          query, or simply want to connect.
        </Typography>
      </div>

      <div className='flex flex-col items-center gap-6 md:gap-12'>
        <div className='flex flex-col items-center md:gap-4'>
          <div className='flex items-center gap-4 md:gap-5'>
            <Mail className='h-6 w-6 md:h-8 md:w-8' />
            <Link href={`mailto:${email}`}>
              <Typography variant='h2'>{email}</Typography>
            </Link>
            <IconButton
              size={size && size.width && size.width < 768 ? 'md' : 'lg'}
              onClick={() => handleCopyClick(email, 'email')}
              showTooltip={isCopied && copiedValueType === 'email'}
              tooltipText='Copied!'
            >
              <Copy />
            </IconButton>
          </div>
          <div className='flex items-center gap-4 md:gap-5'>
            <Phone className='h-6 w-6 md:h-8 md:w-8' />
            <Link href={`tel:${phone.replace(' ', '')}`}>
              <Typography variant='h2'>{phone}</Typography>
            </Link>
            <IconButton
              size={size && size.width && size.width < 768 ? 'md' : 'lg'}
              onClick={() => handleCopyClick(phone.replace(' ', ''), 'phone')}
              showTooltip={isCopied && copiedValueType === 'phone'}
              tooltipText='Copied!'
            >
              <Copy />
            </IconButton>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <Typography className='text-center'>You may also find me on these platforms!</Typography>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
}
