import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const Cart = (props) => {
    const { cart, setCart } = useContext(DataContext);
    console.log(Object.values(cart.items))
    return (
        <div className="idunno">
            {cart && cart.size > 0 ?
                Object.values(cart.items).map((item, i) => {
                    return (
                        <div key={i} className="cart-card flx-c pad8">
                            <div className="ro flx3 flx-r">
                                <div className="col flx2">
                                    <img className="cart-img my-2" src={item.data.img_url} />
                                </div>
                                <div className="col flx3 x-large">
                                    <p className="my-2"><strong>{item.data.name}</strong></p>
                                    <p className="my-0">{item.data.video_game}</p>
                                    <p className="xx-large my-2">${item.data.price}</p>
                                </div>
                            </div>
                            <div className="ro flx2 flx-r pad8 border-top">
                                <div className="col flx-r flx2 just-se">
                                    <div className="inc-dec">
                                        {item.quantity > 1 ? <button className="dark-btn padx0" id="decrement" style={{ width: '50px' }} onClick={() => props.decreaseItem(item.data)}>-</button>
                                            :
                                            <button className="dark-btn padx0" id="decrement" style={{ width: '50px' }} onClick={() => props.deleteItem(item.data)}><FontAwesomeIcon icon={faTrash} style={{ color: "white" }} /></button>}
                                        <p className="num-items center-text large mx-1">{item.quantity}</p>
                                        <button className="dark-btn padx0" id="increment" style={{ width: '50px' }} onClick={() => props.addItem(item.data)}>+</button>
                                    </div>
                                    <button className="red-btn" onClick={() => props.deleteItem(item.data)}>Delete item?</button>
                                </div>
                                <div className="col flx3"></div>
                            </div>
                        </div>
                    )
                }) : <><h3 className="center-text"> No items in cart </h3>
                </>
            }
            {cart.size > 0 ?
            <>
                <button className="yell-btn center" onClick={() => props.clearItems()}>Clear Cart?</button>
                <div className="cart-card pad8 flx-c">
                    <p className="right-text x-large my-0 right"><strong>Subtotal:</strong> ${cart.total}</p>
                    <p className="right-text x-large my-0"><strong>Tax:</strong> +${(cart.total * 0.0825).toFixed(2)}</p>
                    <p className="right-text xx-large my-0"><strong>Total:</strong> ${(cart.total * 1.0825).toFixed(2)}</p>
                </div>
                </> : null}
        </div>
    )
}
export default Cart;