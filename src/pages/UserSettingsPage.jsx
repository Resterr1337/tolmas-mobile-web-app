import { Box, Typography, Input, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useUser } from "../store";
import { useState } from "react";
import dayjs from "dayjs";

const UserSettingsPage = () => {
	const userSettings = useUser((state) => state.userSettings);
	const changeField = useUser((state) => state.changeField);
	const [gender, setGender] = useState(userSettings.gender);
	const [email, setEmail] = useState(userSettings.eMail);
	const [region, setRegion] = useState(userSettings.region);
	const [name, setName] = useState(userSettings.name);
	const [surName, setSurName] = useState(userSettings.surName);
	const [dateOfBirth, setDateOfBirth] = useState(userSettings.dateOfBirth || '');

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				input: {
					fontSize: "1rem",
					fontWeight: "600",
				},
			}}
		>
			{/* Аватарка */}
			<Box
				sx={{
					width: "115px",
					height: "115px",
					my: "20px",
					borderRadius: "100%",
					background: "gray",
					backgroundPosition: "50% 50%",
					backgroundRepeat: "no-repeat",
					bavckgroundSize: "cover",
				}}
			></Box>

			{/* Выбор пола */}
			<Box
				sx={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					gap: "10px",
					my: "5px",
				}}
			>
				<Typography variant="h2">Выберите пол</Typography>
				<Box
					sx={{
						width: "100%",
						height: "40px",
						background: "#F4F7F9",
						borderRadius: "16px",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						padding: "4px 10px",
					}}
				>
					<Typography
						onClick={() => {
							changeField("gender", "male");
							setGender("male");
						}}
						sx={{
							cursor: "pointer",
							padding: "8px 0px",
							width: "45%",
							textAlign: "center",
							background: gender == "male" ? "white" : "none",
							borderRadius: "16px",
							transition: "all 300ms",
						}}
						variant="h3"
					>
						Мужской
					</Typography>
					<Typography variant="h3">|</Typography>
					<Typography
						onClick={() => {
							changeField("gender", "female");
							setGender("female");
						}}
						sx={{
							cursor: "pointer",
							padding: "8px 0px",
							width: "45%",
							textAlign: "center",
							background: gender == "female" ? "white" : "none",
							borderRadius: "16px",
							transition: "all 300ms",
						}}
						variant="h3"
					>
						Женский
					</Typography>
				</Box>
			</Box>

			{/* Имя фамилия */}
			<Box
				sx={{
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					my: "5px",
					input: {
						padding: "10px 10px",
					},
				}}
			>
				<Box
					sx={{
						width: "49%",
						display: "flex",
						flexDirection: "column",
						gap: "10px",
					}}
				>
					<Typography variant="h2">Имя</Typography>
					<TextField
						onInput={() => {
							setName(event.target.value);
							changeField("name", event.target.value);
						}}
						value={name}
						placeholder="Имя"
						variant="outlined"
					></TextField>
				</Box>
				<Box
					sx={{
						width: "49%",
						display: "flex",
						flexDirection: "column",
						gap: "10px",
					}}
				>
					<Typography variant="h2">Фамилия</Typography>
					<TextField
						onInput={() => {
							setSurName(event.target.value);
							changeField("surName", event.target.value);
						}}
						value={surName}
						placeholder="Фамилия"
						variant="outlined"
					></TextField>
				</Box>
			</Box>

			{/* Дата рожденья */}
			<Box
				sx={{
					width: "100%",
					display: "flex",
					alignItems: "start",
					flexDirection: "column",
					gap: "10px",
					my: "5px",
					input: {
						padding: "10px 10px",
					},
				}}
			>
				<Typography variant="h2">Дата рожденья</Typography>
				<DatePicker
					disableFuture
					onChange={() => {
						setDateOfBirth(dayjs(event.target.value).format("DD/MM/YYYY"))
						changeField(
							"dateOfBirth",
							dayjs(event.target.value).format("DD/MM/YYYY")
						);
					}}
					defaultValue={ dayjs(dateOfBirth, "MM/DD/YYYY")}

					sx={{ width: "100%" }}
					placeholder="Дата рожденья"
				/>
			</Box>

			{/* Email */}
			<Box
				sx={{
					width: "100%",
					display: "flex",
					alignItems: "start",
					flexDirection: "column",
					gap: "10px",
					my: "5px",
					input: {
						padding: "10px 10px",
					},
				}}
			>
				<Typography variant="h2">E-mail</Typography>
				<TextField
					onInput={() => {
						changeField("eMail", event.target.value);
						setEmail(event.target.value);
					}}
					value={email}
					fullWidth
					variant="outlined"
					type="mail"
					placeholder="example@mail.com"
				></TextField>
			</Box>

			{/* Регион*/}
			<Box
				sx={{
					width: "100%",
					display: "flex",
					alignItems: "start",
					flexDirection: "column",
					gap: "10px",
					my: "5px",
					input: {
						padding: "10px 10px",
					},
				}}
			>
				<Typography variant="h2">Регион</Typography>
				<TextField
					fullWidth
					onInput={() => {
						setRegion(event.target.value);
						changeField("region", event.target.value);
					}}
					value={region}
					variant="outlined"
					placeholder="Регион"
				></TextField>
			</Box>

			{/* Дата Регистрации*/}
			<Box
				sx={{
					width: "100%",
					display: "flex",
					alignItems: "start",
					flexDirection: "column",
					gap: "10px",
					my: "5px",
					input: {
						padding: "10px 10px",
					},
				}}
			>
				<Typography variant="h2">Дата регистрации</Typography>
				<TextField
					fullWidth
					readonly
					variant="outlined"
					value={userSettings.dateOfRegistration}
				></TextField>
			</Box>
		</Box>
	);
};

export { UserSettingsPage };
