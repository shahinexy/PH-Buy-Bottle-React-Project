import './bottle.css'
import PropTypes from 'prop-types';

const Bottle = ({bottle, handleAddCard}) => {
    const {name, img, price} = bottle;
    return (
        <div className="card">
            <h2>Name: {name}</h2>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button className='btn' onClick={()=> handleAddCard(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle : PropTypes.object.isRequired,
    handleAddCard: PropTypes.func.isRequired
}

export default Bottle;