import React from 'react';
import Tilt from 'react-tilt';

import './BigCard.css';

const BigCard = () => {
	return (
		<div className = 'ma4 mt0' >
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner pa3"> 
 					<h2>Insert Text Here </h2> 
 				</div>
			</Tilt>
		</div>
	);
}

export default Logo;