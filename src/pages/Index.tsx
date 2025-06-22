import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { Package, Users, FileText, Settings, Shield } from 'lucide-react';

import MainAppLayout from '../components/layout/MainAppLayout';
import ListCard from '../components/CardList/ListCard';
import { Button } from '@/components/ui/button';

// Data Interface for list card items
interface CardDataItem {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  details: string;
}

// Dummy data for the list cards, defined directly in the component.
// `as const` is not used here to maintain compatibility with the `LucideIcon` type.
const cardListData: readonly CardDataItem[] = [
  {
    id: 1,
    icon: Package,
    title: 'Product Inventory',
    description: 'Manage all company products, stock levels, and supplier information.',
    details: 'Last updated: 2 hours ago by admin',
  },
  {
    id: 2,
    icon: Users,
    title: 'User Management',
    description: 'Add, edit, or remove user accounts and their associated permissions.',
    details: '2,453 active users',
  },
  {
    id: 3,
    icon: FileText,
    title: 'Content & Articles',
    description: 'Create, publish, and manage all blog posts and website pages.',
    details: '15 drafts, 128 published articles',
  },
  {
    id: 4,
    icon: Settings,
    title: 'Application Settings',
    description: 'Configure global settings, integrations, and API keys for the platform.',
    details: 'Requires administrator privileges',
  },
  {
    id: 5,
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Review security logs, manage compliance documents, and update policies.',
    details: 'Last audit: May 15, 2024',
  },
];

/**
 * `IndexPage` is the main page for the application, displaying a list of cards.
 * It follows the "Card List Overview" design, assembling `ListCard` components
 * within a centrally aligned layout.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* 
        This div container implements the vertical stacking layout for the cards.
        - `flex flex-col`: Arranges children (the cards) in a vertical column.
        - `space-y-6`: Adds a consistent vertical gap between each card, as per layout requirements.
      */}
      <div className="flex flex-col space-y-6">
        {cardListData.map((item) => (
          <ListCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
            details={item.details}
            actions={
              <Button variant="outline" size="sm">
                View
              </Button>
            }
          />
        ))}
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
