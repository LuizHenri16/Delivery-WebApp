"use client";

interface UserAvatarProps {
    name?: string;
    role?: string;
    initials?: string;
}

function getInitials(name: string): string {
    return name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0].toUpperCase())
        .join("");
}

export function UserAvatar({
    name = "Marcos Gerente",
    role = "Administrador",
    initials,
}: UserAvatarProps) {
    const displayInitials = initials ?? getInitials(name);

    return (
        <div className="flex items-center gap-2">
            <div
                id="adm-user-avatar"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-zinc-700 text-white text-xs font-semibold select-none shrink-0"
                aria-label={`Usuário: ${name}`}
                title={name}
            >
                {displayInitials}
            </div>
            <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-zinc-800">{name}</span>
                <span className="text-xs text-zinc-400">{role}</span>
            </div>
        </div>
    );
}
