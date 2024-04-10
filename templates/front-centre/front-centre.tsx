import { ChromeIcon, FigmaIcon, FramerIcon, GithubIcon } from 'lucide-react';

import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';
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
import { LandingProductFeaturesGrid } from '@/components/landing/LandingProductFeaturesGrid';
import { LandingProductVideoFeature } from '@/components/landing/LandingProductVideoFeature';
import { LandingFaqCollapsibleSection } from '@/components/landing/LandingFaqCollapsible';

export const FrontCentre = () => {
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
        title="Time to level up ↑ your front-end skills"
        description="Elevate your development game and achieve more with our awesome front-end learning center. It's dynamic, beginner-friendly, and designed with you in mind!"
        autoPlay
        controls={false}
        videoPosition="center"
        videoSrc="https://cache.shipixen.com/features/11-pricing-page-builder.mp4"
        withBackground
        withBackgroundGlow
        variant="secondary"
        backgroundGlowVariant="secondary"
        leadingComponent={<LandingProductHuntAward />}
      >
        <Button size="xl" variant="secondary" asChild>
          <a href="#">Get started</a>
        </Button>

        <Button size="xl" variant="outlineSecondary">
          <a href="#">Learn More</a>
        </Button>

        <LandingDiscount
          discountValueText="$50 off"
          discountDescriptionText="for the first 20 customers (5 left)"
        />

        <LandingSocialProof
          className="w-full mt-12"
          showRating
          numberOfUsers={12000}
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

      <LandingBandSection
        title="Join industry leaders"
        description="Used by Fortune 500 companies and industry leaders worldwide."
        supportingComponent={
          <>
            <ChromeIcon className="w-12 h-12" />
            <FigmaIcon className="w-12 h-12" />
            <GithubIcon className="w-12 h-12" />
            <FramerIcon className="w-12 h-12" />
          </>
        }
      />

      <LandingProductFeature
        title="Streamlined Learning Paths"
        descriptionComponent={
          <>
            <LandingProductFeatureKeyPoints
              keyPoints={[
                {
                  title: 'Engaging Tutorials',
                  description:
                    'Learn at your own pace with our easy-to-follow tutorials, designed for beginners and seasoned developers alike.',
                },
                {
                  title: 'Live Coding Sessions',
                  description:
                    'Participate in live coding sessions led by experienced instructors, gaining insights and tips in real-time.',
                },
                {
                  title: 'Interactive Quizzes',
                  description:
                    'Test your knowledge and reinforce learning with interactive quizzes that make studying fun and effective.',
                },
              ]}
            />

            <Button className="mt-8" asChild>
              <a href="#">Get started free</a>
            </Button>

            <p className="text-sm">No credit card required.</p>
          </>
        }
        imageSrc="/static/images/backdrop-22.webp"
        imageAlt="Screenshot of the product"
        imagePosition="left"
        imagePerspective="bottom"
      />

      <LandingProductFeature
        titleComponent={
          <>
            <LandingProductHuntAward
              title="#1 Product of the week"
              subtitle="DevTools"
            />

            <h2 className="text-4xl font-semibold">Interactive Projects</h2>
          </>
        }
        descriptionComponent={
          <>
            <p>
              No tech skills? No problem! <br />
              Our app lets you create tailor-made solutions effortlessly.
              <br />
              Save time and frustration while reaching your development goals.
            </p>

            <Button className="mt-8" variant="secondary" asChild>
              <a href="#">Try now for free</a>
            </Button>
            <p className="text-sm">Get started with our free tier.</p>
          </>
        }
        imageSrc="/static/images/product-sample.webp"
        withBackground
        withBackgroundGlow
        variant="secondary"
        backgroundGlowVariant="secondary"
        imagePosition="center"
        textPosition="center"
      />

      <LandingProductFeaturesGrid
        title="Explore our courses"
        description="Dive deep into coding with our interactive projects, honing your skills through hands-on experience."
        withBackground={false}
      >
        <LandingProductFeature
          title="Portfolio Building"
          description="Craft a standout portfolio showcasing your skills and projects, setting yourself apart in the competitive job market."
          imageSrc="/static/images/product-sample.webp"
          imageAlt="Sample image"
        />

        <LandingProductVideoFeature
          title="Career Guidance"
          description="Get expert advice on building a successful career in front-end development, from resume crafting to job interview tips."
          autoPlay={false}
          videoSrc="https://cache.shipixen.com/features/11-pricing-page-builder.mp4"
        />

        <LandingProductVideoFeature
          title="Feedback & Support"
          description="Receive personalized feedback from instructors and access dedicated support to overcome challenges and keep progressing."
          autoPlay={false}
          videoSrc="https://cache.shipixen.com/features/2-generate-content-with-ai.mp4"
        />

        <LandingProductVideoFeature
          title="Interactive Quizzes"
          description="Test your knowledge and reinforce learning with interactive quizzes that make studying fun and effective."
          autoPlay={false}
          videoSrc="https://cache.shipixen.com/features/3-theme-and-logo.mp4"
        />
      </LandingProductFeaturesGrid>

      <LandingBandSection
        title="12000+ developers"
        description="More than 12k developers are already in"
        supportingComponent={
          <LandingSocialProof
            showRating
            numberOfUsers={12000}
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

      <LandingTestimonialReadMoreWrapper size="md">
        <LandingTestimonialGrid
          title="Don't take it from us"
          description="See what 120k developers have to say about this product."
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
        />
      </LandingTestimonialReadMoreWrapper>

      <LandingSaleCtaSection
        title="Unlock Your Front-End Potential"
        description={
          'Take your development journey to the next level with our comprehensive front-end learning center.'
        }
        ctaHref="https://gum.co/product"
        ctaLabel="Sign up now"
        withBackgroundGlow
      />

      <LandingFaqCollapsibleSection
        title="FAQ"
        description="Find answers to common inquiries about our front-end learning center."
        faqItems={[
          {
            question: 'Is this suitable for beginners?',
            answer:
              'Absolutely! Our learning center caters to learners of all levels, from absolute beginners to experienced developers.',
          },
          {
            question: 'How much time do I need to invest?',
            answer:
              'You can progress at your own pace, but dedicating a few hours each week will help you see significant improvement in your skills.',
          },
          {
            question: 'Will I receive a certificate?',
            answer:
              "Yes, upon completion of certain courses or tracks, you'll receive a certificate to showcase your achievement.",
          },
        ]}
        withBackground
      />
    </div>
  );
};
