import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Contact from '../Contact';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    form: ({ children, ...props }: any) => <form {...props}>{children}</form>,
  },
}));

// Mock react-intersection-observer
vi.mock('react-intersection-observer', () => ({
  useInView: () => ({ ref: vi.fn(), inView: true }),
}));

// Mock react-hook-form
vi.mock('react-hook-form', () => ({
  useForm: () => ({
    register: vi.fn(),
    handleSubmit: vi.fn((fn) => fn),
    formState: { errors: {} },
    reset: vi.fn(),
  }),
}));

// Mock axios
vi.mock('axios', () => ({
  default: {
    post: vi.fn(),
  },
}));

describe('Contact Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders contact section with heading', () => {
    render(<Contact />);
    
    expect(screen.getByRole('region')).toBeInTheDocument();
    expect(screen.getByText(/お問い合わせ/)).toBeInTheDocument();
  });

  it('renders contact form', () => {
    render(<Contact />);
    
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('renders form fields', () => {
    render(<Contact />);
    
    // Should have input fields
    expect(screen.getByLabelText(/お名前/)).toBeInTheDocument();
    expect(screen.getByLabelText(/メールアドレス/)).toBeInTheDocument();
    expect(screen.getByLabelText(/お問い合わせ内容/)).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(<Contact />);
    
    expect(screen.getByRole('button', { name: /送信/ })).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<Contact />);
    
    // Should display contact details
    expect(screen.getByText(/電話番号/)).toBeInTheDocument();
    expect(screen.getByText(/メール/)).toBeInTheDocument();
  });

  it('has proper accessibility structure', () => {
    render(<Contact />);
    
    // Should have a section heading
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    
    // Form should have proper labels
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });

  it('renders with proper CSS classes', () => {
    render(<Contact />);
    
    const contactSection = screen.getByRole('region');
    expect(contactSection).toHaveClass('py-16');
  });
}); 