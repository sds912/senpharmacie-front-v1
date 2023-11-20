import React, { useEffect, useState } from 'react';
import { SideNavBarPro } from '../../../../common/components/SideNavBarPro/SideNavBarPro'
import { UserService } from '../../../../../services/user.service';
import { Link } from 'react-router-dom';
import { ProprietaireService } from '../../../../../services/propretaire.service';
import Button from '@mui/material/Button';
import Icon from "@mui/material/Icon";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

import Swal from "sweetalert2";
import "./ListePharmacie"
function ListePharmacie() {
	const [pharmacies, setPharmacie] = useState([]);
  const [quartiers, setQuartiers] = useState([{
    quartiers:1,

  }]);
  async function supprimerPharmacie(id) {
    try {
      await ProprietaireService.supprimerPharmacie(id);
      const newPharmacies = pharmacies.filter((pharmacie) => pharmacie.id !== id);
      setPharmacie(newPharmacies);
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Pharmacie supprimée',
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erreur, pharmacie non supprimée',
      });
    }
  }
    useEffect(() => {
      ProprietaireService.listMesPharmacie()
         .then(response => {
           // Check if the response data is an array before setting the state
           // if (Array.isArray(response?.data.items)) {
             // setProprietaires(response.data?.items);
             setPharmacie(response.data.data);
             setQuartiers(response.data.data);
             console.log(response.data.data[0]);
           // } 
           // else {
           //   console.error('Data is not an array:', response?.data);
           // }
         })
         .catch(error => {
           console.error(error);
         });
     }, []);
   
     if (pharmacies === null) {
       // Loading state, you can render a loading spinner or message
       return <p>Loading...</p>;
     }

   
    
  return (
    <div className="PartnerHomePage container-fluid p-0 m-0">
		<div className='d-flex'>
		  <SideNavBarPro />
		  <div className='body mx-3 p-4'>
				 <div className='mb-5 d-flex justify-content-between'>
					<h2>Liste de mes pharmacie</h2>
					<Link to={'/account/partner/'+ UserService.getCurrentUser()?.id +'/AjouterPharmacie'}>
						<button className='btn btn-outline-dark'>Ajouter une pharmacie</button>
					</Link>
          
				 </div>
				 <div className="ProprietaireList">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Nom</th>
            <th scope="col">Adresse</th>
            <th scope="col">Telephone</th>
            <th scope="col">Quartier</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pharmacies.map(pharmacie => (
            <tr key={pharmacie.id}>
              <td>
              <img style={{width: 100,height:100}} src={"http://localhost:8000/images/"+pharmacie.photo} className=" imagePharmaci" alt={pharmacie.nom}></img>

              </td>
              <td>{pharmacie.nom}</td>
              <td>{pharmacie.adresse}</td>
              <td>{pharmacie.telephone}</td>
              <td>{pharmacie.quartier_id}</td>
              <td>
              <a href={`/account/partner/`+ UserService.getCurrentUser()?.id +`/AjoutAgentPharmacie/${pharmacie.id}`}  style={{ color: '#3085d6' }} className=" btn-warning mx-1 ">  Ajouter agent</a>
              <a href={`/DetailsDeMaPharmacie/${pharmacie.id}`}  style={{ color: '#3085d6' }} className=" btn-warning mx-1 ">  <VisibilityIcon /></a>
			  	    <a href={`/modifierPharmacie/${pharmacie.id}`}  style={{ color: '#FFEF00' }} >  <EditIcon /></a>
             
              <Button
               className= 'btn btn-danger'
            key="delete"
            variant="text"
            // style={{ color: '#d33' }} 
            // color="secondary"
            onClick={() => {
              Swal.fire({
                title: "Voulez-vous confirmer la suppression?",
                text: "Vous ne pourrez pas revenir en arrière !",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Supprimer",
                cancelButtonText: "Annuler",
              }).then((result) => {
                if (result.isConfirmed) {
                  supprimerPharmacie(pharmacie.id);
                }
              });
            }}

          >
            
      <DeleteIcon    style={{ color: '#d33' }} color="#d33" />
    </Button>
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

export default ListePharmacie