import React, { useRef } from 'react';
import { ImagePlus, Upload, FileImage } from 'lucide-react';

interface PhotoUploadSectionProps {
  imageFile?: File | null;
  onFileSelect: (file: File | null) => void;
}

export const PhotoUploadSection: React.FC<PhotoUploadSectionProps> = ({
  imageFile,
  onFileSelect,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelect(e.target.files[0]);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-5 border border-[#ece8e7] shadow-xs flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
          FOTO DO PRATO
        </span>
        <span className="text-[0.7rem] font-bold text-coral bg-coral-pale px-2.5 py-0.5 rounded-full">
          Recomendado 1:1
        </span>
      </div>

      <div
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-2 cursor-pointer hover:border-coral transition-colors bg-gray-50/50 hover:bg-gray-50/80"
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
        />

        <div className="w-12 h-12 rounded-2xl bg-amber-100/80 text-amber-600 flex items-center justify-center">
          <ImagePlus className="w-6 h-6" />
        </div>

        <div>
          <strong className="text-xs font-bold text-[#1e1412] block">
            Clique para enviar ou arraste a imagem
          </strong>
          <span className="text-[0.6875rem] text-gray-400 block mt-0.5">
            JPG, PNG ou WebP até 5MB.
          </span>
          <span className="text-[0.6875rem] text-gray-400 block">
            Dimensão sugerida: 800x800px
          </span>
        </div>

        <button
          type="button"
          className="mt-2 flex items-center gap-2 px-4 py-2 bg-[#1e1412] text-white rounded-full text-xs font-bold shadow-xs hover:bg-[#2b1f1d] transition-colors"
        >
          <Upload className="w-3.5 h-3.5" />
          Carregar Foto
        </button>
      </div>

      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
        <div className="w-9 h-9 rounded-lg bg-gray-200 text-gray-400 flex items-center justify-center shrink-0">
          <FileImage className="w-4 h-4" />
        </div>
        <div className="min-w-0">
          <span className="text-xs font-bold text-[#1e1412] block truncate">
            {imageFile ? imageFile.name : 'Nenhuma imagem carregada'}
          </span>
          <span className="text-[0.6875rem] text-gray-400 block">
            {imageFile
              ? `${(imageFile.size / 1024).toFixed(0)} KB`
              : 'Será exibido o ícone padrão no cardápio'}
          </span>
        </div>
      </div>
    </div>
  );
};
