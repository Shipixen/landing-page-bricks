import Header from '@/components/shared/Header';
import Image from 'next/image';
import { Metadata } from 'next';

const socialBanner = '/static/images/templatesOgImg.jpg';
const title = 'Landing Page Templates | Shipixen, Next.js & Shadcn UI';
const description =
  'Shipixen templates are a set of pre-configured landing page component combinations that you can easily copy and paste into your own Next.js app. Using React, TypeScript, Shadcn UI and Tailwind CSS.';

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: './',
    siteName: title,
    images: [socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: title,
    card: 'summary_large_image',
    images: [socialBanner],
  },
};

const TemplateItem = ({
  name,
  description,
  imageUrl,
  href,
  tags,
}: {
  name: string;
  description: string;
  imageUrl: string;
  href: string;
  tags: string[];
}) => {
  return (
    <a
      className="w-full flex flex-col md:flex-row items-center justify-between bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 shadow-sm rounded-lg transition-all overflow-hidden hover:shadow-md hover:bg-gray-50 dark:hover:bg-slate-800"
      href={href}
    >
      <div className="w-full max-w-[150px] relative">
        <Image
          src={imageUrl}
          alt={name}
          width={300}
          height={300}
          className="w-full rounded-md"
        />
      </div>

      <div className="p-6 w-full flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold bg-fuchsia-100 dark:bg-fuchsia-800 dark:text-white text-fuchsia-800 px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default function Page() {
  return (
    <div className="flex flex-col w-full items-center justify-between fancy-overlay">
      <Header className="mb-4 lg:mb-12" />

      <div className="w-full flex flex-col items-center mb-12">
        <section className={'narrow-container'}>
          <h1 className="text-3xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-4xl fancy-heading">
            Landing Page Templates
          </h1>
          <p className="mt-4">
            Shipixen templates are a set of pre-configured landing page
            component combinations that you can easily copy and paste into your
            own Next.js app.
          </p>

          <h2 className="mt-4 fancy-text-purple font-semibold">
            Open any template to see a live demo and easily copy the code to use
            in your app.
          </h2>

          <div className="mt-6 flex flex-col gap-6">
            <TemplateItem
              name="Emerald AI"
              description="A landing page template for an AI-powered product, featuring a video in the main CTA."
              imageUrl="/static/images/shipixen/templates/emerald-ai.webp"
              tags={['video', 'AI', 'SaaS', 'feature list']}
              href="/demo/landing-page-templates/template/emerald-ai"
            />

            <TemplateItem
              name="Minimum Via"
              description="A landing page template for a minimalistic product, or productized agency. Uses text and minimal colors to create a clean look."
              imageUrl="/static/images/shipixen/templates/minimum-via.webp"
              tags={['text', 'minimal', 'agency', 'SaaS']}
              href="/demo/landing-page-templates/template/minimum-via"
            />

            <TemplateItem
              name="Front Centre"
              description="A landing page template for a learning platform, featuring a centered video beneath the fold."
              imageUrl="/static/images/shipixen/templates/front-centre.webp"
              tags={['video', 'education', 'SaaS', 'feature grid', 'colorful']}
              href="/demo/landing-page-templates/template/front-centre"
            />

            <TemplateItem
              name="ScreenshotTwo"
              description="A landing page template for a developer tool, featuring inline testimonials and a two-column layout with screenshots."
              imageUrl="/static/images/shipixen/templates/screenshot-two.webp"
              tags={['image', 'developer', 'tool', 'SaaS', 'testimonials']}
              href="/demo/landing-page-templates/template/screenshot-two"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
