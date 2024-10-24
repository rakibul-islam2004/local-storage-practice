import './Bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {
    const {name,img,price} = bottle ;
    return (
        <div className='bottle'>
            <p>Name: {name}</p>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            <button onClick={() => handleAddToCart(bottle)}>Add to Cart</button>
        </div>
        
    );
};

export default Bottle;