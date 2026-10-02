"use client";

import Image from "next/image";
import { NotificationsButton } from "./header/NotificationsButton";
import { UserAvatar } from "./header/UserAvatar";
import { HeaderNav } from "./header/HeaderNav";

export function Header() {
    return (
        <header className="w-full bg-white/90">
            <div className="flex items-center justify-between px-10 py-3">
                <div className="flex items-center gap-3">
                    <div className="w-28">
                        <Image
                            src="/logo.png"
                            alt="Bella Delivery logo"
                            width={120}
                            height={120}
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <NotificationsButton hasUnread />
                    <UserAvatar />
                </div>
            </div>
            <HeaderNav />
        </header>
    );
}