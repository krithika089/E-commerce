import React from "react";
import "./MyOrdersPage.css";
import Table from "../Common/Table";


const MyOrdersPage = () => {
    return (
        <section className="align_item orders_page">
            <Table headings={["Order", "Products","Total","Status"]} >
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Iphone 14</td>
                    <td>1200005</td>
                    <td>Paid</td>
                </tr>
            </tbody>
            </Table>
        </section>
    );
}
export default MyOrdersPage;