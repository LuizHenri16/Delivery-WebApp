import Link from "next/link";
import { HamburgerMenu } from "./header/HamburgerMenu";
import { CartButton } from "./header/CartButton";
import { NotificationsButton } from "./header/NotificationsButton";
import { AccountButton } from "./header/AccountButton";

export function Header() {
    return (
        <header className="w-full border-b border-zinc-100 py-4">
            <div className="flex items-center justify-between px-1 py-3">
                <div className="flex items-center gap-3">
                    <HamburgerMenu />
                    <Link href="/" className="text-base font-semibold text-zinc-900 tracking-tight hover:text-zinc-600 transition-colors duration-200">
                        Bella Delivery
                    </Link>
                </div>
                <div className="flex items-center gap-2">
                    <CartButton />
                    <NotificationsButton />
                    <AccountButton />
                </div>
            </div>
        </header>
    );
}