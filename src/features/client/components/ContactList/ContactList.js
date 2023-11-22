import React, { Component, useEffect, useState } from 'react';
import './ContactList.css';
import { ProprietaireService } from '../../../../services/propretaire.service';
import { PharmacieService } from '../../../../services/pharmacie.service';

export const ContactList = (props) => {

	const [agentPharmacies, setAgentPharmacies] = useState([]);


	useEffect(() => {
		PharmacieService.listePublicAgentsPharmacie(props.pharmacie.id)
		.then((response) =>{
			setAgentPharmacies(response?.data?.agents);
			console.log(response)
		})
		.catch(error => console.log(error))

	},[])
  

	   if(agentPharmacies.length === 0){
		return <div>Loading ...</div>
	   }

		return(
			<div className="ContactList">
				<div className='row'>
					{agentPharmacies.map((agent) => 
					<div className='col-12 col-md-3'>
                       <div className='card'>
                          <div className='card-header bg-info '>
							<div className='d-flex align-items-center'>
								<div className='avatar'>
									<span>{agent.prenom.charAt(0)}</span>
								</div>
								<span className='nom ms-2'>{agent.prenom} {agent.nom} </span>
							</div>
						  </div>
						  <div className='card-body'>
                            <p>
								<i className='fa fa-phone me-2'></i>
								<span>{agent.telephone}</span>
							</p>
							<p>
								<i className='fa fa-envelope me-2'></i>
								<span>{agent.email}</span>
							</p>
							<p>
								<i className='fa fa-map-marker me-2'></i>
								<span>{agent.adresse}</span>
							</p>
							<div className='w-100 text-center'>
                              <button className='btn btn-outline-primary'>Envoyer un message</button>
							</div>
						  </div>
						</div>
					</div>)}
				</div>
				
			</div>
		)

}