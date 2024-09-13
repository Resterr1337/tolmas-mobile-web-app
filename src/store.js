import { create } from "zustand";

const useLanguage = create((set) => ({
	language: "rus",
	changeLanguage: (newLanguage) =>
		set((state) => {
			state.language = newLanguage;
		}),
}));

export { useLanguage };
