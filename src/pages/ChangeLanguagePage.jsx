import { Box, Typography, Checkbox } from "@mui/material";
import { useLanguage } from "../store";

const ChangeLanguagePage = () => {
	const currentLanguage = useLanguage((state) => state.language);
    const setLanguage = useLanguage((state) => state.changeLanguage)
	const languageArray = useLanguage((state) => state.languageArray);

	return (
		<Box sx={{ display: "flex", flexDirection: "column" }}>
			{languageArray.map((item, index) => {
				return (
					<label key={index} htmlFor={item.value} onClick={() => setLanguage(item.value)}>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								padding: "10px",
								borderBottom: "solid 1px #E1E1E1",
							}}
						>
							<Typography variant="subtitle2">{item.title}</Typography>
							<Checkbox
								checked={
									currentLanguage == item.value ? true : false
								}
								id={item.value}
								sx={{
									color: "#D9D9D9",
									"&.Mui-checked": {
										color: "#2588FF",
									},
								}}
							></Checkbox>
						</Box>
					</label>
				);
			})}
		</Box>
	);
};

export { ChangeLanguagePage };
