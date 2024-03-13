import PropTypes from 'prop-types';
import './Cart.css'
const Cart = ({addCard, handleRemoveCard}) => {
    return (
        <div>
            <h3>Card Added: {addCard.length}</h3>
            <div className="addcard_img">
                {
                    addCard.map(card => <img key={card.id} src={card.img}></img>)
                }
            </div>
        </div>
    );
};

Cart.propTypes ={
    addCard : PropTypes.array.isRequired,
    handleRemoveCard: PropTypes.func.isRequired
}

export default Cart;