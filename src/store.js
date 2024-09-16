import { create } from "zustand";
import { nanoid } from "nanoid"

const useLanguage = create((set) => ({
	language: "rus",
	changeLanguage: (newLanguage) =>
		set((state) => {
			state.language = newLanguage;
		}),
}));

const useCategories = create((set) => ({
	categories: [
		{
			src: "https://aromacode.ru/wa-data/public/photos/61/31/3161/3161.970.jpg",
			title: { rus: "Парфюмерия", uzb: "Parfyumeriya" },
			link: "/subcategory/parfume",
			subCategories: [
				{
					value: "forMen",
					title: {
						rus: "Для мужчин",
						uzb: "Erkak uchun",
					},
					link: "subcategory/for_men",
				},
				{
					value: "forWomen",
					title: {
						rus: "Для женщин",
						uzb: "Ayollar uchun",
					},
					link: "subcategory/for_women",
				},
				{
					value: "floral",
					title: {
						rus: "Цветочные ароматы",
						uzb: "Gullar hidi",
					},
					link: "subcategory/floral",
				},
				{
					value: "fruity",
					title: {
						rus: "Фруктовые ароматы",
						uzb: "Meva hidi",
					},
					link: "subcategory/fruity",
				},
				{
					value: "oriental",
					title: {
						rus: "Восточные ароматы",
						uzb: "Sharqona hidi",
					},
					link: "subcategory/oriental",
				},
				{
					value: "woody",
					title: {
						rus: "Древесные ароматы",
						uzb: "Daraxt hidi",
					},
					link: "subcategory/woody",
				},
				{
					value: "fresh",
					title: {
						rus: "Свежие ароматы",
						uzb: "Toza hidi",
					},
					link: "subcategory/fresh",
				},
			],
		},
		{
			src: "https://img.mercedes-benz-kiev.com/data/main/aksesuari/11.jpeg",
			title: { rus: "Аксессуары", uzb: "Aksessuarlar" },
			link: "/subcategory/accesories",
			subCategories: [
				{
					value: "forMen",
					title: {
						rus: "Для мужчин",
						uzb: "Erkak uchun",
					},
					link: "subcategory/for_men",
				},
				{
					value: "forWomen",
					title: {
						rus: "Для женщин",
						uzb: "Ayollar uchun",
					},
					link: "subcategory/for_women",
				},
				{
					value: "watches",
					title: {
						rus: "Часы",
						uzb: "Soatlar",
					},
					link: "subcategory/watches",
				},
				{
					value: "glasses",
					title: {
						rus: "Очки",
						uzb: "Ko'zoynaklar",
					},
					link: "subcategory/glasses",
				},
				{
					value: "belts",
					title: {
						rus: "Ремни",
						uzb: "Kamonlar",
					},
					link: "subcategory/belts",
				},
				{
					value: "bags",
					title: {
						rus: "Сумки",
						uzb: "Sumkalar",
					},
					link: "subcategory/bags",
				},
				{
					value: "jewelry",
					title: {
						rus: "Ювелирные изделия",
						uzb: "Zargarlik buyumlari",
					},
					link: "subcategory/jewelry",
				},
				{
					value: "headwear",
					title: {
						rus: "Головные уборы",
						uzb: "Bosh kiyimlar",
					},
					link: "subcategory/headwear",
				},
				{
					value: "gadgets",
					title: {
						rus: "Гаджеты и аксессуары для гаджетов",
						uzb: "Gadjetlar va gadjetlar uchun aksessuarlar",
					},
					link: "subcategory/gadgets",
				},
				{
					value: "forHome",
					title: {
						rus: "Аксессуары для дома",
						uzb: "Uy uchun aksessuarlar",
					},
					link: "subcategory/for_home",
				},
			],
		},
	],

	setCategories: (categoriesArray) =>
		set((state) => {
			state.setCategories = categoriesArray;
		}),
}));

const useWishList = create((set, get) => ({
	wishList: [0],
	addToWishList: (id) => {
		const { wishList } = get();
		set({
			wishlist: wishList.push(id),
		});
	},
	removeFromWishList: (id) => {
		const { wishList } = get();
		set({
			wishList: wishList.filter((item) => item !== id),
		});
	},
}));

const useCart = create((set, get) => ({
	cartArray: [],
	addToCart: (productId, quantity) => {
		const { cartArray } = get()
		set({
			cartArray: [...cartArray, {
				productId: productId,
				quantity: quantity,
				id: nanoid(),
			}]
		})
	},
	changeQuantity: (id, number) => {
		const { cartArray: prevArray } = get()
		prevArray.map((item) => {if (item.id == id) {item.quantity = item.quantity + number}})
		set({
			cartArray: [...prevArray]
		})
	},
	deleteFromCart: (id) => {
		const { cartArray } = get()
		set({
			cartArray: cartArray.filter((item) => item.productId !== id)
		})
	},
	deleteAll: () => {
		set({
			cartArray: []
		})
	}
}))

export { useLanguage, useCategories, useWishList, useCart };
