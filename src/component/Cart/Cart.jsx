import './Cart.css'
const Cart = ({addCard}) => {
    return (
        <div>
            <h3>Card Added: {addCard.length}</h3>
            <div className="addcard_img">
                {
                    addCard.map(card => <img src={card.img}></img>)
                }
            </div>
        </div>
    );
};

export default Cart;