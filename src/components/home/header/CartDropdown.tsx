"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "../../../context/CartContext";

const DELIVERY_FEE = 5.0;

const fmt = (value: number) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);

interface CartDropdownProps {
    onClose: () => void;
}

export function CartDropdown({ onClose }: CartDropdownProps) {
    const { items, subtotal, updateQuantity, removeItem } = useCart();

    const hasItems = items.length > 0;
    const deliveryFee = hasItems ? DELIVERY_FEE : 0;
    const total = subtotal + deliveryFee;

    return (
        <>
            <div className="fixed inset-0 z-40" onClick={onClose} aria-hidden="true" />
            <div role="dialog" aria-label="Sua sacola" className="absolute -right-5 top-full mt-1 w-95 bg-[#F4F6F8]/90 border border-[#E2E8F0]/90 backdrop-blur-sm rounded-4xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex items-start justify-between px-5 pt-5 pb-4">
                    <div>
                        <h2 className="text-xl font-bold text-zinc-900">Sua Sacola</h2>
                    </div>
                    <button
                        onClick={onClose}
                        aria-label="Fechar sacola"
                        className="flex items-center justify-center cursor-pointer w-7 h-7 rounded-full hover:bg-zinc-100 transition-colors duration-150 text-zinc-400 hover:text-zinc-700 mt-0.5"
                    >
                        <X size={18} />
                    </button>
                </div>
                <div className="h-px bg-zinc-100 mx-5" />

                {!hasItems ? (
                    <div className="flex flex-col items-center justify-center py-12 px-5 gap-3 text-zinc-400">
                        <ShoppingBag size={40} className="text-zinc-200" />
                        <p className="text-sm font-medium">Sua sacola está vazia</p>
                        <p className="text-xs text-center">
                            Adicione itens do cardápio para começar seu pedido.
                        </p>
                    </div>
                ) : (
                    <ul className="flex flex-col divide-y divide-zinc-50 px-5 py-2 max-h-64 overflow-y-auto">
                        {items.map((item) => (
                            <li key={item.id} className="flex items-center gap-3 py-3.5">
                                <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-zinc-100">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                        sizes="56px"
                                    />
                                </div>

                                <span className="flex items-center justify-center min-w-8 h-7 px-2 rounded-lg bg-amber-50 border border-amber-200 text-xs font-bold text-amber-700 shrink-0">
                                    {item.quantity}×
                                </span>

                                <div className="flex flex-col flex-1 min-w-0">
                                    <span className="text-sm font-semibold text-zinc-900 truncate">
                                        {item.name}
                                    </span>
                                    {item.details && (
                                        <span className="text-xs text-zinc-400 truncate mt-0.5">
                                            {item.details}
                                        </span>
                                    )}
                                    <div className="flex items-center gap-1.5 mt-1.5">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            aria-label="Diminuir quantidade"
                                            className="flex items-center justify-center w-5 h-5 rounded-full border border-zinc-200 hover:bg-zinc-100 cursor-pointer transition-colors"
                                        >
                                            {item.quantity === 1
                                                ? <Trash2 size={10} className="text-rose-500" />
                                                : <Minus size={10} className="text-zinc-500" />
                                            }
                                        </button>
                                        <span className="text-xs font-medium text-zinc-700 w-3 text-center">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            aria-label="Aumentar quantidade"
                                            className="flex items-center justify-center w-5 h-5 rounded-full border border-zinc-200 hover:bg-zinc-100 cursor-pointer transition-colors"
                                        >
                                            <Plus size={10} className="text-zinc-500" />
                                        </button>
                                    </div>
                                </div>
                                <span className="text-sm font-bold text-zinc-900 shrink-0">
                                    {fmt(item.price * item.quantity)}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}

                {hasItems && (
                    <div className="flex flex-col gap-3 px-5 pb-5 pt-3">
                        <div className="h-px bg-zinc-100" />
                        <div className="flex flex-col gap-1.5 text-sm">
                            <div className="flex items-center justify-between">
                                <span className="text-zinc-500">Subtotal</span>
                                <span className="text-zinc-700">{fmt(subtotal)}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-zinc-500">Taxa de Entrega</span>
                                <span className="text-green-600 font-medium">{fmt(DELIVERY_FEE)}</span>
                            </div>
                            <div className="flex items-center justify-between mt-1.5">
                                <span className="text-base font-bold text-zinc-900">Total</span>
                                <span className="text-base font-bold text-orange-500">
                                    {fmt(total)}
                                </span>
                            </div>
                        </div>
                        <button id="cart-checkout-button" className="w-full flex items-center justify-between px-5 py-3.5 bg-zinc-900 hover:bg-zinc-700 text-white rounded-2xl font-semibold cursor-pointer text-sm transition-colors duration-200">
                            <span>Finalizar Pedido →</span>
                            <span>{fmt(total)}</span>
                        </button>

                        <Link href="/sacola" onClick={onClose} className="text-center text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors duration-150 py-1">
                            Ver sacola completa
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}
