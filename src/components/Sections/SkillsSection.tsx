import { TECHNOLOGIES } from '@/lib/data';
import Container from '../Container';
import Tag from '../Tag';
import Typography from '../Typeography';
import { TechDetails } from './TechDetails';

export function SkillsSection() {
  return (
    <Container>
      <div className='flex flex-col items-center gap-4'>
        <div className='self-center'>
          <Tag label='Skills' />
        </div>
        <Typography
          variant='subtitle'
          className='max-w-xl text-center'
        >
          The skills, tools and technologies I am really good at:
        </Typography>
      </div>

      <div className='grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12'>
        {TECHNOLOGIES.map((technology, index) => (
          <TechDetails
            {...technology}
            key={index}
          />
        ))}
      </div>
    </Container>
  );
}
