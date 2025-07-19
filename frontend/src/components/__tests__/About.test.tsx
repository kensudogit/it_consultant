import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '../About';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}));

// Mock react-intersection-observer
vi.mock('react-intersection-observer', () => ({
  useInView: () => ({ ref: vi.fn(), inView: true }),
}));

describe('About Component', () => {
  it('renders about section with heading', () => {
    render(<About />);
    
    expect(screen.getByRole('region')).toBeInTheDocument();
    expect(screen.getByText(/会社概要/)).toBeInTheDocument();
  });

  it('renders company information', () => {
    render(<About />);
    
    expect(screen.getByText(/須藤技術士事務所/)).toBeInTheDocument();
    expect(screen.getByText(/情報工学部門/)).toBeInTheDocument();
  });

  it('renders company description', () => {
    render(<About />);
    
    // Should contain some descriptive text about the company
    const aboutText = screen.getByText(/技術士/);
    expect(aboutText).toBeInTheDocument();
  });

  it('renders company values or features', () => {
    render(<About />);
    
    // Should display company values or key features
    const values = screen.getAllByText(/専門性|経験|品質/);
    expect(values.length).toBeGreaterThan(0);
  });

  it('has proper accessibility structure', () => {
    render(<About />);
    
    // Should have a section heading
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it('renders with proper CSS classes', () => {
    render(<About />);
    
    const aboutSection = screen.getByRole('region');
    expect(aboutSection).toHaveClass('py-16', 'bg-gray-50');
  });
}); 