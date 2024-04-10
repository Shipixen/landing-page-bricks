import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';
import { LandingProductVideoFeature } from '@/components/landing/LandingProductVideoFeature';
import { LandingPrimaryImageCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingProductHuntAward } from '@/components/landing/social-proof/LandingProductHuntAward';
import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';
import { LandingSocialProofBand } from '@/components/landing/social-proof/LandingSocialProofBand';
import { LandingSocialProofBandItem } from '@/components/landing/social-proof/LandingSocialProofBandItem';
import Header from '@/components/shared/Header';
import { Button } from '@/components/shared/ui/button';
import { LandingSaleCtaSection } from '@/components/landing/cta/LandingSaleCta';
import { LandingTestimonialGrid } from '@/components/landing/testimonial/LandingTestimonialGrid';
import { LandingFaqCollapsibleSection } from '@/components/landing/LandingFaqCollapsible';
import { LandingTestimonialInline } from '@/components/landing/testimonial/LandingTestimonialInline';
import { LandingTestimonialInlineItem } from '@/components/landing/testimonial/LandingTestimonialInlineItem';

export const ScreenshotTwo = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <LandingSocialProofBand invert={false} className="hidden md:flex">
        <LandingSocialProofBandItem>
          100% encrypted and secure
        </LandingSocialProofBandItem>

        <LandingSocialProofBandItem>
          24/7 customer support
        </LandingSocialProofBandItem>

        <LandingSocialProofBandItem>
          99% customer satisfaction
        </LandingSocialProofBandItem>
      </LandingSocialProofBand>

      <Header className="mb-0 lg:mb-0" />

      <LandingPrimaryImageCtaSection
        title="Capture screenshots in seconds"
        description="With a single API call, you can let your screenshot dreams fly, leaving the grunt work to us."
        imageSrc="/static/images/product-sample.webp"
        imageAlt="Sample image"
        withBackground
        leadingComponent={<LandingProductHuntAward />}
        footerComponent={
          <LandingTestimonialInline>
            <LandingTestimonialInlineItem
              imageSrc="https://picsum.photos/id/64/100/100"
              name="John Doe"
              text="I love this app"
            />

            <LandingTestimonialInlineItem
              imageSrc="https://picsum.photos/id/65/100/100"
              name="Jane Doe"
              text="Best app on the market"
            />

            <LandingTestimonialInlineItem
              imageSrc="https://picsum.photos/id/669/100/100"
              name="Alice Doe"
              text="Never seen anything like it"
              suffix="CEO of Instagram"
            />

            <LandingTestimonialInlineItem
              imageSrc="https://picsum.photos/id/829/100/100"
              name="Guido Ross"
              text="Nothing comes close to it"
              suffix="DevOps at Meta"
            />
          </LandingTestimonialInline>
        }
      >
        <Button size="xl" asChild>
          <a href="#">Sign up</a>
        </Button>

        <Button size="xl" variant="outlinePrimary">
          <a href="#">See demo</a>
        </Button>
      </LandingPrimaryImageCtaSection>

      <LandingProductFeature
        title="Crystal clear captures"
        descriptionComponent={
          <>
            <LandingProductFeatureKeyPoints
              keyPoints={[
                {
                  title: 'Fast',
                  description:
                    'Capture screenshots in seconds. No more waiting. No more fiddling with scripts.',
                },
                {
                  title: 'Secure',
                  description:
                    '100% encrypted and secure. Your data is safe with us, always. Privacy first.',
                },
                {
                  title: 'Support',
                  description:
                    '24/7 customer support. We are here to help you at any time of the day. Just ask.',
                },
              ]}
            />

            <Button className="mt-8" asChild>
              <a href="#">Try now for free</a>
            </Button>

            <p className="text-sm">Premium support included.</p>
          </>
        }
        imageSrc="/static/images/backdrop-8.webp"
        imageAlt="Screenshot of the product"
        imagePosition="left"
        imagePerspective="right"
      />

      <LandingProductFeature
        title="Pixel-Perfect Precision"
        descriptionComponent={
          <>
            <LandingProductFeatureKeyPoints
              variant="secondary"
              keyPoints={[
                {
                  title: 'Sharp',
                  description:
                    'Prepare to dazzle your audience with screenshots so sharp, they might just cut through the digital clutter.',
                },
                {
                  title: 'Retina',
                  description:
                    "From Apple's retina display to your custom screen size wishes, we render them all in full-page glory, lazy loaded images included.",
                },
                {
                  title: 'Free trial',
                  description:
                    "First 1000 are on us, because we think you'll love it. No credit card required. Cancel anytime.",
                },
              ]}
            />

            <Button className="mt-8" variant="secondary" asChild>
              <a href="#">Try now for free</a>
            </Button>

            <p className="text-sm">First 1000 screenshots are on us.</p>
          </>
        }
        imageSrc="/static/images/backdrop-20.webp"
        imageAlt="Screenshot of the product"
        imagePosition="right"
        imagePerspective="none"
        withBackground
        variant="secondary"
      />

      <LandingProductVideoFeature
        title="Developer's Delight"
        descriptionComponent={
          <>
            <LandingProductFeatureKeyPoints
              variant="secondary"
              keyPoints={[
                {
                  title: '99.99991% uptime',
                  description:
                    'We boast an uptime of 99.99991%, which is basically like saying we are always there for you, except for that one awkward moment every millennium.',
                },
                {
                  title: '120k developers',
                  description:
                    'With over 120k developers hitching a ride on our screenshot bandwagon, it is safe to say we are the go-to for your digital image needs.',
                },
                {
                  title: 'Coding language',
                  description:
                    'Choose your coding language and integrate with the flair of a seasoned chef adding just the right spice to their dish.',
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
        videoPosition="left"
      />

      <LandingSaleCtaSection
        title="No more complexity, just simplicity"
        description="Introducing the revolutionary way to capture digital stills without the headache of herding browser windows or deciphering the enigma of edge cases. With a single API call, you can let your screenshot dreams fly, leaving the grunt work to us. "
        footerComponent={
          <LandingSocialProof
            className="w-full mt-12"
            showRating
            numberOfUsers={99}
            suffixText="happy developers"
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
        ctaHref="https://gum.co/product"
        ctaLabel="Sign up now"
        withBackground
        withBackgroundGlow
      />

      <LandingProductFeature
        title="Automate and Elevate"
        descriptionComponent={
          <>
            Superb documentation, ready-made SDKs, and no-code magic. <br />
            You're free to focus on what truly matters.
            <Button variant="secondary" asChild>
              <a href="#">Check out our SDK</a>
            </Button>
          </>
        }
        imageSrc="/static/images/product-sample.webp"
        imageAlt="Screenshot of the product"
        imagePosition="center"
        textPosition="center"
      />

      <LandingTestimonialGrid
        title="Don't take it from us"
        description="See what 120k developers have to say about our product."
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
        withBackground
        withBackgroundGlow
      />

      <LandingFaqCollapsibleSection
        title="FAQ"
        description="Looking to learn more about our product? Here are some of the most common
    questions."
        withBackgroundGlow
        faqItems={[
          {
            question: 'Can I get a refund?',
            answer:
              'Yes, you can get a refund within 30 days of your purchase. No questions asked.',
          },
          {
            question: 'What technologies are used?',
            answer:
              'We use Next.js, Tailwind CSS, and Vercel for the deployment.',
          },
          {
            question: 'What do I get if I pre-order?',
            answer:
              'With the pre-order, you get a 50% discount on the final price and a lifetime license for the generated code.',
          },
        ]}
      />
    </div>
  );
};
