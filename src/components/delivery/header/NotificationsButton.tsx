"use client";

import { Bell } from "lucide-react";

interface NotificationsButtonProps {
    hasUnread?: boolean;
    unreadCount?: number;
    onClick?: () => void;
}

export function NotificationsButton({
    hasUnread = true,
    unreadCount,
    onClick,
}: NotificationsButtonProps) {
    return (
        <button
            id="adm-notifications"
            aria-label={`Notificações${hasUnread ? ", você tem notificações não lidas" : ""}`}
            onClick={onClick}
            className="relative flex items-center justify-center w-9 h-9 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors duration-200 group"
        >
            <Bell
                size={16}
                className="text-zinc-600 group-hover:text-zinc-900 transition-colors duration-200"
            />
            {hasUnread && (
                <span className="absolute top-1 right-1.5 w-2 h-2 rounded-full bg-orange-500 ring-2 ring-white">
                    {unreadCount && unreadCount > 0 ? (
                        <span className="sr-only">{unreadCount} notificações não lidas</span>
                    ) : null}
                </span>
            )}
        </button>
    );
}
