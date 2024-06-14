import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useProduct } from "../../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ title, description, image, price, id }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useProduct();
  return (
    <Card
      sx={{
        height: 650,
        boxShadow: "none",
        margin: "2%",
        width: { md: "30vw", lg: "19vw" },
      }}
    >
      <CardActionArea>
        <CardMedia sx={{ height: 240, borderRadius: 4 }} image={image} />
      </CardActionArea>

      <CardContent sx={{ padding: "20px 5px 0 5px" }} image={image}>
        <Typography variant="h5" fontSize="20" fontWeight={700} component="div">
          {title}
        </Typography>
        <Stack>
          <Rating name="half-rating" defaultValue={0} precision={1} />
        </Stack>
        <Typography color="black" fontSize="24px" fontWeight={800}>
          {price}kgs
        </Typography>
        <Typography color="gray" fontSize="24px" fontWeight={800}>
          {description}
        </Typography>
        <Button
          onClick={() => deleteProduct(id)}
          color="secondary"
          variant="outlined"
          size="medium"
        >
          Delete
        </Button>
        <Button
          onClick={() => navigate(`/editProduct/${id}`)}
          color="primary"
          variant="outlined"
          size="medium"
        >
          Edit
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
