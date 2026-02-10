import { TestimonialDetails as TestimonialDetailsProps } from '@/lib/types';
import Typography from '../Typeography';
import Card from '../ui/card';

export function TestimonialDetails({
  personName,
  testimonial,
  title,
  personAvatar,
}: TestimonialDetailsProps) {
  return (
    <Card className='mx-auto flex flex-col items-center gap-6 p-8 md:w-2/3 md:p-12 lg:w-1/3'>
      <img
        src={personAvatar!}
        alt={`${personName} avatar`}
      />
      <Typography>&quot;{testimonial}&quot;</Typography>
      <div className='flex w-full flex-col gap-1'>
        <Typography
          variant='subtitle'
          className='w-full text-center font-semibold text-gray-900'
        >
          {personName}
        </Typography>
        <Typography
          variant='body3'
          className='w-full text-center'
        >
          {title}
        </Typography>
      </div>
    </Card>
  );
}
