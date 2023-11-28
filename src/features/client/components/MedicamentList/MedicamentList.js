import React, { useEffect, useState } from 'react';
import './MedicamentList.css';
import { ProprietaireService } from '../../../../services/propretaire.service';
import { useParams } from 'react-router-dom';
import { ProduitService } from '../../../../services/produit.service';
import { BASE_URL } from '../../../../constants/app-constant';

export const MedicamentList =  (props) => {
     
	const [medicaments, setMedicaments] = useState([]);


	useEffect(() => {
		ProduitService.getPublicListMedicaments(props.pharmacie.id)
		.then((response) =>{
			setMedicaments(response?.data?.produits);
			console.log(response?.data)
		})
		.catch(error => console.log(error))

	},[])

	
	if(medicaments.length === 0){
		return <div>Loading ...</div>
	   }
		return(
			<div className="MedicamentList">
				<div className='container'>
                  <div className='row'>
                    {medicaments.map((med) => 
					<div className='col-3'>
					<div className='card'>
                      <div className='card-header p-0' >
						<img className='img-fluid' height={60}  src={BASE_URL + '/images/' + med.photo} alt={med.nom} />
					  </div>
					  <div className='card-body'>
						<h2>{med.nom}</h2>
						<h5>{med.description}</h5>
						<h6>{med.prix} FCFA</h6>
					  </div>
					  <button className='btn btn-success'>Voir details</button>
					</div> 
					</div>)}
				  </div>
				</div>
			</div>
		)
	
}