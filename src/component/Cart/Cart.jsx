import PropTypes from 'prop-types';
import './Cart.css'
const Cart = ({addCard, handleRemoveCard}) => {
    return (
        <div>
            <h3>Card Added: {addCard.length}</h3>
            <div className="addcard_img">
                {
                    addCard.map(card => <div key={card.id}> 
                    <img  src={card.img}></img>
                    <button onClick={() => handleRemoveCard(card.id)}>Remove</button>
                    </div> )
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