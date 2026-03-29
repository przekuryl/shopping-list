import { useState, useCallback } from 'react';
import { EmojiPicker } from './EmojiPicker';

interface AddProductFormProps {
  onAdd: (name: string, icon?: string) => void;
}

export function AddProductForm({ onAdd }: AddProductFormProps) {
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd(name, icon || undefined);
    setName('');
    setIcon('');
    setShowPicker(false);
  };

  const handleSelectEmoji = useCallback((emoji: string) => {
    setIcon(emoji);
  }, []);

  const handleClosePicker = useCallback(() => {
    setShowPicker(false);
  }, []);

  return (
    <form onSubmit={handleSubmit} className="relative space-y-2">
      <div className="flex gap-2">
        {/* Selected emoji preview / clear */}
        {icon && (
          <button
            type="button"
            onClick={() => setIcon('')}
            title="Remove icon"
            className="flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 text-xl shadow-sm hover:border-danger hover:bg-red-50 dark:hover:bg-red-950/30 transition"
          >
            {icon}
          </button>
        )}

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add a product…"
          className="flex-1 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 py-3 px-4 text-sm shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25 placeholder:text-gray-400 dark:placeholder:text-gray-500"
        />
        <button
          type="button"
          onClick={() => setShowPicker(!showPicker)}
          title="Pick an emoji"
          className={`rounded-xl border bg-white dark:bg-gray-900 px-3 transition shadow-sm ${
            showPicker
              ? 'border-primary text-primary'
              : 'border-gray-200 dark:border-gray-700 text-gray-400 hover:text-primary hover:border-primary'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
          </svg>
        </button>
        <button
          type="submit"
          className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition active:scale-95"
        >
          Add
        </button>
      </div>

      {/* Emoji picker overlay */}
      {showPicker && (
        <EmojiPicker onSelect={handleSelectEmoji} onClose={handleClosePicker} />
      )}
    </form>
  );
}
