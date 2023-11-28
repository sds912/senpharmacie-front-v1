
import React, { useEffect, useState } from 'react';
// import './PartnerHomePage.css';
import { SideNavBarPro } from '../../../common/components/SideNavBarPro/SideNavBarPro';
import { PharmacieService } from '../../../../services/pharmacie.service';
import { ProprietaireService } from '../../../../services/propretaire.service';
import { SideNavBar } from '../../../common/components/SideNavBar/SideNavBar';
import { UserService } from '../../../../services/user.service';

export const  AdminHomePage = () => {

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

	const [proprietaires, setProprietaires] = useState([]);
	

	
	useEffect(() => {
		UserService.getProprietaires()
		   .then(response => {
			   setProprietaires(response.data.proprietaires);
			   console.log(response.data.proprietaires);
		   })
		   .catch(error => {
			 console.error(error);
		   });
	   }, []);

	return(
		
		<div className="PartnerHomePage container-fluid p-0 m-0">
		<div className='d-flex'>
		  <SideNavBar />
		  <div className='body mx-3 p-4'>
			 <div className='container'>
                <div className='row'>
                   <div className='col-12 col-md-4'>
						<div className='card card-body card-info bg-danger'>
                          <h1>les Pharmacies</h1>
						  <p className='nb'>23</p>
						</div>
				   </div>
                   <div className='col-12 col-md-4'>
				   		<div className='card card-body card-info  bg-primary'>
						  <h1>Mes Propritaire de pharmacies</h1>
						  <p className='nb'>23</p>
						</div>
				   </div>
                   <div className='col-12 col-md-4'>
				   		<div className='card card-body card-info  bg-warning'>
						   <h1>Les Utilisateur simples</h1>
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
							<h1 className='title'>Les propretaire de pharmacie</h1>
						   <div className=''>
						   <ul class="list-group">
								{proprietaires.map((ph)=><li class="list-group-item">
									<div className='d-flex justify-content-between align-items-center'>
                                        <span>{ph.nom}</span>
                                        <span>{ph.prenom}</span>
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