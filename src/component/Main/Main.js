import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import CEO from '../CEO/CEO';
import './Main.css';

const Main = () => {
	const [ceos, setCeos] = useState([])
    const [cart, setCart] = useState([])

	useEffect(() => {
		fetch('./data.json')
			.then((res) => res.json())
			.then((data) => setCeos(data));
	}, []);

    const handleCart = ceo => {
        const newCart = [...cart, ceo]
        setCart(newCart)
    }

	return (
		<div className='main'>
			<div className='main-display'>
				{ceos.map((x) => (
					<CEO ceo={x} key={x.id} handleCart={handleCart}></CEO>
				))}
			</div>
			<div className='cart'>
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Main;
