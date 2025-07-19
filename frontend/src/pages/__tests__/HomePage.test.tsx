import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';

// Mock all components
vi.mock('../../components/Header', () => ({
  default: () => <div data-testid="header">Header</div>,
}));

vi.mock('../../components/Hero', () => ({
  default: () => <div data-testid="hero">Hero</div>,
}));

vi.mock('../../components/About', () => ({
  default: () => <div data-testid="about">About</div>,
}));

vi.mock('../../components/Services', () => ({
  default: () => <div data-testid="services">Services</div>,
}));

vi.mock('../../components/Engineer', () => ({
  default: () => <div data-testid="engineer">Engineer</div>,
}));

vi.mock('../../components/Contact', () => ({
  default: () => <div data-testid="contact">Contact</div>,
}));

vi.mock('../../components/Footer', () => ({
  default: () => <div data-testid="footer">Footer</div>,
}));

describe('HomePage Component', () => {
  it('renders all main components', () => {
    render(<HomePage />);
    
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('about')).toBeInTheDocument();
    expect(screen.getByTestId('services')).toBeInTheDocument();
    expect(screen.getByTestId('engineer')).toBeInTheDocument();
    expect(screen.getByTestId('contact')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('renders with proper structure', () => {
    render(<HomePage />);
    
    // Should have main element
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders with proper CSS classes', () => {
    render(<HomePage />);
    
    const main = screen.getByRole('main');
    expect(main).toHaveClass('min-h-screen');
  });
}); 