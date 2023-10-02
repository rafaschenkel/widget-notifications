import { ButtonHTMLAttributes, ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

interface NotificationActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
}

export function NotificationAction({ icon: Icon, ...rest }: NotificationActionProps) {
  return (
    <button
      {...rest}
      className={twMerge('bg-zinc-700 hover:bg-zinc-600 p-2 rounded text-zinc-50', rest.className)}
    >
      <Icon className="w-3 h-3" />
    </button>
  );
}
