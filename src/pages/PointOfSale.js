import react from "react";
import Header from "../components/base/Header";
import Table, { TableBody, TableFooter, TableHeader, TableRow } from "../components/Table";

import ControlButton from "../components/ControlButton";
import "./styles/PointOfSale.css"

const columns =
    ["Product", "Code", "Price", "Quantity", "Amount"];
const footerFields =
    ["Product Quantity", "Discount", "Subtotal", "Grand Total"];


const PointOfSale = () => {

    return (

        <div>
            <Header />

            <div className={"table-container"}>

                <Table>
                    <TableHeader headers={columns} />

                    <TableBody>
                        {/* Example rows*/}
                        <TableRow />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                    </TableBody>

                    <TableFooter fields={footerFields} />
                </Table>
            </div>

        </div>

    )

}

export default PointOfSale;