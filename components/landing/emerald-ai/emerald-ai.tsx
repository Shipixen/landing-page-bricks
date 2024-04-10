import {
  GithubIcon,
  LayersIcon,
  LineChartIcon,
  SparklesIcon,
  ThumbsUpIcon,
  ZapIcon,
} from 'lucide-react';

import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';
import { LandingProductVideoFeature } from '@/components/landing/LandingProductVideoFeature';
import { LandingPrimaryVideoCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingProductHuntAward } from '@/components/landing/social-proof/LandingProductHuntAward';
import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';
import { LandingSocialProofBand } from '@/components/landing/social-proof/LandingSocialProofBand';
import { LandingSocialProofBandItem } from '@/components/landing/social-proof/LandingSocialProofBandItem';
import Header from '@/components/shared/Header';
import { Button } from '@/components/shared/ui/button';
import { LandingSaleCtaSection } from '@/components/landing/cta/LandingSaleCta';
import { LandingTestimonialGrid } from '@/components/landing/testimonial/LandingTestimonialGrid';
import { LandingDiscount } from '@/components/landing/discount/LandingDiscount';
import { LandingBandSection } from '@/components/landing/LandingBand';
import { LandingTestimonialReadMoreWrapper } from '@/components/landing/testimonial/LandingTestimonialReadMoreWrapper';
import { LandingFaqSection } from '@/components/landing/LandingFaq';
import { LandingFeatureList } from '@/components/landing/feature/LandingFeatureList';

