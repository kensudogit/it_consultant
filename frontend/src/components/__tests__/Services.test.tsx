import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Services from '../Services';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }: any) => <h3 {...props}>{children}</h3>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}));

// Mock react-intersection-observer
vi.mock('react-intersection-observer', () => ({
  useInView: () => ({ ref: vi.fn(), inView: true }),
}));

describe('Services Component', () => {
  it('renders services section with heading', () => {
    render(<Services />);
    
    expect(screen.getByRole('region')).toBeInTheDocument();
    expect(screen.getByText(/サービス/)).toBeInTheDocument();
  });

  it('renders service cards', () => {
    render(<Services />);
    
    // Should render multiple service items
    const serviceCards = screen.getAllByRole('article');
    expect(serviceCards.length).toBeGreaterThan(0);
  });

  it('renders service titles', () => {
    render(<Services />);
    
    // Should have service titles
    const serviceTitles = screen.getAllByRole('heading', { level: 3 });
    expect(serviceTitles.length).toBeGreaterThan(0);
  });

  it('renders service descriptions', () => {
    render(<Services />);
    
    // Should have service descriptions
    const descriptions = screen.getAllByText(/システム|開発|設計|コンサルティング/);
    expect(descriptions.length).toBeGreaterThan(0);
  });

  it('has proper accessibility structure', () => {
    render(<Services />);
    
    // Should have a section heading
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it('renders with proper CSS classes', () => {
    render(<Services />);
    
    const servicesSection = screen.getByRole('region');
    expect(servicesSection).toHaveClass('py-16');
  });
}); 