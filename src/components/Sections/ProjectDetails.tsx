import { ProjectDetails as ProjectDetailsType } from '@/lib/types';
import { cn } from '@/lib/utils';
import { ExternalLink, VideoIcon } from 'lucide-react';
import { Link } from '../Link';
import Tag from '../Tag';
import Typography from '../Typeography';
import Card from '../ui/card';

type ProjectDetailsProps = ProjectDetailsType & {
  layoutType: 'default' | 'reverse';
};

export function ProjectDetails({
  description,
  layoutType,
  name,
  previewImage,
  technologies,
  url,
  videoUrl,
}: ProjectDetailsProps) {
  return (
    <Card className='mx-auto flex w-full max-w-6xl flex-col md:flex-row'>
      {/* Image */}
      <div
        className={cn(
          'flex items-center justify-center border-gray-100 bg-gray-50 dark:bg-slate-900 p-8 max-md:rounded-t-xl md:w-1/2 lg:p-12',
          layoutType === 'default'
            ? 'md:rounded-l-xl md:border-r'
            : 'md:order-last md:rounded-r-xl md:border-l',
        )}
      >
        <Link
          noCustomization
          href={url ? url : '#'}
          externalLink
        >
          <img
            src={previewImage}
            alt={`${name} preview`}
            className='rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105'
            style={{ objectFit: 'cover' }}
          />
        </Link>
      </div>

      {/* Content */}
      <div
        className={cn(
          'flex flex-col gap-6 p-8 md:w-1/2 lg:p-12',
          layoutType === 'default' ? '' : 'md:order-first',
        )}
      >
        <Typography
          variant='subtitle'
          className='font-semibold'
        >
          {name}
        </Typography>
        <Typography>{description}</Typography>
        <div className='flex flex-wrap gap-2'>
          {technologies?.map((technology, index) => (
            <Tag
              key={index}
              label={technology}
            />
          ))}
        </div>
        <div className='flex items-center gap-3'>
          {url && (
            <Link
              href={url}
              noCustomization
              className='self-start rounded-lg p-1.5 hover:bg-gray-50 dark:hover:bg-slate-800 [&_svg]:stroke-gray-500 dark:[&_svg]:stroke-gray-200'
              externalLink
            >
              <ExternalLink />
            </Link>
          )}
          {videoUrl && (
            <Link
              href={videoUrl}
              className='self-start rounded-lg p-1.5 hover:bg-gray-50 dark:hover:bg-slate-800 [&_svg]:stroke-gray-500 dark:[&_svg]:stroke-gray-200'
              externalLink
            >
              <VideoIcon />
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}
