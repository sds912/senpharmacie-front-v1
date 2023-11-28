import React from 'react';
import './Localisation.css';
import GoogleMaps from '../../../common/components/GoogleMaps/GoogleMaps';

export const Localisation  = (props) => {

	const pharmacie = props.pharmacie;

	console.log(pharmacie)
	return(
		<div className="Localisation">
			<h1>Localisation</h1>
			<GoogleMaps pharmacie={pharmacie} zoom={8}  />
		</div>
	)
}