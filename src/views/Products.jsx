import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { DataContext } from "../context/DataProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";


const Products = (props) => {
    const {cart, setCart} = useContext(DataContext);

    // const addItem = (item) => {
    //     let cartCopy = {...cart}
    //     cartCopy.size++;
    //     cartCopy.total += (Math.round(item.price*100)/100);
    //     cartCopy.items[item.tail_id] ?
    //     cartCopy.items[item.tail_id].quantity++ 
    //     :
    //     cartCopy.items[item.tail_id] = {"data": item, "quantity": 1}
    //     setCart(cartCopy)
    // }
    
    const navigate = useNavigate();

    const getData = async () => {
        let response = await axios.get("http://localhost:5000/api/amiibos")
        return response.status === 200 ? response.data : null
    }
    const loadData = async () => {
        let data = await getData();
        data = data.amiibo_set
        setItems(data);
        console.log(data);
    }
    // when everything's done - THEN run the callback
    const [items, setItems] = useState(() => loadData())
    useEffect(() => { console.log("PRODUCTS state change") }, [])

    

    const getAmiibo = (amiibo) => {
        props.setAmiibo(amiibo);
        console.log(amiibo);
        navigate('/product')
    }

    return (
        <>
            <div className="page-contain pad28 flx-r just-se" style={{ flexWrap: "wrap" }}>
                {items && items.length ? items.map((k, i) => {
                    return <div key={i} className="product-card">
                        <div className="img-column softer-gray">
                            <Link to="/product" state={{data: k}}><img className="product-img" src={k.img_url} /></Link>
                        </div>
                        <div className="column"><Link className="product-title center" to="/product" state={{data: k}}><strong> {k.name} </strong></Link></div>
                        <div className="info-col"> <strong>Video Game:</strong> {k.video_game} </div>
                        <div className="info-col mb-0"> <strong>Release:</strong> {k.release} </div>
                        <div className="info-col mb-10 x-large"> ${k.price}
                        </div>
                        <div className="last-col">
                            <button className="bg-green white-text m-2" id="round" onClick={()=>props.addItem(k)}> Add to Cart </button>
                            <Link to="/product" state={{data: k}}><button className="bg-gains m-2 mb-3" id="round"> View item </button></Link>
                        </div>
                    </div>
                }) : <><h2><FontAwesomeIcon icon={faSpinner} spin />&nbsp;&nbsp;Page is loading...</h2></>
                }
            </div>
            
        </>
    )
}
export default Products