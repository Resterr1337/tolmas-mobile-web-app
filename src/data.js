const some_products = [
	{
		id: 0, // num
		category: "parfume", // str
		subCategory: "forMen", // str
		imageList: [
			"https://i.siteapi.org/TB9xXkMwKXR87q96RmCWUNXcBvo=/fit-in/1024x768/center/top/filters:watermark(afafd8f598c3900.ru.s.siteapi.org/watermark/sntu7x08t8g0gwccs0oc8gk84o8sc0,-1,-1,0,15,none)/afafd8f598c3900.ru.s.siteapi.org/img/196a8297a1a2eaeeeccf7642ab14715209e8154a.jpg",
			"https://i.siteapi.org/EFyj-ANqBR7AXkb15N86Rj2RzN8=/fit-in/330x0/center/top/filters:fill(transparent):format(webp):watermark(afafd8f598c3900.ru.s.siteapi.org/watermark/sntu7x08t8g0gwccs0oc8gk84o8sc0,-1,-1,0,15,none)/afafd8f598c3900.ru.s.siteapi.org/img/bacd8a757301d07c0fdd403c6a8fdbb78775312d.jpg",
			"https://i.siteapi.org/l6Jg592bs-z4x4y7MrzY54NhnAw=/fit-in/330x0/center/top/filters:fill(transparent):format(webp):watermark(afafd8f598c3900.ru.s.siteapi.org/watermark/sntu7x08t8g0gwccs0oc8gk84o8sc0,-1,-1,0,15,none)/afafd8f598c3900.ru.s.siteapi.org/img/9e1bd5a3763a9253d4fc7ed04e552be8b21189a8.jpg",
		], // Array[str]
		name: {
			rus: "Channel #7",
			uzb: "Channel #7",
		}, // str
		descpription: {
			rus: "Представьте себе, что вы стоите на краю бездонного космоса, где звезды светят ярче, чем когда-либо, а галактики вращаются в завораживающем танце. Воздух пропитан ароматом далеких звездных систем и таинственных туманностей. Именно это ощущение невесомости и бесконечности мы хотели передать в наших новых мужских духах.",
			uzb: "Tasavvur qiling, siz cheksiz kosmosning chekkasida turibsiz, yulduzlar hech qachon bo'lmaganidek yorqin porlaydi va galaktikalar maftunkor raqsda aylanib yuradi. Havo uzoq yulduz tizimlari va sirli tumanliklarning hidi bilan to'yingan. Biz aynan shu og'irsizlik va cheksizlik hissiyotini yangi erkaklar atirlarimizda ifoda etishni xohladik.",
		},
		price: 1680000, // int
		discount: "15000", // bool || str
		quantity: 50, // int
		quantityWeekSales: 4, // int || bool
		characteristics: {
			rus: [
				{
					title: "Название", // str
					value: "Космическая Одиссея", // str
				},
				{
					title: "Ароматическая семья",
					value: "Фужерный древесный",
				},
				{
					title: "Интонация",
					value: "Загадочная и мужественная",
				},
				{
					title: "Ассоциации",
					value: "Бесконечность, путешествие, новые горизонты",
				},
				{
					title: "Интенсивность",
					value: "Шлейфовый",
				},
				{
					title: "Время года",
					value: "Осень-зима",
				},
				{
					title: "Стиль",
					value: "Современный, элегантный",
				},
				{
					title: "Стойкость",
					value: "Высокая",
				},
				{
					title: "Возрастная категория",
					value: "30+",
				},
			],
			uzb: [
				{
					title: "Nomi",
					value: "Kosmik Odisseya",
				},
				{
					title: "Xushbo'ylik oilasi",
					value: "Fuzher o'tmishli",
				},
				{
					title: "Ohang",
					value: "Sirli va mardona",
				},
				{
					title: "Assotsiatsiyalar",
					value: "Cheksizlik, sayohat, yangi ufqlar",
				},
				{
					title: "Intensivlik",
					value: "Shleyfli",
				},
				{
					title: "Yil fasli",
					value: "Kuz-qish",
				},
				{
					title: "Uslub",
					value: "Zamonaviy, oqlangan",
				},
				{
					title: "Chidamlilik",
					value: "Yuqori",
				},
				{
					title: "Yosh toifasi",
					value: "30+",
				},
			],
		},
	},
	{
		id: 1, // num
		category: "parfume", // str
		subCategory: "forMen", // str
		imageList: [
			"https://elisium.uz/thumb/2/IoHEZP7-Ax9G9hqERL_0sA/750r750/d/aventus_for_her_perfumed_oil_39862126-bdb7-4775-a881-c04377fb8fcf.jpg",
			"https://elisium.uz/thumb/2/PfvnQ-rKO0aGBBgUEf3PaQ/750r750/d/the_different_company_une_nuit_magnetique_all_night_long_100ml.webp",
		], // Array[str]
		name: {
			rus: "Мужские Духи DC",
			uzb: "DC erkaklar parfyumeriyasi",
		}, // str
		descpription: {
			rus: "Загадочный лес. Мужские духи, окутывающие вас таинственной атмосферой ночного леса. Сочетание древесных нот ветивера и кедра, пряных аккордов кардамона и мужественной амбры создают неповторимый, запоминающийся аромат. Идеальный выбор для уверенного в себе мужчины, который ценит стиль и индивидуальность.",
			uzb: "Sirli o'rmon. Erkaklar uchun atir, sizni tungi o'rmonning sirli atmosferasi bilan o'rab oladi. Vetiver va kedr daraxtlarining yog'ochli notalari, kardamonning achchiq akkordlari va mardona ambra noyob, unutilmas xushbo'ylikni yaratadi. O'ziga ishongan, uslub va individuallikni qadrlaydigan erkak uchun ideal tanlov.",
		},
		price: 100000, // int
		discount: "15%", // bool || str
		quantity: 37, // int
		quantityWeekSales: 56, // int || bool
		characteristics: {
			rus: [
				{
					title: "Название", // str
					value: "Космическая Одиссея", // str
				},
				{
					title: "Ароматическая семья",
					value: "Фужерный древесный",
				},
				{
					title: "Интонация",
					value: "Загадочная и мужественная",
				},
				{
					title: "Ассоциации",
					value: "Бесконечность, путешествие, новые горизонты",
				},
				{
					title: "Интенсивность",
					value: "Шлейфовый",
				},
				{
					title: "Время года",
					value: "Осень-зима",
				},
				{
					title: "Стиль",
					value: "Современный, элегантный",
				},
				{
					title: "Стойкость",
					value: "Высокая",
				},
				{
					title: "Возрастная категория",
					value: "30+",
				},
			],
			uzb: [
				{
					title: "Nomi",
					value: "Kosmik Odisseya",
				},
				{
					title: "Xushbo'ylik oilasi",
					value: "Fuzher o'tmishli",
				},
				{
					title: "Ohang",
					value: "Sirli va mardona",
				},
				{
					title: "Assotsiatsiyalar",
					value: "Cheksizlik, sayohat, yangi ufqlar",
				},
				{
					title: "Intensivlik",
					value: "Shleyfli",
				},
				{
					title: "Yil fasli",
					value: "Kuz-qish",
				},
				{
					title: "Uslub",
					value: "Zamonaviy, oqlangan",
				},
				{
					title: "Chidamlilik",
					value: "Yuqori",
				},
				{
					title: "Yosh toifasi",
					value: "30+",
				},
			],
		},
	},
];

export { some_products };
