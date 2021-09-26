import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CEO.css';

const CEO = (receive) => {
	// console.log(receive.ceo)
	const { name, img, company, age, salary } = receive.ceo;
	
	return (
		<div className='ceo'>
			<img src={img} alt=''></img>
			<h3 id ="name">{name}</h3>
			<p><small>Age: {age}</small></p>
			<p><small>Company: {company}</small></p>
			<p><small>Salary: {salary}</small></p>
            <button onClick={()=>receive.handleCart(receive.ceo)}>{<FontAwesomeIcon icon={faShoppingCart}/>}Pick Your CEO</button>
			<ul className='icon'>
				<li>{<FontAwesomeIcon icon={faFacebook}/>}</li>
				<li>{<FontAwesomeIcon icon={faLinkedin}/>}</li>
				<li>{<FontAwesomeIcon icon={faTwitter}/>}</li>
			</ul>
			
		</div>
	);
};

export default CEO;
