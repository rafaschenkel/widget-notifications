import { ReactNode } from 'react';

interface NotificationProps {
  children: ReactNode;
}

export function NotificationRoot({ children }: NotificationProps) {
  return <div className="py-4 px-6 flex gap-4 bg-zinc-800">{children}</div>;
}
