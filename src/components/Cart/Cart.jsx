import './Cart.css'

const Cart = ({cart , handleRemoveToCart}) => {
    return (
        <div>
            <h3>Carts: {cart.length}</h3>
            <div className="cart">
                {
                    cart.map(bottle => <span key={bottle.id}><img src={bottle.img}></img><button onClick={() => {handleRemoveToCart(bottle.id)}}>Remove</button></span>)
                }
            </div>
        </div>
    );
};

export default Cart;