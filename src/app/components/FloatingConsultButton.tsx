import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { AIChatDialog } from './AIChatDialog';

export function FloatingConsultButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsDialogOpen(true)}
        className="fixed bottom-8 right-8 bg-[#0066CC] hover:bg-[#0052A3] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-40 group"
        aria-label="在线咨询"
      >
        <MessageCircle size={24} />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#2C2C2C] text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          AI在线咨询
        </span>
      </button>

      <AIChatDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  );
}