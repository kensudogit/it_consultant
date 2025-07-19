import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Engineer from '../Engineer';

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

describe('Engineer Component', () => {
  it('renders engineer section with heading', () => {
    render(<Engineer />);
    
    expect(screen.getByRole('region')).toBeInTheDocument();
    expect(screen.getByText(/技術士紹介/)).toBeInTheDocument();
  });

  it('renders engineer profile', () => {
    render(<Engineer />);
    
    // Should display engineer information
    expect(screen.getByText(/須藤/)).toBeInTheDocument();
  });

  it('renders engineer qualifications', () => {
    render(<Engineer />);
    
    // Should display qualifications
    const qualifications = screen.getAllByText(/技術士|情報工学/);
    expect(qualifications.length).toBeGreaterThan(0);
  });

  it('renders engineer experience', () => {
    render(<Engineer />);
    
    // Should display experience information
    const experience = screen.getAllByText(/経験|実績/);
    expect(experience.length).toBeGreaterThan(0);
  });

  it('renders engineer photo or avatar', () => {
    render(<Engineer />);
    
    // Should have engineer image
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
  });

  it('has proper accessibility structure', () => {
    render(<Engineer />);
    
    // Should have a section heading
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it('renders with proper CSS classes', () => {
    render(<Engineer />);
    
    const engineerSection = screen.getByRole('region');
    expect(engineerSection).toHaveClass('py-16');
  });
}); 