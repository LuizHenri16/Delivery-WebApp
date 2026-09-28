"use client";

import { useState } from "react";
import { ShoppingCartIcon } from "lucide-react";
import { useCart } from "../../../context/CartContext";
import { CartDropdown } from "./CartDropdown";

export function CartButton() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        id="cart-button"
        aria-label={`Sacola de compras, ${count} ${count === 1 ? "item" : "itens"}`}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-0.5 px-2 py-2 transition-colors duration-200 group cursor-pointer"
      >
        <ShoppingCartIcon
          size={20}
          className="text-orange-500 group-hover:scale-110 transition-transform duration-200"
        />
        {count > 0 && (
          <span className="relative -top-3 -left-2 group-hover:scale-105 duration-200 transition-transform flex items-center justify-center w-5 h-5 rounded-full bg-orange-500 text-white text-[10px] font-bold leading-none">
            {count > 99 ? "99+" : count}
          </span>
        )}
      </button>

      {open && <CartDropdown onClose={() => setOpen(false)} />}
    </div>
  );
}
