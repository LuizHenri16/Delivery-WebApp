'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X, CheckCircle2 } from 'lucide-react';
import { PhotoUploadSection } from '@/src/components/delivery/cardapio/cadastro/PhotoUploadSection';
import { ChannelsSection } from '@/src/components/delivery/cardapio/cadastro/ChannelsSection';
import { MainInfoSection } from '@/src/components/delivery/cardapio/cadastro/MainInfoSection';
import { PricingSection } from '@/src/components/delivery/cardapio/cadastro/PricingSection';
import { CustomizationStepsSection } from '@/src/components/delivery/cardapio/cadastro/CustomizationStepsSection';
import {
    INITIAL_PRODUCT_FORM_DATA,
    ProductFormData,
    ProductOption,
} from '@/src/components/delivery/cardapio/cadastro/types';

export default function CadastrarProdutoPage() {
    const router = useRouter();
    const [formData, setFormData] = useState<ProductFormData>(
        INITIAL_PRODUCT_FORM_DATA
    );

    const handleFieldChange = (field: string, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleFileSelect = (file: File | null) => {
        setFormData((prev) => ({ ...prev, imageFile: file }));
    };

    // Step Management
    const handleAddStep = () => {
        setFormData((prev) => {
            const newStepNumber = prev.customizationSteps.length + 1;
            return {
                ...prev,
                customizationSteps: [
                    ...prev.customizationSteps,
                    {
                        id: `step-${Date.now()}`,
                        stepNumber: newStepNumber,
                        title: `Novo Passo ${newStepNumber}`,
                        options: [
                            {
                                id: `opt-${Date.now()}-1`,
                                title: 'Opção 1',
                                description: 'Descrição da opção',
                                price: 'R$ 0,00',
                            },
                        ],
                    },
                ],
            };
        });
    };

    const handleRemoveStep = (stepId: string) => {
        setFormData((prev) => ({
            ...prev,
            customizationSteps: prev.customizationSteps.filter(
                (step) => step.id !== stepId
            ),
        }));
    };

    const handleAddOption = (stepId: string) => {
        setFormData((prev) => ({
            ...prev,
            customizationSteps: prev.customizationSteps.map((step) => {
                if (step.id !== stepId) return step;
                return {
                    ...step,
                    options: [
                        ...step.options,
                        {
                            id: `opt-${Date.now()}`,
                            title: '',
                            description: '',
                            price: 'R$ 0,00',
                        },
                    ],
                };
            }),
        }));
    };

    const handleRemoveOption = (stepId: string, optionId: string) => {
        setFormData((prev) => ({
            ...prev,
            customizationSteps: prev.customizationSteps.map((step) => {
                if (step.id !== stepId) return step;
                return {
                    ...step,
                    options: step.options.filter((opt) => opt.id !== optionId),
                };
            }),
        }));
    };

    const handleOptionChange = (
        stepId: string,
        optionId: string,
        field: keyof ProductOption,
        value: string
    ) => {
        setFormData((prev) => ({
            ...prev,
            customizationSteps: prev.customizationSteps.map((step) => {
                if (step.id !== stepId) return step;
                return {
                    ...step,
                    options: step.options.map((opt) => {
                        if (opt.id !== optionId) return opt;
                        return { ...opt, [field]: value };
                    }),
                };
            }),
        }));
    };

    // Form Submission Ready for API
    const handleSubmit = (status: 'draft' | 'published') => (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            ...formData,
            status,
        };

        console.log('--- FORMULARIO PRONTO PARA ENVIO A API ---');
        console.log(JSON.stringify(payload, null, 2));

        alert(
            `Produto ${status === 'published' ? 'Publicado' : 'Salvo como Rascunho'
            } com sucesso! (Verifique o console)`
        );

        router.push('/delivery/cardapio');
    };

    return (
        <div className="w-full min-h-screen bg-white/90 px-6 sm:px-10 py-8 flex flex-col">
            <form
                onSubmit={handleSubmit('published')}
                className="w-full flex-1 p-6 sm:p-8 flex flex-col justify-between gap-6"
            >
                {/* Modal / Page Header */}
                <div className="flex items-start justify-between border-b border-gray-100 pb-5">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-black text-[#1e1412] tracking-tight">
                            Cadastrar Novo Prato
                        </h1>
                        <p className="text-xs text-gray-400 font-medium mt-1">
                            Preencha as informações para disponibilizar o item no cardápio web e PDV balcão
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={() => router.push('/delivery/cardapio')}
                        className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Form Body - 2 Columns Responsive Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 items-start flex-1">
                    {/* Left Column */}
                    <div className="flex flex-col gap-6">
                        <PhotoUploadSection
                            imageFile={formData.imageFile}
                            onFileSelect={handleFileSelect}
                        />

                        <ChannelsSection
                            isOnlineDelivery={formData.isOnlineDelivery}
                            isPdvBalcao={formData.isPdvBalcao}
                            isHighlight={formData.isHighlight}
                            cookingTime={formData.cookingTime}
                            onChange={handleFieldChange}
                        />
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-6 min-w-0">
                        <MainInfoSection
                            name={formData.name}
                            sku={formData.sku}
                            category={formData.category}
                            productionSector={formData.productionSector}
                            description={formData.description}
                            onChange={handleFieldChange}
                        />

                        <PricingSection
                            counterPrice={formData.counterPrice}
                            deliveryPrice={formData.deliveryPrice}
                            costPrice={formData.costPrice}
                            onChange={handleFieldChange}
                        />

                        <CustomizationStepsSection
                            steps={formData.customizationSteps}
                            onAddStep={handleAddStep}
                            onRemoveStep={handleRemoveStep}
                            onAddOption={handleAddOption}
                            onRemoveOption={handleRemoveOption}
                            onOptionChange={handleOptionChange}
                        />
                    </div>
                </div>

                {/* Form Footer Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100 mt-2">
                    <button
                        type="button"
                        onClick={() => router.push('/delivery/cardapio')}
                        className="text-xs font-bold text-gray-400 hover:text-gray-600 transition-colors cursor-pointer order-2 sm:order-1"
                    >
                        Cancelar / Descartar
                    </button>

                    <div className="flex items-center gap-3 w-full sm:w-auto order-1 sm:order-2">
                        <button
                            type="button"
                            onClick={handleSubmit('draft')}
                            className="flex-1 sm:flex-none px-6 py-3 bg-white border border-[#ece8e7] hover:bg-gray-50 text-[#1e1412] text-xs font-bold rounded-full transition-colors cursor-pointer shadow-xs"
                        >
                            Salvar como Rascunho
                        </button>

                        <button
                            type="submit"
                            className="flex-1 sm:flex-none px-7 py-3 bg-[#e86a43] hover:bg-[#d65730] text-white text-xs font-bold rounded-full transition-colors cursor-pointer shadow-md flex items-center justify-center gap-2"
                        >
                            <CheckCircle2 className="w-4 h-4" />
                            Salvar e Publicar no Cardápio
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

