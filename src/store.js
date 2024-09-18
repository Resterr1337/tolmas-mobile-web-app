import { create } from "zustand";
import { nanoid } from "nanoid";

const useLanguage = create((set) => ({
	language: "rus",
	languageArray: [
		{
			title: "Русский",
			value: "rus",
		},
		{
			title: "O'zbekcha",
			value: "uzb",
		},
	],
	changeLanguage: (newLanguage) =>
		set({
			language: newLanguage,
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
	wishList: [],
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
		const { cartArray } = get();
		set({
			cartArray: [
				...cartArray,
				{
					productId: productId,
					quantity: quantity,
					id: nanoid(),
				},
			],
		});
	},
	changeQuantity: (id, number) => {
		const { cartArray: prevArray } = get();
		prevArray.map((item) => {
			if (item.id == id) {
				item.quantity = item.quantity + number;
			}
		});
		set({
			cartArray: [...prevArray],
		});
	},
	deleteFromCart: (id) => {
		const { cartArray } = get();
		set({
			cartArray: cartArray.filter((item) => item.id !== id),
		});
	},
	deleteAll: () => {
		set({
			cartArray: [],
		});
	},
}));

const useAddreses = create((set, get) => ({
	addressArray: [
		{
			id: nanoid(),
			value: "Строительный магазин, Буйук Ипак Йули, город Самарканд, Самаркадская область, 140000, Узбекистан",
		},
	],
	addNewAddress: (newAddress) => {
		const { addressArray: prevAddressArray } = get();
		set({
			addressArray: [
				...prevAddressArray,
				{
					id: nanoid(),
					value: newAddress,
				},
			],
		});
	},
	deleteAddress: (id) => {
		const { addressArray: prevAddressArray } = get();
		set({
			addressArray: prevAddressArray.filter((item) => item.id !== id),
		});
	},
}));

const useUser = create((set, get) => ({
	userSettings: {
		userAvatarSrc: "", // str
		gender: "", // male || female
		name: "Имя", // str
		surName: "Фамилия", // str
		dateOfBirth: "", // str,
		eMail: "", // str,
		region: "", // str,
		dateOfRegistration: "29.01.2024", // str
	},

	changeField: (field, value) => {
		const { userSettings } = get();
		userSettings[field] = value;
		set({
			userSettings: userSettings,
		});
	},
}));

const useDeliveryWay = create((set, get) => ({
	deliveryWayArray: [
		{
			title: {
				rus: "Самовывоз",
				uzb: "Olib ketish",
			},
			value: "pickup",
		},
		{
			title: {
				rus: "Доставка",
				uzb: "Yetkazib berish",
			},
			value: "delivery",
		},
	],
	activeDeliveryWay: "delivery",
	changeActiveDeliveryWay: (newValue) => {
		const { deliveryWayArray } = get();
		set({
			deliveryWayArray: deliveryWayArray,
			activeDeliveryWay: newValue,
		});
	},
}));

const useOrders = create((set, get) => ({
	ordersArray: [
		{
			id: nanoid(10),
			status: "В ожидании",
			deliveryWay: "",
			createOrderTime: "dd/mm/yyyy, hh:mm",
			deliveryOrderTime: "dd/mm/yyyy, hh:mm",
			deliveryAddress: "Uzbekistan, Samarkandm Buyuk Ipak Yuli",
			totalCost: 1808800,
			totalCostWithDiscount: 18920800,
			products: [
				{
					productId: 0,
					quantity: 1,
					discount: "15%", // str||bool
				},
			],
		},
		{
			id: 1,
			status: "Можно забирать",
			deliveryWay: "",
			createOrderTime: "dd/mm/yyyy, hh:mm",
			deliveryOrderTime: "dd/mm/yyyy, hh:mm",
			deliveryAddress: "Uzbekistan, Samarkandm Buyuk Ipak Yuli",
			isDiscount: true,
			totalCost: 2000000,
			totalCostWithDiscount: 1800000,
			products: [
				{
					productId: 0,
					quantity: 1,
					discount: "15%", // str||bool
				},
			],
		},
		{
			id: nanoid(10),
			status: "Готов, в пути",
			deliveryWay: "",
			createOrderTime: "dd/mm/yyyy, hh:mm",
			deliveryOrderTime: "dd/mm/yyyy, hh:mm",
			deliveryAddress: "Uzbekistan, Samarkandm Buyuk Ipak Yuli",
			totalCost: 1808800,
			totalCostWithDiscount: 18920800,
			products: [
				{
					productId: 0,
					quantity: 1,
					discount: "15%", // str||bool
				},
			],
		},
	],

	createOrder: (newOrder) => {
		const { ordersArray } = get();
		set({
			ordersArray: [...ordersArray, newOrder],
		});
	},
}));

export {
	useLanguage,
	useCategories,
	useWishList,
	useCart,
	useAddreses,
	useUser,
	useDeliveryWay,
	useOrders,
};
