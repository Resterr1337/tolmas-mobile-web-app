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
import { useAddreses } from "../store";

const AddresesPage = () => {
	const addressArray = useAddreses((state) => state.addressArray);
	const addNewAddress = useAddreses((state) => state.addNewAddress);
	const deleteAddress = useAddreses((state) => state.deleteAddress);
	const [open, setOpen] = useState(false);
	const [deleteDialogStatus, setDeleteDialogStatus] = useState(false);
	const [deleteAddressId, setDeleteAddressId] = useState(null);
	const [newAddress, setNewAddress] = useState("");

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
        setDeleteAddressId(null)
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

			<Dialog
				sx={{ borderRadius: "15px" }}
				open={deleteDialogStatus}
				onClose={handleCloseDialog}
				PaperProps={{
					component: "form",
					onSubmit: (event) => {
						event.preventDefault();
						deleteAddress(deleteAddressId);
                        console.log(addressArray)
						handleCloseDialog();
					},
				}}
			>
				<DialogTitle variant="h2">Удалить адрес?</DialogTitle>
				<DialogContent></DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDialog}>Отмена</Button>
					<Button type="submit">Удалить</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
export { AddresesPage };
