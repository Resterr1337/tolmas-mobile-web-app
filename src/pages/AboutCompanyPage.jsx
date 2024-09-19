import { Box, Typography } from "@mui/material";
import { useLanguage } from "@/store.js";

const AboutCompanyPage = () => {
	const currentLanguage = useLanguage((state) => state.language);

	return (
		<>
			<Box
				sx={{
					width: "100%",
					height: "250px",
					borderRadius: "10px",
					backgroundImage: `url("/assets/AboutUsPage/image.png")`,
					backgroundPosition: "50% 50%",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					my: "10px",
				}}
			></Box>
			<Typography variant="h2">Tolmas market</Typography>
			<Typography lineHeight={"normal"} variant="subtitle1">
				{currentLanguage == "rus"
					? "Кстати, диаграммы связей, вне зависимости от их уровня, должны быть обнародованы. Таким образом, высокотехнологичная концепция общественного уклада однозначно фиксирует необходимость анализа существующих паттернов поведения. Как уже неоднократно упомянуто, стремящиеся вытеснить традиционное производство, нанотехнологии функционально разнесены на независимые элементы. С другой стороны, новая модель организационной деятельности, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для как самодостаточных, так и внешне зависимых концептуальных решений. В своём стремлении улучшить пользовательский опыт мы упускаем, что элементы политического процесса формируют глобальную экономическую сеть и при этом — ограничены исключительно образом мышления. Разнообразный и богатый опыт говорит нам, что существующая теория создаёт предпосылки."
					: " Aytgancha, ulanish diagrammalari, ularning darajasidan qat'i nazar, ommaga e'lon qilinishi kerak. Shunday qilib, ijtimoiy tuzumning yuqori texnologiyali kontseptsiyasi mavjud xatti-harakatlarni tahlil qilish zarurligini aniq belgilab beradi. Bir necha bor aytib o'tilganidek, an'anaviy ishlab chiqarishni almashtirishga intilayotgan nanotexnologiya funktsional jihatdan mustaqil elementlarga ajratilgan. Boshqa tomondan, tashkiliy faoliyatning yangi modeli, shuningdek, tanish narsalarga yangicha qarash, albatta, o'zini o'zi ta'minlaydigan va tashqi qaram kontseptual echimlar uchun yangi ufqlarni ochadi. Foydalanuvchi tajribasini yaxshilash uchun biz siyosiy jarayonning elementlari global iqtisodiy tarmoqni shakllantirishini va shu bilan birga faqat fikrlash tarzi bilan cheklanishini sog'inamiz. Turli xil va boy tajribalar bizga mavjud nazariya old shartlarni yaratishini aytadi."}
			</Typography>
		</>
	);
};

export { AboutCompanyPage };
