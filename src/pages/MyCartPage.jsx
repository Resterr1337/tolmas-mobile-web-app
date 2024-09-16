import { Box, Checkbox, Typography, Button, FormControlLabel, ButtonGroup } from "@mui/material";
import { useState } from "react";

import DeleteSVG from "@/assets/Cart/delete.svg?react"
import IncrementSVG from "@/assets/Cart/next.svg?react"
import DecrementSVG from "@/assets/Cart/prev.svg?react"

import { useCart, useLanguage } from "../store";
import { some_products } from "../data"
import { nanoid } from "nanoid"
import { formatPrice } from "../utils/priceFormatter";

const MyCartPage = () => {
	const cartArray = useCart((state) => state.cartArray)
	const changeQuantity = useCart((state) => state.changeQuantity)
	const currentLanguage = useLanguage((state) => state.language)
	const [totalCost, setTotalCost ] = useState(0)


	return <>
		<Box
			sx={{
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				borderBottom: "#797979 solid 0.5px",
				py: "4px"
			}}
		>
			<Box
				sx={{ fontSize: "1rem", fontWeight: "400", display: "flex", alignItems: "center" }}
			>
				<Checkbox />
				<Typography >Выбрать всё</Typography>
			</Box>

			<Button sx={{
				borderColor: "black",
				textTransform: "capitalize"
			}}
				startIcon={<DeleteSVG />} size={"small"} variant="outlined">Удалить</Button>
		</Box>

		<Box
			sx={{
				display: "flex",
				flexDirection: 'column',
				gap: "2px"
			}}
		>
			{cartArray.length == 0 ?
				<Typography sx={{ my: "5px" }} variant="subtitle1">Ваша корзина пуста</Typography>
				:
				cartArray.map((item) => {
					const productInfo = some_products.find((product) => product.id == item.productId)

					return <Box key={nanoid()} sx={{
						borderBottom: "solid 1px #1F2024",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						gap: "5px",
						py: "10px"
					}}>
						<Checkbox></Checkbox>
						<Box
							sx={{
								display: "flex",
								width: "95%",
								justifyContent: "space-between"
							}}
						>
							<Box
								sx={{ display: "flex", gap: "10px" }}
							>
								<Box
									sx={{
										height: "85px",
										width: "85px",
										backgroundImage: `url("${productInfo.imageList[0]}")`,
										backgroundPosition: "50% 50%",
										backgroundRepeat: "no=repeat",
										backgroundSize: "cover",
										borderRadius: "10px"
									}
									}
								></Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-between"
									}}
								>
									<Typography variant="subtitle1">{productInfo.name[currentLanguage]}</Typography>
									<Typography variant="h3">{formatPrice(productInfo.price * item.quantity)} UZS</Typography>
									{/* Счётчик */}
									<Box
										sx={{ display: "flex", height: "30px", width: "60px", alignItems: "center", justifyContent: "space-between", border: "0.637px solid #677697", borderRadius: "3px" }}
									>
										{/* Сделать так чтобы Quantity не выходил за свои пределы */}
										<button
											onClick={() => { changeQuantity(item.id, -1) }}
											style={{
												height: "100%",
												padding: "0px",
												border: "none",
												outline: "none",
												background: "none",
												display: 'flex',
												alignItems: "center"
											}}><DecrementSVG /></button>
										<Typography variant="subtitle1">{item.quantity}</Typography>
										<button
											onClick={() => { changeQuantity(item.id, +1) }}
											style={{
												height: "100%",
												padding: "0px",
												border: "none",
												outline: "none",
												background: "none",
												display: 'flex',
												alignItems: "center"
											}}><IncrementSVG /></button>
									</Box>
								</Box>
							</Box>
							<Box
								sx={{ display: "flex", alignItems: "end" }}
							>
								<Button sx={{ borderColor: "black", textTransform: "capitalize", display: "flex", alignItems: "center" }} startIcon={<DeleteSVG />} size={"small"} variant="outlined">Удалить</Button>
							</Box>
						</Box>
					</Box>
				})
			}

		</Box>

		{/* #Сделать подсчёт общей суммы */}
		<Box sx={{height: "60px", width: "100vw" , display: "flex", alignItems: "center", justifyContent:"space-between", padding: "0px 10px", position: "fixed", bottom: "60px", left: "0px"}}>
			<Box
				sx={{display:"flex", flexDirection:"column", justifyContent:"space-between"}}
			>
				<Typography variant="h3">0 UZS</Typography>
				<Typography variant="subtitle2">Всего</Typography>
			</Box>
			<Box sx={{background:"#677697", borderRadius:"5px", padding:"20px"}}>
				<Typography color="white" variant='h3'>Продолжить</Typography>
			</Box>
		</Box>
	</>;
};

export { MyCartPage };
