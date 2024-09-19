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
	IconButton,
} from "@mui/material";
import { useState } from "react";

import PlusSVG from "@/assets/MyUserInfoPage/plus.svg?react";
import AddressConfigSVG from "@/assets/MyUserInfoPage/addressSettings.svg?react";
import { useAddreses , useLanguage } from "../store";

const AddresesPage = () => {
	const addressArray = useAddreses((state) => state.addressArray);
	const addNewAddress = useAddreses((state) => state.addNewAddress);
	const deleteAddress = useAddreses((state) => state.deleteAddress);
	const [open, setOpen] = useState(false);
	const [deleteDialogStatus, setDeleteDialogStatus] = useState(false);
	const [deleteAddressId, setDeleteAddressId] = useState(null);
	const [newAddress, setNewAddress] = useState("");
	const currentLanguage = useLanguage((state) => state.language)

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleDeleteButton = () => {
		setDeleteDialogStatus(true);
	};

	const handleCloseDialog = () => {
		setDeleteAddressId(null);
		setDeleteDialogStatus(false);
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
					<IconButton>
						<PlusSVG />
					</IconButton>
					<Typography variant="subtitle1">{currentLanguage == "rus"? "Добавить новый" : "Yangisini qo'shing"}</Typography>
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
							<Box sx={{ width: "70%" }}>
								<Typography
									lineHeight={1.125}
									variant="subtitle2"
								>
									{item.value}
								</Typography>
							</Box>
							<IconButton
								onClick={() => {
									handleDeleteButton();
									setDeleteAddressId(item.id);
								}}
							>
								<AddressConfigSVG />
							</IconButton>
						</Box>
					);
				})}
			</Box>
			{/* Диалог добавления адреса */}
			<Dialog
				sx={{ borderRadius: "15px" }}
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
				<DialogTitle variant="h2">{currentLanguage == "rus"? "Добавление нового адреса" : "Yangi manzil qo'shish"}</DialogTitle>
				<DialogContent>
					<DialogContentText>
					{currentLanguage == "rus"? "Введите Адрес , который хотите добавить" : "Qo'shmoqchi bo'lgan manzilni kiriting"}
					</DialogContentText>
					<TextField
						onInput={() => setNewAddress(event.target.value)}
						autoCorrect="false"
						autoComplete="false"
						required
						margin="dense"
						id="name"
						label={currentLanguage == "rus"? "Адрес" : "Manzil"}
						fullWidth
						variant="standard"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>{currentLanguage == "rus"? "Отмена" : "Bekor qilish"}</Button>
					<Button type="submit">{currentLanguage == "rus"? "Добавить" : "Qo'shish"}</Button>
				</DialogActions>
			</Dialog>

			<Dialog
				sx={{ borderRadius: "15px" }}
				open={deleteDialogStatus}
				onClose={handleCloseDialog}
				PaperProps={{
					component: "form",
					onSubmit: (event) => {
						event.preventDefault();
						deleteAddress(deleteAddressId);
						handleCloseDialog();
					},
				}}
			>
				<DialogTitle variant="h2">{currentLanguage == "rus"? "Удалить адрес?" : "Manzilni o'chirasizmi?"}</DialogTitle>
				<DialogContent></DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDialog}>{currentLanguage == "rus"? "Отмена" : "Bekor qilish"}</Button>
					<Button sx={{color:"red"}} type="submit">{currentLanguage == "rus"? "Удалить" : "O'chirish"}</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
export { AddresesPage };
