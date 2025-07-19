import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
}));

// Mock react-intersection-observer
vi.mock('react-intersection-observer', () => ({
  useInView: () => ({ ref: vi.fn(), inView: true }),
}));

describe('Hero Component', () => {
  it('renders hero section with main heading', () => {
    render(<Hero />);
    
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders company name and tagline', () => {
    render(<Hero />);
    
    expect(screen.getByText(/須藤技術士事務所/)).toBeInTheDocument();
    expect(screen.getByText(/情報工学部門/)).toBeInTheDocument();
  });

  it('renders call-to-action buttons', () => {
    render(<Hero />);
    
    expect(screen.getByText(/お問い合わせ/)).toBeInTheDocument();
    expect(screen.getByText(/サービス詳細/)).toBeInTheDocument();
  });

  it('renders hero image or illustration', () => {
    render(<Hero />);
    
    // Check for any image elements
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
  });

  it('has proper accessibility structure', () => {
    render(<Hero />);
    
    // Should have a main heading
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('renders with proper CSS classes', () => {
    render(<Hero />);
    
    const heroSection = screen.getByRole('banner');
    expect(heroSection).toHaveClass('min-h-screen', 'flex', 'items-center');
  });
}); 