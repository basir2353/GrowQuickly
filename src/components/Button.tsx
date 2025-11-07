import Link from 'next/link';
import { ReactNode } from 'react';
import { Button as ShadcnButton, ButtonProps as ShadcnButtonProps } from '@/components/ui/button';

interface ButtonProps extends Omit<ShadcnButtonProps, 'asChild'> {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'gradient',
  size = 'default',
  className = '',
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <ShadcnButton asChild variant={variant} size={size} className={className} {...props}>
        <Link href={href}>{children}</Link>
      </ShadcnButton>
    );
  }

  return (
    <ShadcnButton onClick={onClick} variant={variant} size={size} className={className} {...props}>
      {children}
    </ShadcnButton>
  );
}