export const EmeraldAi = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <LandingSocialProofBand invert={false} className="hidden md:flex">
        <LandingSocialProofBandItem>
          Used by industry leaders
        </LandingSocialProofBandItem>

        <LandingSocialProofBandItem>
          24/7 customer support
        </LandingSocialProofBandItem>

        <LandingSocialProofBandItem graphic="rating">
          99% customer satisfaction
        </LandingSocialProofBandItem>
      </LandingSocialProofBand>

      <Header className="mb-0 lg:mb-0" />

      <LandingPrimaryVideoCtaSection
        title="Transform Your Business Today"
        description="Say goodbye to inefficiencies and hello to success with our groundbreaking AI app. Streamline your workflow, boost productivity, and maximize revenue effortlessly."
        autoPlay
        controls={false}
        videoSrc="https://cache.shipixen.com/features/11-pricing-page-builder.mp4"
        withBackground
        withBackgroundGlow
        variant="secondary"
        backgroundGlowVariant="secondary"
        leadingComponent={<LandingProductHuntAward />}
      >
        <Button size="xl" variant="secondary" asChild>
          <a href="#">Buy Now</a>
        </Button>

        <Button size="xl" variant="outlineSecondary">
          <a href="#">Learn More</a>
        </Button>

        <LandingDiscount
          discountValueText="$350 off"
          discountDescriptionText="for the first 10 customers (2 left)"
        />

        <LandingSocialProof
          className="w-full mt-12"
          showRating
          numberOfUsers={99}
          suffixText="happy users"
          avatarItems={[
            {
              imageSrc: 'https://picsum.photos/id/64/100/100',
              name: 'John Doe',
            },
            {
              imageSrc: 'https://picsum.photos/id/65/100/100',
              name: 'Jane Doe',
            },
            {
              imageSrc: 'https://picsum.photos/id/669/100/100',
              name: 'Alice Doe',
            },
          ]}
        />
      </LandingPrimaryVideoCtaSection>

      <LandingProductFeature
        title="Supercharge Your Efficiency!"
        descriptionComponent={
          <>
            <LandingProductFeatureKeyPoints
              keyPoints={[
                {
                  title: 'Intelligent Assistance',
                  description:
                    'Receive personalized recommendations and insights tailored to your workflow.',
                },
                {
                  title: 'Seamless Collaboration',
                  description:
                    'Easily collaborate with team members and clients in real-time.',
                },
                {
                  title: 'Advanced Customization',
                  description:
                    'Tailor your app to fit your unique requirements with extensive customization options.',
                },
              ]}
            />

            <Button className="mt-8" asChild>
              <a href="#">Try now for free</a>
            </Button>

            <p className="text-sm">
              7 day free trial, no credit card required.
            </p>
          </>
        }
        imageSrc="/static/images/backdrop-19.webp"
        imageAlt="Screenshot of the product"
        imagePosition="left"
        imagePerspective="bottom"
      />

      <LandingProductVideoFeature
        title="Smart when you need it"
        descriptionComponent={
          <>
            <p>
              No tech skills? No problem! Our app lets you create tailor-made
              solutions effortlessly.
            </p>

            <LandingProductFeatureKeyPoints
              variant="secondary"
              keyPoints={[
                {
                  title: 'Rock-Solid Security',
                  description:
                    'Rest assured, your data is safe with our top-notch security measures.',
                },
                {
                  title: 'Automatic Updates',
                  description:
                    'Never miss out on the latest features - our app updates itself automatically!',
                },
                {
                  title: 'Scalability on Demand',
                  description:
                    'Grow your app along with your business needs, effortlessly expanding to meet demand.',
                },
              ]}
            />
            <Button className="mt-8" variant="secondary" asChild>
              <a href="#">Try now for free</a>
            </Button>
            <p className="text-sm">Get started with our free tier.</p>
          </>
        }
        videoSrc="https://cache.shipixen.com/features/4-deploy-to-vercel-with-1-click.mp4"
        videoPosition="right"
        withBackground
        withBackgroundGlow
        variant="secondary"
        backgroundGlowVariant="secondary"
      />

      <LandingProductFeature
        title="Smart Task Prioritization"
        descriptionComponent={
          <>
            <p>
              Our AI-powered task prioritization feature automatically organizes
              your to-do list based on deadlines, importance, and your work
              patterns, ensuring you focus on the most critical tasks first.
            </p>

            <Button className="mt-8" variant="secondary" asChild>
              <a href="#">Try now for free</a>
            </Button>

            <p className="text-sm">First month is on us.</p>
          </>
        }
        imageSrc="/static/images/backdrop-5.webp"
        imageAlt="Craft Unique Solutions with Ease"
        imagePosition="left"
        imagePerspective="none"
        variant="secondary"
      />

      <LandingBandSection
        title="4.9/5 stars"
        description="Our customers love our product."
        supportingComponent={
          <LandingSocialProof
            showRating
            numberOfUsers={99}
            avatarItems={[
              {
                imageSrc: 'https://picsum.photos/id/64/100/100',
                name: 'John Doe',
              },
              {
                imageSrc: 'https://picsum.photos/id/65/100/100',
                name: 'Jane Doe',
              },
              {
                imageSrc: 'https://picsum.photos/id/669/100/100',
                name: 'Alice Doe',
              },
            ]}
          />
        }
      />

      <LandingProductFeature
        title="One-click API Integration"
        descriptionComponent={
          <>
            With our API integration capability, seamlessly connect our app with
            all popular providers.
            <Button variant="outlineSecondary" asChild>
              <a href="#">Check out our SDK</a>
            </Button>
          </>
        }
        withBackground
        variant="secondary"
        imageSrc="/static/images/product-sample.webp"
        imageAlt="Screenshot of the product"
        imagePosition="center"
        textPosition="center"
      />

      <LandingSaleCtaSection
        title="No more complexity, just simplicity"
        description="Our AI-powered task prioritization feature automatically organizes your to-do list based on deadlines, importance, and your work patterns, ensuring you focus on the most critical tasks first."
        ctaHref="https://gum.co/product"
        ctaLabel="Sign up now"
        withBackgroundGlow
      />

      <LandingTestimonialReadMoreWrapper size="md">
        <LandingTestimonialGrid
          title="Don't take it from us"
          description="See what our customers have to say."
          testimonialItems={[
            {
              name: 'Mathew',
              text: 'After using this, I cannot imagine going back to the old way of doing things.',
              handle: '@heymatt_oo',
              imageSrc: 'https://picsum.photos/100/100.webp?random=2',
            },
            {
              name: 'Joshua',
              text: 'Perfect for my use case',
              handle: '@joshua',
              imageSrc: 'https://picsum.photos/100/100.webp?random=3',
            },
            {
              name: 'Parl Coppa',
              text: 'This is the best thing since sliced bread. I cannot believe I did not think of it myself.',
              handle: '@coppalipse',
              imageSrc: 'https://picsum.photos/100/100.webp?random=1',
              featured: true, // Feature this testimonial
            },
            {
              name: 'Mandy',
              text: 'Excellent product!',
              handle: '@mandy',
              imageSrc: 'https://picsum.photos/100/100.webp?random=4',
            },
            {
              name: 'Alex',
              text: 'Can easily recommend!',
              handle: '@alex',
              imageSrc: 'https://picsum.photos/100/100.webp?random=5',
            },
            {
              name: 'Sam',
              text: 'I am very happy with the results.',
              handle: '@sama',
              imageSrc: 'https://picsum.photos/100/100.webp?random=6',
            },
          ]}
          withBackgroundGlow
          withBackground
        />
      </LandingTestimonialReadMoreWrapper>

      <LandingFeatureList
        title={'Nothing quite like it.'}
        description={
          'Shipixen sets up everything you need to start working on your blog, website or product.'
        }
        featureItems={[
          {
            title: 'Intuitive Interface',
            description:
              'Design and customize your app easily with our simple drag-and-drop interface.',
            icon: <SparklesIcon />,
          },
          {
            title: 'Seamless Integration',
            description:
              'Connect your app with other tools effortlessly for a smoother workflow.',
            icon: <GithubIcon />,
          },
          {
            title: 'Smart Analytics',
            description:
              'Gain valuable insights into user behavior and trends with our advanced analytics tools.',
            icon: <LineChartIcon />,
          },
          {
            title: 'Rock-Solid Security',
            description:
              'Rest assured, your data is safe with our top-notch security measures.',
            icon: <ThumbsUpIcon />,
          },
          {
            title: 'Automatic Updates',
            description:
              'Never miss out on the latest features - our app updates itself automatically!',
            icon: <ZapIcon />,
          },
          {
            title: 'Scalability on Demand',
            description:
              'Grow your app along with your business needs, effortlessly expanding to meet demand.',
            icon: <LayersIcon />,
          },
        ]}
      />

      <LandingFaqSection
        title="FAQ"
        description="Looking to learn more about our product? Here are some of the most common questions."
        faqItems={[
          {
            question: 'Can I integrate my existing systems?',
            answer:
              'Absolutely! Our app seamlessly integrates with various other tools and systems.',
          },
          {
            question: 'Do I need coding skills?',
            answer:
              'Nope! Our user-friendly interface empowers anyone to create and manage their own app.',
          },
          {
            question: 'Is my data secure?',
            answer:
              'Absolutely! We take data security seriously, employing robust measures to keep your information safe.',
          },
        ]}
        withBackground
      />
    </div>
  );
};
