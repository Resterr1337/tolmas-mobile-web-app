import {
	Box,
	Typography,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
	Button,
} from "@mui/material";
import { useState } from "react";

import PlusSVG from "@/assets/MyUserInfoPage/plus.svg?react";
import AddressConfigSVG from "@/assets/MyUserInfoPage/addressSettings.svg?react";
import { useAddreses } from "../store";

const AddresesPage = () => {
	const addressArray = useAddreses((state) => state.addressArray);
	const addNewAddress = useAddreses((state) => state.addNewAddress);
	const [open, setOpen] = useState(false);
	const [newAddress, setNewAddress] = useState("");

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
				<Box
					onClick={handleClickOpen}
					sx={{
						display: "flex",
						alignItems: "center",
						padding: "20px 10px",
						gap: "10px",
						borderBottom: "solid 1px #8F9098",
					}}
				>
					<PlusSVG />
					<Typography variant="subtitle1">Добавить новый</Typography>
				</Box>
				{addressArray.map((item, index) => {
					return (
						<Box
							key={index}
							sx={{
								width: "100%",
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								background: "#F4F7F9",
								borderRadius: "5px",
								padding: "10px",
							}}
						>
							<Typography
								sx={{ width: "70%" }}
								lineHeight={1.125}
								variant="subtitle2"
							>
								{item.value}
							</Typography>
							<AddressConfigSVG />
						</Box>
					);
				})}
			</Box>
			<Dialog
                sx={{borderRadius:"15px"}}
				open={open}
				onClose={handleClose}
				PaperProps={{
					component: "form",
					onSubmit: (event) => {
						event.preventDefault();
						addNewAddress(newAddress);
						handleClose();
					},
				}}
			>
				<DialogTitle variant="h2">Добавление нового адреса</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Введите Адрес , который хотите добавить
					</DialogContentText>
					<TextField
						onInput={() => setNewAddress(event.target.value)}
						required
						margin="dense"
						id="name"
						label="Адрес"
						fullWidth
						variant="standard"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Отмена</Button>
					<Button type="submit">Добавить</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
export { AddresesPage };
