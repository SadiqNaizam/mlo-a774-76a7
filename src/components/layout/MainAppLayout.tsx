import React from 'react';

import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  /**
   * The main content of the layout, typically a page component.
   */
  children: React.ReactNode;
  /**
   * Optional additional class names to apply to the main container.
   */
  className?: string;
}

/**
 * `MainAppLayout` provides the primary content structure for the application.
 * It centers the content within a responsive, max-width container as per the layout requirements.
 *
 * @param {MainAppLayoutProps} props - The props for the component.
 * @returns {React.ReactElement} The rendered layout component.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    // The main semantic element for the primary content of the application.
    // The background color is inherited from the `body` tag styling in `index.css`.
    <main className={cn('w-full', className)}>
      {/* 
        This div acts as the content container based on layout requirements.
        - `mx-auto`: Horizontally centers the container.
        - `w-full`: Ensures the container takes up full width on smaller screens.
        - `max-w-screen-md`: Constrains the maximum width of the content area.
        - `px-4 py-8 ...`: Provides responsive padding for better spacing.
      */}
      <div className="mx-auto w-full max-w-screen-md px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  );
};

export default MainAppLayout;
