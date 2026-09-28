import Link from "next/link";
import { User } from "lucide-react";

interface AccountButtonProps {
  label?: string;
}

export function AccountButton({ label = "Minha Conta" }: AccountButtonProps) {
  return (
    <Link
      id="account-button"
      href="/conta"
      aria-label="Minha conta"
      className="flex items-center gap-2 px-3 py-2 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors duration-200 group"
    >
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-100">
        <User
          size={13}
          className="text-orange-500"
        />
      </span>
      <span className="text-sm text-zinc-700 group-hover:text-zinc-900 transition-colors duration-200">
        {label}
      </span>
    </Link>
  );
}
