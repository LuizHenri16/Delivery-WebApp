"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative w-full min-h-screen flex overflow-x-hidden bg-zinc-900">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/login-background.png"
                    alt="Restaurant Interior"
                    fill
                    className="object-cover"
                    priority
                />
                <div
                    className="hidden lg:block absolute inset-0"
                    style={{
                        background: 'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 35%, rgba(255,255,255,0.8) 55%, rgba(255,255,255,1) 65%, rgba(255,255,255,1) 100%)'
                    }}
                ></div>
                <div
                    className="block lg:hidden absolute inset-0"
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 25%, rgba(255,255,255,0.9) 45%, rgba(255,255,255,1) 55%, rgba(255,255,255,1) 100%)'
                    }}
                ></div>
            </div>

            <div className="relative z-10 w-full min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-7xl mx-auto lg:px-12">
                
                <div className="hidden lg:flex flex-col gap-6 w-full lg:w-1/2 lg:-mt-20 lg:text-left lg:items-start">
                    <div className="p-1 bg-gradient-to-r from-[#000000]/10 via-[#ffffff]/10 via-[#b1b1b1]/10 to-[#ffffff] backdrop-blur-lg rounded-3xl">
                        <img src="/logo.png" alt="Delivery logo" className="w-60" />
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                        O sabor autêntico na<br />sua porta.
                    </h1>

                    <p className="text-sm lg:text-base text-zinc-300 leading-relaxed max-w-md">
                        Acesse sua conta para acompanhar seus pedidos em tempo real, resgatar benefícios exclusivos e saborear receitas feitas com paixão.
                    </p>
                </div>

                <div className="w-full lg:max-w-120 bg-white lg:rounded-3xl p-8 py-12 lg:p-10 lg:shadow-2xl flex flex-col justify-center gap-8 min-h-screen lg:min-h-0 lg:my-8 overflow-y-auto no-scrollbar">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight">Bem-vindo de volta!</h2>
                        <p className="text-sm text-zinc-500">
                            Insira suas credenciais para acessar sua conta e fazer seus pedidos.
                        </p>
                    </div>

                    <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                        <Input
                            id="email"
                            type="email"
                            label="E-mail ou CPF"
                            placeholder="exemplo@bellamassa.com.br ou 000.000.000-00"
                            iconLeft={<User size={18} />}
                        />

                        <div className="flex flex-col gap-1.5">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="text-xs font-bold text-zinc-900">
                                    Sua Senha
                                </label>
                                <Link href="#" className="text-xs font-bold text-red-500 hover:text-red-600 transition-colors">
                                    Esqueceu a senha?
                                </Link>
                            </div>
                            <div className="relative flex items-center">
                                <div className="absolute left-4 text-zinc-400">
                                    <Lock size={18} />
                                </div>
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Digite sua senha cadastrada"
                                    className="w-full h-12 bg-white border border-zinc-200 rounded-full pl-11 pr-11 text-sm placeholder:text-zinc-400 transition-colors hover:border-zinc-300 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 text-zinc-400 hover:text-zinc-600 transition-colors"
                                    aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mt-1">
                            <input
                                type="checkbox"
                                id="remember"
                                className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 cursor-pointer"
                            />
                            <label htmlFor="remember" className="text-xs text-zinc-500 cursor-pointer select-none">
                                Lembrar meus dados
                            </label>
                        </div>

                        <Button type="submit" fullWidth className="mt-2 group gap-2">
                            Entrar na Conta
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </form>

                    <div className="text-center text-sm text-zinc-500 mt-2">
                        Ainda não tem uma conta?{" "}
                        <Link href="/conta/cadastro" className="font-bold text-zinc-900 hover:underline">
                            Cadastre-se grátis &gt;
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
