import { EXTERNAL_LINKS } from '@/lib/data';
import Container from '../Container';
import { Link } from '../Link';
import Tag from '../Tag';
import Typography from '../Typeography';

export function AboutMeSection() {
  return (
    <Container
      className='bg-gray-50 dark:bg-slate-900'
      id='about'
    >
      <div className='self-center'>
        <Tag label='About me' />
      </div>

      <div className='flex w-full flex-col justify-between gap-12 md:flex-row'>
        {/* Image */}
        <div className='flex justify-center md:order-first md:justify-end'>
          <div className='relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]'>
            <img
              src={'/images/ian-full-body.jpeg'}
              alt='Fullpose of Ian'
              className='absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]'
              style={{ objectFit: 'cover' }}
            />
            <div className='absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 dark:bg-slate-700 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]'></div>
          </div>
        </div>

        {/* Content */}
        <div className='flex max-w-xl flex-col gap-6'>
          <Typography variant='h3'>Curious about me? Here you have it:</Typography>
          <Typography>
            I&apos;m a passionate full-stack software developer specializing in building
            enterprise-level applications using modern technologies like React, TypeScript, NestJS,
            .NET, and Node.js. I thrive on architecting scalable solutions that bridge business
            needs with technical excellence, with a strong focus on clean code, performance
            optimization, and delivering measurable business value.
          </Typography>
          <Typography>
            Currently, I lead development of business-critical systems supporting operations across
            200+ locations, where I architect full-stack solutions that automate workflows,
            integrate with third-party APIs, and enable data-driven decision-making. My work
            includes building real-time inventory monitoring systems, automated ticketing platforms,
            and enterprise integrations that have saved teams 15+ hours per week.
          </Typography>
          <Typography>
            Since beginning my journey as a developer in 2023, I&apos;ve consistently challenged
            myself to learn and apply the latest technologies and architectural patterns. I&apos;ve
            delivered production applications using clean architecture principles, CQRS patterns,
            and modern tech stacks including React, TanStack, NestJS, .NET, PostgreSQL, SQL Server,
            and Docker.
          </Typography>
          <Typography>
            I am very much a progressive thinker who enjoys taking ownership of products from
            conception through deployment—translating complex business requirements into elegant
            technical solutions that drive real impact.
          </Typography>
          <Typography>
            When I&apos;m not architecting systems or writing code, you can find me hiking 🥾,
            spending quality time with my family 🧑‍🧑‍🧒‍🧒, or experiencing the thrill of roller coasters
            🎢. You can follow me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.LINKEDIN}
            >
              LinkedIn
            </Link>{' '}
            for professional updates and insights, or check out my projects on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>
            .
          </Typography>
          <Typography>Finally, some quick bits about me:</Typography>
          <div className='flex flex-col gap-2 md:flex-row md:gap-6'>
            <ul className='flex list-inside list-disc flex-col gap-2'>
              <Typography component='li'>Programmer Analyst</Typography>
              <Typography component='li'>Clean Architecture Advocate</Typography>
            </ul>
            <ul className='flex list-inside list-disc flex-col gap-2'>
              <Typography component='li'>Full-Stack Engineer</Typography>
              <Typography component='li'>Lifelong Learner</Typography>
            </ul>
          </div>
          <Typography>
            I&apos;m currently open to new opportunities and excited about roles that challenge me
            to build impactful solutions! Feel free to reach out—I&apos;m always happy to connect 😊
          </Typography>
        </div>
      </div>
    </Container>
  );
}
