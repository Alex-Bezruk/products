import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from "./theme";

interface Product {
  productId: number;
  name: string;
  description: string;
  price: number;
}

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    backgroundColor: theme.palette.grey[100], // Light grey background
    borderRadius: 8,
    boxShadow: `0 4px 8px 0 ${theme.palette.grey[300]}`, // Subtle shadow
    padding: theme.spacing(2)
  },
  tableHead: {
    backgroundColor: theme.palette.primary.main, // Primary color for the header
    color: theme.palette.common.white
  },
  tableHeadCell: {
    fontWeight: "bold"
  },
  tableRow: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.grey[50] // Alternate row background
    },
    "&:hover": {
      backgroundColor: theme.palette.grey[200] // Highlight on hover
    }
  }
}));

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell className={classes.tableHeadCell}>Name</TableCell>
            <TableCell className={classes.tableHeadCell}>Description</TableCell>
            <TableCell className={classes.tableHeadCell}>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.productId} className={classes.tableRow}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductTable;
