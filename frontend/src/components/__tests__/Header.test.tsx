import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Header from '../Header';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    header: ({ children, ...props }: any) => <header {...props}>{children}</header>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
}));

// Mock @heroicons/react
vi.mock('@heroicons/react/24/outline', () => ({
  Bars3Icon: ({ className }: any) => <div data-testid="bars-icon" className={className} />,
  XMarkIcon: ({ className }: any) => <div data-testid="x-mark-icon" className={className} />,
}));

describe('Header Component', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
    // Mock scrollIntoView
    Element.prototype.scrollIntoView = vi.fn();
  });

  it('renders header with logo and company name', () => {
    render(<Header />);
    
    expect(screen.getByText('須藤技術士事務所')).toBeInTheDocument();
    expect(screen.getByText('情報工学部門')).toBeInTheDocument();
    expect(screen.getByText('須')).toBeInTheDocument();
  });

  it('renders all navigation items', () => {
    render(<Header />);
    
    const navigationItems = ['ホーム', 'サービス', '技術士紹介', '会社概要', 'お問い合わせ'];
    navigationItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('renders contact button', () => {
    render(<Header />);
    
    expect(screen.getByText('お問い合わせ')).toBeInTheDocument();
  });

  it('shows mobile menu button on mobile view', () => {
    render(<Header />);
    
    expect(screen.getByLabelText('メニューを開く')).toBeInTheDocument();
  });

  it('toggles mobile menu when hamburger button is clicked', async () => {
    render(<Header />);
    
    const menuButton = screen.getByLabelText('メニューを開く');
    
    // Initially, mobile menu should not be visible
    expect(screen.queryByRole('button', { name: 'ホーム' })).not.toBeInTheDocument();
    
    // Click to open menu
    await user.click(menuButton);
    
    // Menu should now be visible
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'ホーム' })).toBeInTheDocument();
    });
    
    // Click to close menu
    await user.click(menuButton);
    
    // Menu should be hidden again
    await waitFor(() => {
      expect(screen.queryByRole('button', { name: 'ホーム' })).not.toBeInTheDocument();
    });
  });

  it('calls scrollToSection when navigation item is clicked', async () => {
    render(<Header />);
    
    const homeButton = screen.getByText('ホーム');
    await user.click(homeButton);
    
    expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth'
    });
  });

  it('calls scrollToSection when contact button is clicked', async () => {
    render(<Header />);
    
    const contactButton = screen.getByText('お問い合わせ');
    await user.click(contactButton);
    
    expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth'
    });
  });

  it('closes mobile menu when navigation item is clicked', async () => {
    render(<Header />);
    
    const menuButton = screen.getByLabelText('メニューを開く');
    
    // Open menu
    await user.click(menuButton);
    
    // Click on a navigation item
    const homeButton = await screen.findByRole('button', { name: 'ホーム' });
    await user.click(homeButton);
    
    // Menu should be closed
    await waitFor(() => {
      expect(screen.queryByRole('button', { name: 'ホーム' })).not.toBeInTheDocument();
    });
  });

  it('applies scrolled styles when window is scrolled', () => {
    render(<Header />);
    
    // Simulate scroll
    Object.defineProperty(window, 'scrollY', {
      value: 100,
      writable: true,
    });
    
    // Trigger scroll event
    fireEvent.scroll(window);
    
    // Header should have scrolled styles
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('bg-white/90', 'backdrop-blur-xl', 'shadow-xl');
  });

  it('has proper accessibility attributes', () => {
    render(<Header />);
    
    const menuButton = screen.getByLabelText('メニューを開く');
    expect(menuButton).toHaveAttribute('aria-label', 'メニューを開く');
  });

  it('renders with proper CSS classes', () => {
    render(<Header />);
    
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('fixed', 'top-0', 'left-0', 'right-0', 'z-50');
  });
}); 