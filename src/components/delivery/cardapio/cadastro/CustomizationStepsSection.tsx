import React from 'react';
import { CustomizationStep, ProductOption } from './types';
import { Plus, Trash2, X } from 'lucide-react';

interface CustomizationStepsSectionProps {
  steps: CustomizationStep[];
  onAddStep: () => void;
  onRemoveStep: (stepId: string) => void;
  onAddOption: (stepId: string) => void;
  onRemoveOption: (stepId: string, optionId: string) => void;
  onOptionChange: (
    stepId: string,
    optionId: string,
    field: keyof ProductOption,
    value: string
  ) => void;
}

export const CustomizationStepsSection: React.FC<
  CustomizationStepsSectionProps
> = ({
  steps,
  onAddStep,
  onRemoveStep,
  onAddOption,
  onRemoveOption,
  onOptionChange,
}) => {
  return (
    <div className="bg-white rounded-3xl p-5 border border-[#ece8e7] shadow-xs flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
            PASSOS & ETAPAS DE ESCOLHA DO CLIENTE
          </span>
          <span className="text-[0.6875rem] text-gray-400 block mt-0.5">
            Configure os passos de customização e opcionais com Título, Descrição e Valor
          </span>
        </div>

        <button
          type="button"
          onClick={onAddStep}
          className="flex items-center gap-1.5 px-4 py-2 bg-[#1e1412] hover:bg-[#2b1f1d] text-white rounded-full text-xs font-bold shadow-xs transition-colors cursor-pointer shrink-0"
        >
          <Plus className="w-3.5 h-3.5" />
          Criar Novo Passo
        </button>
      </div>

      <div className="flex flex-col gap-5 mt-2">
        {steps.map((step) => (
          <div
            key={step.id}
            className="border border-gray-200/80 rounded-2xl p-4 bg-gray-50/30 flex flex-col gap-3"
          >
            {/* Step Header */}
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="bg-amber-100 text-amber-800 text-[0.65rem] font-extrabold px-2 py-0.5 rounded-md uppercase">
                  PASSO {step.stepNumber}
                </span>
                <strong className="text-xs font-extrabold text-[#1e1412]">
                  {step.title}
                </strong>
              </div>

              <button
                type="button"
                onClick={() => onRemoveStep(step.id)}
                className="text-gray-400 hover:text-red-500 p-1 rounded-lg transition-colors cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            {/* Options List */}
            <div className="flex flex-col gap-2.5">
              {step.options.map((opt) => (
                <div
                  key={opt.id}
                  className={`p-3 rounded-xl border flex flex-col sm:flex-row items-stretch sm:items-center gap-3 transition-colors ${
                    opt.isDefault
                      ? 'bg-amber-50/50 border-amber-200'
                      : 'bg-white border-gray-200/80'
                  }`}
                >
                  <div className="flex-1">
                    <label className="text-[0.65rem] font-bold text-gray-400 uppercase block mb-1">
                      TÍTULO DO OPCIONAL {opt.isDefault ? '(PADRÃO)' : ''}
                    </label>
                    <input
                      type="text"
                      value={opt.title}
                      onChange={(e) =>
                        onOptionChange(step.id, opt.id, 'title', e.target.value)
                      }
                      placeholder="Ex: Individual (4 Fatias)"
                      className="w-full px-3 py-1.5 bg-gray-50/50 border border-gray-200 rounded-lg text-xs font-bold text-[#1e1412] focus:border-[#e86a43] focus:outline-none"
                    />
                  </div>

                  <div className="flex-2">
                    <label className="text-[0.65rem] font-bold text-gray-400 uppercase block mb-1">
                      DESCRIÇÃO DO OPCIONAL
                    </label>
                    <input
                      type="text"
                      value={opt.description}
                      onChange={(e) =>
                        onOptionChange(
                          step.id,
                          opt.id,
                          'description',
                          e.target.value
                        )
                      }
                      placeholder="Ex: 20 cm diâmetro"
                      className="w-full px-3 py-1.5 bg-gray-50/50 border border-gray-200 rounded-lg text-xs font-medium text-gray-600 focus:border-[#e86a43] focus:outline-none"
                    />
                  </div>

                  <div className="w-full sm:w-28">
                    <label className="text-[0.65rem] font-bold text-gray-400 uppercase block mb-1">
                      VALOR
                    </label>
                    <input
                      type="text"
                      value={opt.price}
                      onChange={(e) =>
                        onOptionChange(step.id, opt.id, 'price', e.target.value)
                      }
                      placeholder="R$ 0,00"
                      className="w-full px-3 py-1.5 bg-gray-50/50 border border-gray-200 rounded-lg text-xs font-extrabold text-[#1e1412] focus:border-[#e86a43] focus:outline-none"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => onRemoveOption(step.id, opt.id)}
                    className="self-center p-1 text-gray-400 hover:text-red-500 rounded-lg transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Add Option Button */}
            <button
              type="button"
              onClick={() => onAddOption(step.id)}
              className="mt-1 py-2 border-2 border-dashed border-gray-200 rounded-xl text-xs font-bold text-[#e86a43] hover:bg-amber-50/30 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              + Add Opcional em '{step.title.split(' ')[0]}'
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
