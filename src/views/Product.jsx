import { useLocation, useNavigate } from "react-router-dom"
import { DataContext } from "../context/DataProvider";
import { useContext } from "react";


const Product = (props) => {
    const {cart, setCart} = useContext(DataContext);
    
    // const addItem = (item) => {
    //     let cartCopy = {...cart};

    //     cartCopy.size++;
    //     cartCopy.total += (Math.round(item.price*100)/100); 
    //     cartCopy.items[item.tail_id] ?
    //     cartCopy.items[item.tail_id].quantity++ 
    //     :
    //     cartCopy.items[item.tail_id] = {
    //         "data": item,
    //         "quantity": 1
    //     };
    //     console.log(cartCopy)
    //     setCart(cartCopy);
    // }

    const navigate = useNavigate();

    const goBack = () => {
        if (navigate(-1)) {
            navigate(-1)
        } else {
            navigate('/')
        }

    }

    const location = useLocation()
    const { data } = location.state
    const amiibo = data
    // console.log(data)

    return (
        
        <>
            <h1 className="center-text">{amiibo.name}</h1>
            <div className="ind-card flx-c">
                <div className="col flx-r">
                    <div className="pic flx1 softer-gray">
                        
                        <img className="ind-img" src={amiibo.img_url} />
                    </div>
                    <div className="info flx-c flx2">
                        <div className="row flx1 flx-r pad8 just-se">
                            <button className="opa-btn bg-green white-text" id="ind-round" onClick={()=>props.addItem(amiibo)}> Add to Cart </button>
                            <button className="opa-btn" id="ind-round" onClick={goBack}> Go Back </button>
                        </div>
                        <div className="row flx2">
                            <div className="price-box">
                                <p className="xxx-large center-text white m0">${amiibo.price}</p>
                            </div>
                        </div>
                        <div className="row flx1 pad8">
                            <p className="m0 mx-5"><strong>Video Game:</strong> {amiibo.video_game}</p>
                            <p className="m0 mx-5"><strong>Game Series:</strong> {amiibo.game_series} </p>
                        </div>
                        <div className="row flx1 pad8">
                            <p className="m0 mx-5"><strong>Release: </strong>{amiibo.release} </p>
                            <p className="m0">  </p>
                        </div>
                    </div>
                </div>
                <div className="col pad8">
                    <strong>Description: </strong><br />
                    {amiibo.description}
                </div>
            </div>
        </>
    )
}
export default Product