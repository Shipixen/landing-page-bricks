import clsx from 'clsx';
import { GiftIcon } from 'lucide-react';

/**
 * A component meant to be used in the landing page.
 *
 * Use this to show a discount or offer to encourage users to take action, typically used under call to action buttons.
 */
export const LandingDiscount = ({
  className,
  discountValueText = '$200 off',
  discountDescriptionText = 'for the first 50 customers (5 left)',
  animated = true,
}: {
  className?: string;
  discountValueText: string;
  discountDescriptionText: string;
  animated?: boolean;
}) => {
  return (
    <p className={clsx('flex flex-wrap gap-1 items-center text-sm', className)}>
      <span className="text-green-500 flex gap-1 items-center flex-shrink-0">
        <GiftIcon
          className={clsx(
            'w-5 h-5 relative -top-0.5',
            animated ? 'animate-pulse' : '',
          )}
        />{' '}
        <span className="font-bold">{discountValueText}</span>
      </span>{' '}
      {discountDescriptionText}
    </p>
  );
};
