import { create } from "zustand";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  license: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

export const useCart = create<CartState>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      // avoid duplicates: replace if same id + license
      const exists = state.items.find(
        (i) => i.id === item.id && i.license === item.license
      );
      if (exists) return state;
      return { items: [...state.items, item] };
    }),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),
  clearCart: () => set({ items: [] }),
}));
