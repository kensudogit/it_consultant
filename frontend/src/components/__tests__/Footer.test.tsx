import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    footer: ({ children, ...props }: any) => <footer {...props}>{children}</footer>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}));

describe('Footer Component', () => {
  it('renders footer with company information', () => {
    render(<Footer />);
    
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByText(/須藤技術士事務所/)).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<Footer />);
    
    // Should display contact details
    expect(screen.getByText(/電話番号/)).toBeInTheDocument();
    expect(screen.getByText(/メール/)).toBeInTheDocument();
  });

  it('renders copyright information', () => {
    render(<Footer />);
    
    // Should have copyright text
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Footer />);
    
    // Should have footer navigation
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });

  it('has proper accessibility structure', () => {
    render(<Footer />);
    
    // Should have footer role
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('renders with proper CSS classes', () => {
    render(<Footer />);
    
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('bg-gray-900', 'text-white');
  });
}); 