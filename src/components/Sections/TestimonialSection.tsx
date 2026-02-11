import { TESTIMONIALS } from '@/lib/data';
import Container from '../Container';
import Tag from '../Tag';
import Typography from '../Typeography';
import { TestimonialDetails } from './TestimonialDetails';

export function TestimonialSection() {
  return (
    <Container
      id='testimonials'
      className='bg-gray-50 dark:bg-slate-900'
    >
      <div className='flex flex-col items-center gap-4'>
        <div className='self-center'>
          <Tag label='Testimonials' />
        </div>
        <Typography
          variant='subtitle'
          className='max-w-xl text-center'
        >
          Nice things people have said about me:
        </Typography>
      </div>

      <div className='flex gap-12 max-md:flex-col md:max-lg:flex-wrap'>
        {TESTIMONIALS?.map((testimonial, index) => (
          <TestimonialDetails
            key={index}
            {...testimonial}
          />
        ))}
      </div>
    </Container>
  );
}
