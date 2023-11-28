import React, { useEffect, useState } from 'react';
import './PartnerHomePage.css';
import { SideNavBarPro } from '../../../common/components/SideNavBarPro/SideNavBarPro';
import { PharmacieService } from '../../../../services/pharmacie.service';
import { ProprietaireService } from '../../../../services/propretaire.service';

export const  PartnerHomePage = () => {

	const [commandes, setCommandes] = useState([
		{
		  "id": 1,
		  "medicament": "Aspirine",
		  "quantite": 2,
		  "prix": 2300,
		  "client": "Moussa Diop",
		  "adresse": "Dakar, Ouest Foire"
		},
		{
		  "id": 2,
		  "medicament": "Paracetamol",
		  "quantite": 3,
		  "prix": 1800,
		  "client": "Aminata Sow",
		  "adresse": "Thies, Quartier Keur Massar"
		},
		{
		  "id": 3,
		  "medicament": "Ibuprofen",
		  "quantite": 1,
		  "prix": 1500,
		  "client": "Ousmane Diallo",
		  "adresse": "Ziguinchor, Bignona"
		},
		{
		  "id": 4,
		  "medicament": "Amoxicillin",
		  "quantite": 4,
		  "prix": 2800,
		  "client": "Fatou Fall",
		  "adresse": "Kaolack, Medina Baye"
		},
		{
		  "id": 5,
		  "medicament": "Ranitidine",
		  "quantite": 2,
		  "prix": 2000,
		  "client": "Samba Cisse",
		  "adresse": "Saint-Louis, Pikine"
		}
	  ]
	  );

	const [pharmacies, setPharmacies] = useState([]);


	useEffect(() => {
      ProprietaireService.listMesPharmacie()
	  .then(response => 

		{
			console.log(response)
			setPharmacies(response?.data.data)}
		)
	}, [])

	return(
		
		<div className="PartnerHomePage container-fluid p-0 m-0">
		<div className='d-flex'>
		  <SideNavBarPro />
		  <div className='body mx-3 p-4'>
			 <div className='container'>
                <div className='row'>
                   <div className='col-12 col-md-4'>
						<div className='card card-body card-info bg-danger'>
                          <h1>Mes Pharmacies</h1>
						  <p className='nb'>1</p>
						</div>
				   </div>
                   <div className='col-12 col-md-4'>
				   		<div className='card card-body card-info  bg-primary'>
						  <h1>Mes Agents</h1>
						  <p className='nb'>2</p>
						</div>
				   </div>
                   <div className='col-12 col-md-4'>
				   		<div className='card card-body card-info  bg-warning'>
						   <h1>Mes Medicaments</h1>
						    <p className='nb'>54</p>
						</div>
				   </div>
				</div>
			 </div>
			 <div className='container mt-5 commandes'>
				<div className='row'>
                   <div className='col-12 col-md-7'>
				   <div className='card'>
                  <div className='card-header'>Mes commandes</div>
				  <div className='card-body'>
				  <table class="table">
					<thead>
						<tr>
						<th scope="col">Médicament</th>
						<th scope="col">Quantité</th>
						<th scope="col">Prix </th>
						<th scope="col">Client</th>
						<th scope="col">Adresse</th>
						</tr>
					</thead>
					<tbody>
						{commandes.map((c) =><tr>
							<th>{c.medicament}</th>
							<td>{c.quantite}</td>
							<td>{c.prix * c.quantite}</td>
							<td>{c.client}</td>
							<td>{c.adresse}</td>
						</tr>)}
					</tbody>
					</table>
				  </div>
			   </div>
				   </div>
                   <div className='col-12 col-md-5'>
				   		<div className='container agents'>
							<h1 className='title'>Mes Pharmacies</h1>
						   <div className=''>
						   <ul class="list-group">
								{pharmacies.map((ph)=><li class="list-group-item">
									<div className='d-flex justify-content-between align-items-center'>
                                        <span>{ph.nom}</span>
										<span>{ph.telephone}</span>
									</div>
								</li>)}
							</ul>
						   </div>
						</div>
				   </div>
				</div>
             
			 </div>

			 
		  </div>
		</div>
	</div>
	)
	
}