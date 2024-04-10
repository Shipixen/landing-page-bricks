import clsx from 'clsx';
import { Children, ReactElement, ReactNode, cloneElement } from 'react';

type Child = ReactElement<any, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

/**
 * A component meant to be used in the landing page.
 * It displays a title, description and a grid of LandingProductFeature and/or LandingProductVideoFeature (in any combination, passed as children).
 */
export const LandingProductFeaturesGrid = ({
  className,
  children,
  title,
  titleComponent,
  description,
  descriptionComponent,
  withBackground = true,
  variant = 'primary',
  containerType = 'ultrawide',
}: {
  className?: string;
  children?: React.ReactNode;
  title?: string | React.ReactNode;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  withBackground?: boolean;
  variant?: 'primary' | 'secondary';
  containerType?: 'narrow' | 'wide' | 'ultrawide';
}) => {
  const childrenWithBackground = Children.map(children, (child) => {
    if (!child) {
      return null;
    }

    if (typeof child !== 'object') {
      return child;
    }

    const reactChild = child as Child;
    const type = reactChild?.type?.name;

    return cloneElement(reactChild, {
      className: '!p-0 rounded-xl md:w-[calc(50%-1rem)]'.concat(
        variant === 'primary' ? ' fancy-glass' : ' fancy-glass-contrast',
      ),
      innerClassName: 'p-4 lg:p-10 m-0 lg:m-0 h-full'.concat(
        variant === 'primary'
          ? ' bg-primary-100/20 dark:bg-primary-900/10'
          : ' bg-secondary-100/20 dark:bg-secondary-900/10',
      ),
      ...(type === 'LandingProductFeature'
        ? { imagePosition: 'center', imageShadow: 'none' }
        : {}),
      ...(type === 'LandingProductVideoFeature'
        ? { videoPosition: 'center' }
        : {}),
    });
  });

  return (
    <section
      className={clsx(
        'w-full flex justify-center items-center gap-8 p-6 py-12 lg:py-16 flex-col',
        withBackground && variant === 'primary'
          ? 'bg-primary-100/20 dark:bg-primary-900/10'
          : '',
        withBackground && variant === 'secondary'
          ? 'bg-secondary-100/20 dark:bg-secondary-900/10'
          : '',
        className,
      )}
    >
      {title || description || titleComponent || descriptionComponent ? (
        <div
          className={clsx(
            'relative flex flex-col sm:items-center',
            `${containerType}-container`,
          )}
        >
          {title ? (
            <h2 className="w-full text-3xl font-semibold leading-tight md:leading-tight max-w-sm sm:max-w-none md:text-4xl lg:text-5xl">
              {title}
            </h2>
          ) : (
            titleComponent
          )}

          {description ? (
            <p className="w-full mt-6 md:text-xl">{description}</p>
          ) : (
            descriptionComponent
          )}
        </div>
      ) : null}

      <div
        className={clsx(
          '!p-0 relative isolate flex flex-col md:flex-row md:flex-wrap gap-4',
          `${containerType}-container`,
        )}
      >
        {childrenWithBackground}
      </div>
    </section>
  );
};
