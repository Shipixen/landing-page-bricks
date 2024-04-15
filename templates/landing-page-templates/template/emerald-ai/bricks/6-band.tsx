import { LandingBandSection } from '@/components/landing/LandingBand';
import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';

export default function Component() {
  return (
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
  );
}
