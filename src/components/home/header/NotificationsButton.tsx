import Link from "next/link";
import { Bell } from "lucide-react";

interface NotificationsButtonProps {
  hasUnread?: boolean;
}

export function NotificationsButton({ hasUnread = false }: NotificationsButtonProps) {
  return (
    <Link
      id="notifications-button"
      href="/notificacoes"
      aria-label={`Notificações${hasUnread ? ", você tem notificações não lidas" : ""}`}
      className="relative flex items-center justify-center w-9 h-9 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors duration-200 group"
    >
      <Bell
        size={16}
        className="text-zinc-600 group-hover:text-zinc-900 transition-colors duration-200"
      />
      {hasUnread && (
        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-orange-500 ring-2 ring-white" />
      )}
    </Link>
  );
}
