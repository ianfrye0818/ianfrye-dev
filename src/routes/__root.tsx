import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ThemeProvider } from '@/providers/ThemeProvider';
import appCss from '../styles.css?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Ian Frye | Full Stack Software Developer & Programmer Analyst',
      },
      {
        name: 'description',
        content:
          'Programmer Analyst specializing in enterprise full-stack development. Leading business-critical systems across 200+ locations using React, TypeScript, .NET, NestJS, and modern cloud technologies. Expert in clean architecture, CQRS patterns, and scalable solutions.',
      },
      {
        name: 'keywords',
        content:
          'Ian Frye, Full Stack Developer, Programmer Analyst, Software Engineer, React Developer, TypeScript Developer, .NET Developer, C# Developer, NestJS Developer, Node.js Developer, Enterprise Software Development, Clean Architecture, CQRS, Microservices, SQL Server, PostgreSQL, Docker, API Development, Winston-Salem Developer, North Carolina Developer, Software Architect, Business Intelligence, ERP Systems, CRM Development',
      },
      {
        name: 'author',
        content: 'Ian Frye',
      },
      {
        name: 'creator',
        content: 'Ian Frye',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        name: 'googlebot',
        content: 'index, follow',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://ianfrye.dev',
      },
      {
        property: 'og:title',
        content: 'Ian Frye | Full Stack Software Developer & Programmer Analyst',
      },
      {
        property: 'og:description',
        content:
          'Programmer Analyst specializing in enterprise full-stack development. Leading business-critical systems across 200+ locations using React, TypeScript, .NET, NestJS, and modern cloud technologies.',
      },
      {
        property: 'og:image',
        content: 'https://ianfrye.dev/images/ian-headshot.jpeg',
      },
      {
        property: 'og:site_name',
        content: 'Ian Frye Portfolio',
      },
      {
        property: 'og:locale',
        content: 'en_US',
      },

      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:url',
        content: 'https://ianfrye.dev',
      },
      {
        name: 'twitter:title',
        content: 'Ian Frye | Full Stack Software Developer & Programmer Analyst',
      },
      {
        name: 'twitter:description',
        content:
          'Programmer Analyst specializing in enterprise full-stack development. Leading business-critical systems across 200+ locations using React, TypeScript, .NET, NestJS, and modern cloud technologies.',
      },
      {
        name: 'twitter:image',
        content: 'https://ianfrye.dev/images/ian-headshot.jpeg',
      },
      {
        name: 'twitter:creator',
        content: '@ianfrye818',
      },
      {
        name: 'twitter:site',
        content: '@ianfrye818',
      },
      {
        name: 'theme-color',
        content: '#4C6FFF',
      },
      {
        name: 'application-name',
        content: 'Ian Frye Portfolio',
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'default',
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'Ian Frye',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },

      // Geographic SEO
      {
        name: 'geo.region',
        content: 'US-NC',
      },
      {
        name: 'geo.placename',
        content: 'Winston-Salem',
      },
      {
        name: 'geo.position',
        content: '36.0999;-80.2442', // Winston Salem, NC
      },

      {
        name: 'profession',
        content: 'Software Developer',
      },
      {
        name: 'category',
        content: 'Technology',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className='scroll-smooth!'
      suppressHydrationWarning
    >
      <head>
        <HeadContent />
      </head>
      <ThemeProvider
        defaultTheme='dark'
        storageKey='ianfrye-dev-theme'
      >
        <body className='antialiased'>
          <Header />
          <main className='flex min-h-screen flex-col w-full'>{children}</main>
          <Footer />
          {/* <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          /> */}
          <Scripts />
        </body>
      </ThemeProvider>
    </html>
  );
}
