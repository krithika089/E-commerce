import React from "react";
import './CartPage.css';
import user from "../../assets/user.webp";
import remove from "../../assets/remove.png"
import Table from "../Common/Table";
import QuantityInput from './../SingleProductPage/QuantityInput';

const CartPage = () => {
    return(
        <section className="align_item cart_page">
            <div className="align_item login_details">
                <img src={user} alt="user profile photo" className="user_image" />
                <div className="user_details">
                    <p className="user_name">Harley Quinn </p>
                    <p className="user_emailId">daddysAngel12@gmail.com</p>
                </div>
            </div>
            <Table headings={["Item","Price","Quantity","Total","Remove"]}>
                <tbody>
                    <tr>
                        <td>Iphone 14</td>
                        <td>120000</td>
                        <td className="align_item table_quantity_btn"><QuantityInput /></td>
                        <td>120005</td>
                        <td><img src={remove} alt="Delete it" className="remove_btn"/></td>
                    </tr>
                </tbody>
            </Table>
                <table className="cart_bill">
                    <tbody>
                        <tr>
                            <td>SubTotal</td>
                            <td>120000</td>
                        </tr>
                        <tr>
                            <td>Shipping Charges</td>
                            <td>5</td>
                        </tr>
                        <tr className="cart_bill_final">
                            <td>Final Total</td>
                            <td>120005</td>
                        </tr>
                    </tbody>
                </table>
                <button className="search_button checkout_button">
                    Checkout
                </button>
           
        </section>
    );
}
export default CartPage;