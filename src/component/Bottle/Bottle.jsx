import './bottle.css'

const Bottle = ({bottle}) => {
    console.log(bottle);
    const {name, img, price} = bottle;
    return (
        <div className="card">
            <h2>Name: {name}</h2>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button className='btn'>Purchese</button>
        </div>
    );
};

export default Bottle;