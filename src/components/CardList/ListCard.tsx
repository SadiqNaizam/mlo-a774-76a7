import * as React from 'react';
import type { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

interface ListCardProps {
  /**
   * Icon component from the lucide-react library.
   */
  icon: LucideIcon;
  /**
   * The main title of the card.
   */
  title: string;
  /**
   * The primary line of descriptive text, displayed below the title.
   */
  description: string;
  /**
   * Additional details or secondary text, displayed below the description.
   */
  details: string;
  /**
   * Optional React node for actions, such as buttons or a dropdown menu, aligned to the right.
   */
  actions?: React.ReactNode;
  /**
   * Additional class names to be applied to the card container.
   */
  className?: string;
}

/**
 * `ListCard` is an individual card component designed for itemized lists.
 * It displays an icon, a title, two lines of supporting text, and an optional action area.
 * The layout is a horizontal flexbox with vertical stacking for the text content.
 */
const ListCard: React.FC<ListCardProps> = ({
  icon: Icon,
  title,
  description,
  details,
  actions,
  className,
}) => {
  return (
    <Card className={cn('flex w-full items-start gap-4 p-4', className)}>
      {/* Icon Container */}
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-muted">
        <Icon className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
      </div>

      {/* Text Content */}
      <div className="flex-grow space-y-1">
        <p className="font-semibold text-card-foreground">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-sm text-muted-foreground">{details}</p>
      </div>

      {/* Actions Slot */}
      {actions && <div className="ml-auto flex-shrink-0 self-center">{actions}</div>}
    </Card>
  );
};

export default ListCard;
