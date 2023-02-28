import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { Component } from "react";
import Title from "../components/Title";

type AdminPageProps = {};

type AdminPageState = {};

export default class AdminPage extends Component<
  AdminPageProps,
  AdminPageState
> {
  state = {};

  createData(
    itemId: string,
    itemName: string,
    qty: number,
    pricePerItem: number
  ) {
    return { itemId, itemName, qty, pricePerItem };
  }

  render() {
    const rows = [
      this.createData("1", "Nespray", 30, 435),
      this.createData("2", "Nespray", 30, 435),
      this.createData("3", "Nespray", 30, 435),
      this.createData("4", "Nespray", 30, 435),
      this.createData("5", "Nespray", 30, 435),
    ];

    return (
      <div>
        <Title text="Product Management" />
        <div className="mt-4 px-12">
          <div className="bg-white p-6 rounded shadow-xl flex w-full">
            <div className="w-2/3">
              <form action="">
                <span className="grid grid-cols-1 gap-3 w-full">
                  <TextField
                    label="Item Name"
                    variant="outlined"
                    placeholder="Enter Item Name here."
                    name="itemName"
                    required
                  />
                  <TextField
                    label="Item Image Link"
                    variant="outlined"
                    placeholder="Enter Item Image Link here."
                    name="itemImageLink"
                    required
                  />
                  <TextField
                    label="Item Description"
                    variant="outlined"
                    placeholder="Write about item."
                    name="itemDescription"
                    multiline
                    minRows={10}
                    maxRows={Infinity}
                    required
                  />
                </span>
                <span className="grid grid-cols-2 gap-3 mt-3">
                  <TextField
                    label="Item Count"
                    variant="outlined"
                    placeholder="Enter Item count."
                    name="itemCount"
                    required
                  />
                  <TextField
                    label="Price Per Item"
                    variant="outlined"
                    placeholder="Enter Price per item."
                    name="itemImageLink"
                    required
                  />
                </span>
                <div className="flex space-x-2 mt-3">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-green-800 text-white rounded"
                  >
                    <h6 className="font-heading">Save</h6>
                  </button>
                  <button
                    type="button"
                    className="px-6 py-2 bg-orange-400 text-white rounded"
                  >
                    <h6 className="font-heading">Clear</h6>
                  </button>
                </div>
              </form>
            </div>
            <div className="w-1/3 p-4">
              <img
                src="https://shopit.lk/wp-content/uploads/2020/05/Nespray-Full-Cream-Milk-Powder-FortiGrow-%E2%80%93-400g.jpg"
                alt="itemImage"
              />
            </div>
          </div>
          <div className="mt-3">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Item ID</TableCell>
                    <TableCell align="right">Item Name</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Price Per Item (Rs. )</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.itemId}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.itemId}
                      </TableCell>
                      <TableCell align="right">{row.itemName}</TableCell>
                      <TableCell align="right">{row.qty}</TableCell>
                      <TableCell align="right">
                        {row.pricePerItem.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    );
  }
}
