import Link from "next/link";
import { HamburgerMenu } from "./home/header/HamburgerMenu";
import { CartButton } from "./home/header/CartButton";
import { NotificationsButton } from "./home/header/NotificationsButton";
import { AccountButton } from "./home/header/AccountButton";

export function Header() {
    return (
        <header className="w-full border-b border-zinc-100 py-4">
            <div className="flex items-center justify-between px-1 py-3">
                <div className="flex items-center gap-3">
                    <Link href="/" className="w-30 ">
                        <img src="/logo.png" alt="Delivery logo" />
                    </Link>
                </div>
                <div className="flex items-center gap-2">
                    <CartButton />
                    <NotificationsButton />
                    <AccountButton />
                    <HamburgerMenu />
                </div>
            </div>
        </header>
    );
}