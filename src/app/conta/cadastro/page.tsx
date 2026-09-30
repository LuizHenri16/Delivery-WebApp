"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Mail, IdCard, Lock, Eye, EyeOff, RotateCcw, CheckCircle2, Info, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";

export default function CadastroPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
                <div className="hidden lg:flex flex-col gap-8 w-full lg:w-5/12 lg:-mt-10 lg:text-left lg:items-start">
                    <div className="p-1 bg-gradient-to-r from-[#000000]/10 via-[#ffffff]/10 via-[#b1b1b1]/10 to-[#ffffff] backdrop-blur-lg rounded-3xl">
                            <img src="/logo.png" alt="Delivery logo" className="w-60" />
                    </div>
                    
                    <div className="flex flex-col gap-6"> 
                        <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                            Sabores autênticos à<br />sua porta.
                        </h1>

                        <p className="text-sm lg:text-base text-zinc-300 leading-relaxed max-w-md">
                            Pizzas artesanais de fermentação natural e hambúrgueres defumados com carnes nobres. Crie seu acesso exclusivo em menos de 1 minuto.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 mt-8 max-w-sm">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500/20 text-teal-400 shrink-0">
                            <ShieldCheck size={20} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-white">Cadastro Rápido & Seguro</span>
                            <span className="text-xs text-zinc-300">Sem etapas longas. Comece já a pedir suas delícias.</span>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:max-w-[540px] bg-white lg:rounded-3xl p-6 py-10 lg:p-10 lg:shadow-2xl flex flex-col justify-center lg:justify-start gap-6 min-h-screen lg:min-h-0 lg:max-h-[calc(100vh-4rem)] lg:my-8 overflow-y-auto no-scrollbar">
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-bold text-zinc-400 tracking-widest uppercase">Boas-vindas à Bella Delivery</span>
                        <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight">Crie sua conta</h2>
                        <p className="text-sm text-zinc-500 mt-1">
                            Informe apenas os dados básicos para identificação. Simples, rápido e descomplicado.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="flex flex-col gap-5 mt-2" onSubmit={(e) => e.preventDefault()}>

                        {/* Nome */}
                        <Input
                            id="nome"
                            type="text"
                            label="Nome Completo"
                            placeholder="Ex: Gabriel Alencar de Souza"
                            iconLeft={<User size={16} />}
                        />

                        {/* E-mail e CPF - 2 columns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <Input
                                id="email"
                                type="email"
                                label="E-mail"
                                placeholder="voce@email.com"
                                iconLeft={<Mail size={16} />}
                            />
                            <Input
                                id="cpf"
                                type="text"
                                label="CPF"
                                placeholder="000.000.000-00"
                                iconLeft={<IdCard size={16} />}
                            />
                        </div>

                        {/* Senhas - 2 columns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-1.5 w-full">
                                <label htmlFor="password" className="text-xs font-bold text-zinc-900">
                                    Senha
                                </label>
                                <div className="relative flex items-center">
                                    <div className="absolute left-4 text-zinc-400">
                                        <Lock size={16} />
                                    </div>
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Mínimo 6 caracteres"
                                        className="w-full h-12 bg-white border border-zinc-200 rounded-full pl-11 pr-11 text-sm placeholder:text-zinc-400 transition-colors hover:border-zinc-300 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 text-zinc-400 hover:text-zinc-600 transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5 w-full">
                                <label htmlFor="confirmPassword" className="text-xs font-bold text-zinc-900">
                                    Confirmar Senha
                                </label>
                                <div className="relative flex items-center">
                                    <div className="absolute left-4 text-zinc-400">
                                        <RotateCcw size={16} />
                                    </div>
                                    <input
                                        id="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Repita sua senha"
                                        className="w-full h-12 bg-white border border-zinc-200 rounded-full pl-11 pr-11 text-sm placeholder:text-zinc-400 transition-colors hover:border-zinc-300 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-4 text-zinc-400 hover:text-zinc-600 transition-colors"
                                    >
                                        {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Password rules */}
                        <div className="flex items-center gap-4 px-1">
                            <div className="flex items-center gap-1.5 text-[11px] text-zinc-600 font-medium">
                                <CheckCircle2 size={12} className="text-zinc-400" />
                                6+ dígitos
                            </div>
                            <div className="flex items-center gap-1.5 text-[11px] text-zinc-600 font-medium">
                                <CheckCircle2 size={12} className="text-zinc-400" />
                                Letra ou número
                            </div>
                        </div>

                        {/* Alert Box */}
                        <div className="bg-rose-50 rounded-2xl p-4 flex gap-3 items-start mt-2 border border-rose-100">
                            <div className="text-rose-500 shrink-0 mt-0.5">
                                <Info size={18} />
                            </div>
                            <p className="text-[11px] leading-relaxed text-rose-900/80">
                                <strong className="font-bold text-rose-950">Fique tranquilo: </strong>
                                Endereço de entrega, telefone para contato e formas de pagamento podem ser completados a qualquer momento no seu perfil ou diretamente durante o checkout do seu primeiro pedido.
                            </p>
                        </div>

                        {/* Terms checkbox */}
                        <div className="flex items-start gap-2.5 mt-2">
                            <input
                                type="checkbox"
                                id="terms"
                                className="mt-0.5 w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 cursor-pointer"
                            />
                            <label htmlFor="terms" className="text-xs text-zinc-600 leading-snug cursor-pointer select-none">
                                Li e concordo com os <span className="text-rose-500 hover:underline">Termos de Uso</span> e a <span className="text-rose-500 hover:underline">Política de Privacidade</span> da Bella Massa.
                            </label>
                        </div>

                        {/* Submit Button */}
                        <Button type="submit" fullWidth className="mt-4 group gap-2">
                            Criar Minha Conta
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </form>

                    {/* Footer link */}
                    <div className="text-center text-sm text-zinc-500 mt-2 pb-8 lg:pb-0">
                        Já tem uma conta?{" "}
                        <Link href="/conta/login" className="font-bold text-zinc-900 hover:underline">
                            Fazer login &gt;
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
