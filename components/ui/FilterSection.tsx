import { ReactNode } from 'react';

interface FilterSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const FilterSection = ({ title, children, className = '' }: FilterSectionProps) => {
  return (
    <div className={`rounded-lg p-4 ${className}`}>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
};
