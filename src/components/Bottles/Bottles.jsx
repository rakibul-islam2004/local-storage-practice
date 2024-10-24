import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStorageCart } from "../../assets/utilities/localStorage";
import Cart from './../Cart/Cart';
import { removeFromLS } from "../../assets/utilities/localStorage";


const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    // load Cart from local storage
    useEffect(() => {
        if(bottles.length){
            const storedCard  = getStorageCart();
            const savedCard = [];

            for(const idx of storedCard){
                const bottle = bottles.find(bottle => bottle.id == idx)
                savedCard.push(bottle)
            }
                setCart(savedCard)

        }
    },[bottles])

    const handleAddToCart = (bottle) => {
            setCart([...cart,bottle])
            addToLS(bottle.id)
    };

    const handleRemoveToCart = (id) =>{

        // visual cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart)

        // Remove from local storage
        removeFromLS(id)
        
    }

    return (
        <div>
            <h2>Bottles: {bottles.length}</h2>
            

            <Cart cart={cart} handleRemoveToCart={handleRemoveToCart}></Cart>
            

            <div className="bottles">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;