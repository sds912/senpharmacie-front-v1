import React, { useEffect, useState } from 'react';

import { SideNavBarPro } from '../../../../common/components/SideNavBarPro/SideNavBarPro'
import { Link } from 'react-router-dom';
import { UserService } from '../../../../../services/user.service';
import { ProprietaireService } from '../../../../../services/propretaire.service';

function ListeAgent() {
	const [agents, setAgent] = useState([{}]);
	
	  useEffect(() => {
	   ProprietaireService.listeAgentPharmacie()
		  .then(response => {
			// Check if the response data is an array before setting the state
			// if (Array.isArray(response?.data.items)) {
			  // setProprietaires(response.data?.items);
			  setAgent(response.data.items);
			  console.log(response.data.items);
			// } 
			// else {
			//   console.error('Data is not an array:', response?.data);
			// }
		  })
		  .catch(error => {
			console.error(error);
		  });
	  }, []);

	  const handleBloquerDebloquer = async (agentId) => {
		try {
		  const response = await ProprietaireService.bloquerAgentPharmacie(agentId);
		  ProprietaireService.listeAgentPharmacie().then(response => setAgent(response.data.items));
		  console.log(response);
		} catch (error) {
		  console.error(error);
		}
	  };
	
	  if (agents === null) {
		// Loading state, you can render a loading spinner or message
		return <p>Loading...</p>;
	  }
  return (
    <div className="GestionPropPage container-fluid p-0 m-0">
			<div className='d-flex'>
              <SideNavBarPro />
			  <div className='body mx-3 p-4'>
				 <div className='mb-5 d-flex justify-content-between'>
					<h2>Liste des agent de la pharmacie </h2>
					<Link to={'/account/partner/'+ UserService.getCurrentUser()?.id +'/AjoutAgentPharmacie'}>
						<button className='btn btn-outline-dark'>Ajouter un agent</button>
					</Link>
				 </div>
				 <div className="ProprietaireList">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Email</th>
            <th scope="col">Adresse</th>
            <th scope="col">Téléphone</th>
			<th>Etat</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {agents.map(agent => (
            <tr key={agent.id}>
              <td>{agent.nom}</td>
              <td>{agent.prenom}</td>
              <td>{agent.email}</td>
              <td>{agent.adresse}</td>
              <td>{agent.telephone}</td>
              <td>{agent.status == 0 ?"actif":"inactif"}</td>
              <td>
			  <button onClick={() => handleBloquerDebloquer(agent.id)}  className="btn btn-outline-primary">
               {agent.status==0?"bloquer":"debloquer"}
              </button>
			        </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
			  </div>
			</div>
		</div>
  )
}

export default ListeAgent