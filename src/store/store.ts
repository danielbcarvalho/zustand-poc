import create from 'zustand';

interface IUser {
  people: string[];
  addPerson: (person: string) => void;
}

export const useStore = create<IUser>((set) => ({
  people: ['John', 'Paul', 'George', 'Ringo'],
  addPerson: (name: string) => set((state) => ({ people: [...state.people, name] })),
}));