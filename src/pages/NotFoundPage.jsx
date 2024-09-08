import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <Box>
        <Typography fontWeight={700} variant="h1">404 Not Found</Typography>
        <Link to={"/"}>
          <Typography variant="h6">Вернуться на главную страницу</Typography>
        </Link>
      </Box>
    </>
  );
};

export { NotFoundPage };
