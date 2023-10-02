interface NotificationContentProps {
  text: string;
}

export function NotificationContent({ text }: NotificationContentProps) {
  return (
    <div className="flex-1 flex flex-col gap-1">
      <p className="text-zinc-100 text-sm rela">{text}</p>
      <div className="flex gap-2 text-xs text-zinc-400">
        <span>Convite</span>
        <span>Há 3 min</span>
      </div>
    </div>
  );
}
