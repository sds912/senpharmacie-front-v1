import React, { Component, useEffect, useState } from 'react';
import './Horraire.css';
import { PharmacieService } from '../../../../services/pharmacie.service';

export const Horraire = (props) => {

	const [horaires, setHoraires] = useState([]);


	useEffect(() => {
		PharmacieService.getPublicPharmacieHoraires(props.pharmacie.id)
		.then((response) =>{
			setHoraires(response?.data?.horaires);
		})
		.catch(error => console.log(error))

	},[])

	
		return(
			<div className="Horraire">
			 <ul class="list-group">
				{horaires.map((h) =><div>
				<li class="list-group-item">
                   <span>Lundi</span>
                   <span className='ms-5'>{h.j1}</span>
				</li>
				<li class="list-group-item">
                   <span>Mardi</span>
                   <span className='ms-5'>{h.j2}</span>
				</li>
				<li class="list-group-item">
                   <span>Mercredi</span>
                   <span className='ms-5'>{h.j3}</span>
				</li>
				<li class="list-group-item">
                   <span>Jeudi</span>
                   <span className='ms-5'>{h.j4}</span>
				</li>
				<li class="list-group-item">
                   <span>Vendredi</span>
                   <span className='ms-5'>{h.j5}</span>
				</li>
				<li class="list-group-item">
                   <span>Samedi</span>
                   <span className='ms-5'>{h.j6}</span>
				</li>
				<li class="list-group-item">
                   <span>Dimance</span>
                   <span className='ms-5'>{h.j7}</span>
				</li>
				</div>
				)}
			</ul>
			</div>
		)

}