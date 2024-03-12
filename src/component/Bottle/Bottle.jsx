import './bottle.css'

const Bottle = ({bottle, handleAddCard}) => {
    console.log(bottle);
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

export default Bottle;