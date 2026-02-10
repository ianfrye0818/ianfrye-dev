import { PROJECTS } from '@/lib/data';
import { VideoIcon } from 'lucide-react';
import Container from '../Container';
import Tag from '../Tag';
import Typography from '../Typeography';
import { ProjectDetails } from './ProjectDetails';

export function WorkSection() {
  return (
    <Container id='work'>
      <div className='flex flex-col items-center gap-4'>
        <div className='self-center'>
          <Tag label='Work' />
        </div>
        <Typography
          variant='subtitle'
          className='max-w-xl text-center'
        >
          Some of the noteworthy projects I have built
        </Typography>
        <Typography className='flex items-center gap-2'>
          Click the <VideoIcon /> for a video demo.
        </Typography>
      </div>

      {PROJECTS?.map((project, index) => (
        <ProjectDetails
          key={index}
          {...project}
          layoutType={index % 2 === 0 ? 'default' : 'reverse'}
        />
      ))}
    </Container>
  );
}
