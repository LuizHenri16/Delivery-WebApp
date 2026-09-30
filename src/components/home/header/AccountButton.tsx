import Link from "next/link";
import { User } from "lucide-react";

interface AccountButtonProps {
  label?: string;
}

export function AccountButton({ label = "Minha Conta" }: AccountButtonProps) {
  return (
    <Link
      id="account-button"
      href="/conta/login"
      aria-label="Minha conta"
      className="flex items-center gap-1 px-3 py-2 group"
    >
      <span className="flex items-center justify-center w-10 h-10">
        <User
          size={20}
          className="text-zinc-500 group-hover:text-zinc-900 transition-colors duration-200"
        />
      </span>
      <span className="text-sm text-zinc-700 group-hover:text-zinc-900 transition-colors duration-200">
        {label}
      </span>
    </Link>
  );
}
