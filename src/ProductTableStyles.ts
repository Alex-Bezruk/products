import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    backgroundColor: theme.palette.grey[100], // Light grey background
    borderRadius: 8,
    boxShadow: `0 4px 8px 0 ${theme.palette.grey[300]}` // Subtle shadow
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

export default useStyles;
