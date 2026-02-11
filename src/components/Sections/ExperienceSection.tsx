import { EXPERIENCES } from '@/lib/data';
import Container from '../Container';
import Tag from '../Tag';
import Typography from '../Typeography';
import { ExperienceDetails } from './ExperienceDetails';

export function ExperienceSection() {
  return (
    <Container className='bg-gray-50 dark:bg-slate-900'>
      <div className='flex flex-col items-center gap-4'>
        <div className='self-center'>
          <Tag label='Experience' />
        </div>
        <Typography
          variant='subtitle'
          className='max-w-xl text-center'
        >
          Here is a quick summary of my most recent experiences:
        </Typography>
      </div>

      {EXPERIENCES?.map((experience, index) => (
        <ExperienceDetails
          {...experience}
          key={index}
        />
      ))}
    </Container>
  );
}
