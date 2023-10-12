import React from "react";
import ProductTable from "./ProductTable";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Container, Typography } from "@mui/material";

const products = [
  {
    productId: 1,
    name: "Sony PlayStation 5 Console",
    description: "Next-gen gaming console with ultra-high-speed SSD",
    price: 499.99
  },
  {
    productId: 2,
    name: "Apple iPhone 13 Pro",
    description: "5G smartphone with A15 Bionic chip and Pro camera system",
    price: 999.99
  },
  {
    productId: 3,
    name: "Dell XPS 13 Laptop",
    description:
      "13.4-inch InfinityEdge display, Intel Core i7, 16GB RAM, 512GB SSD",
    price: 1299.99
  },
  {
    productId: 4,
    name: "Samsung 55-inch QLED 4K TV",
    description: "Smart TV with Quantum Dot technology and Alexa built-in",
    price: 799.99
  },
  {
    productId: 5,
    name: "Bose QuietComfort 35 II Headphones",
    description: "Wireless noise-canceling headphones with Alexa voice control",
    price: 299.99
  },
  {
    productId: 6,
    name: "Nikon D7500 DSLR Camera",
    description: "20.9MP camera with 4K UHD video, 18-140mm lens kit",
    price: 1199.99
  },
  {
    productId: 7,
    name: "Razer BlackWidow Elite Gaming Keyboard",
    description:
      "Mechanical gaming keyboard with customizable Chroma RGB lighting",
    price: 169.99
  },
  {
    productId: 8,
    name: "KitchenAid Artisan Stand Mixer",
    description: "5-quart mixer with tilt-head design, various attachments",
    price: 299.99
  },
  {
    productId: 9,
    name: "Fitbit Versa 3 Smartwatch",
    description:
      "Health and fitness tracking, built-in GPS, heart rate monitor",
    price: 199.99
  },
  {
    productId: 10,
    name: "Samsung Galaxy Tab S7 Tablet",
    description:
      "11-inch AMOLED display, Snapdragon 865+ processor, S Pen included",
    price: 649.99
  }
];
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Product List
        </Typography>
        <ProductTable products={products} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
