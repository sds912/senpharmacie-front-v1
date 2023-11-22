import React, { useEffect, useState } from 'react';
import './ChatPage.css';
import { SideNavBarPro } from '../../components/SideNavBarPro/SideNavBarPro';
import { NavBarTop } from '../../components/NavBarTop/NavBarTop';
import { ProprietaireService } from '../../../../services/propretaire.service';

export const ChatPage =  ()  => {

	const [agentPharmacies, setAgentPharmacies] = useState([]);
	const [selectedUser, setSelctedUser] = useState(null);


	useEffect(() => {
		ProprietaireService.listeAgentPharmacie()
		.then((response) =>{
			setAgentPharmacies(response?.data?.items);
			console.log(response)
		})
		.catch(error => console.log(error))

	},[])

		return(
			<div className="ChatPage">
				<div className='d-flex'>
					<SideNavBarPro />
					<div className='body mx-3 p-0'>
					<div className='container p-0'>
				<div>
					<div></div>
					<div>

					</div>
				</div>
				<div className='row'>
					<div className='user-section col-3 py-2'>
                        <ul className='list-unstyled'>
							{agentPharmacies.map((agent) => 
							<li key={agent.id} className={selectedUser && selectedUser.id  === agent.id ? 'active': null}>
                             <div onClick={()=> setSelctedUser(agent)} className='border-bottom p-2 d-flex justify-content-between align-items-center'>
								<div className='avatar'>{agent.prenom.charAt(0)}</div>
								<div>
									<h6>{agent.prenom} {agent.nom}</h6>
								<h6>{agent.telephone}</h6>

								</div>
							 </div>
							</li>)}
						</ul>
					</div>
					<div className='message-section col-9 text-center'>
                         {selectedUser === null ? <span>Selectionner un contact pour démarrer la discution</span> : null}

					</div>
				</div>
                
			   </div>
					</div>
			  	</div>
              
			</div>
		)

}