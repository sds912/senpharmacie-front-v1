import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Icon from "@mui/material/Icon";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Swal from "sweetalert2";
// import "./ListePharmacie"
import { AgentService } from '../../../../services/agent.service';
import { SideNavBarAgent } from '../../../common/components/SideNavBarAgent/SideNavBarPro';
import { UserService } from '../../../../services/user.service';

function ListeCategories() {
	const [categories, setCategories] = useState([]);
 
  async function supprimerCategorie(id) {
    try {
      await AgentService.supprimerCatergorie(id);
      const newCategories = categories.filter((Categorie) => Categorie.id !== id);
      setCategories(newCategories);
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
      AgentService.listeCategorie()
         .then(response => {

           // Check if the response data is an array before setting the state
           // if (Array.isArray(response?.data.items)) {
             // setProprietaires(response.data?.items);
             setCategories(response.data.categories);
             
           // } 
           // else {
           //   console.error('Data is not an array:', response?.data);
           // }
         })
         .catch(error => {
           console.error(error);
         });
     }, []);
   
     if (categories === null) {
       // Loading state, you can render a loading spinner or message
       return <p>Loading...</p>;
     }

   
    
  return (
    <div className="PartnerHomePage container-fluid p-0 m-0">
		<div className='d-flex'>
		  <SideNavBarAgent />
		  <div className='body mx-3 p-4'>
				 <div className='mb-5 d-flex justify-content-between'>
					<h2>Liste de nos categorie</h2>
					<Link to={'/account/agent/'+ UserService.getCurrentUser()?.id +'/ajouterCategories'}>
						<button  className="btn btn-success mx-1 ">  <i className='fa fa-plus' title='Ajouter'></i>
                Ajouter</button>
					</Link>
          
				 </div>
				 <div className="ProprietaireList">
      <table className="table table-striped table-hover table-responsive">
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Description</th>
            <th scope="col " className='text-end'>Actions</th>
            
          </tr>
        </thead>
        <tbody>
          {categories.map(categorie => (
            <tr key={categorie.id}>
              
              <td>{categorie.nom}</td>
              <td>{categorie.description}</td>
              <td className='text-end'>
              <a href={`/AgntDetailsDeMaCategorie/${categorie.id}`}     className="btn btn-outline-primary mx-1" > <i className='fa fa-eye' title='Voir Détails'></i></a>
			  	    <a href={`AgentmodifierCategorie/${categorie.id}`} className="btn btn-outline-success mx-1 " >  <i className='fa fa-edit'></i> </a>
              <Button
                className='btn btn-outline-danger'
                key="delete"
                variant="text"
            
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
                  supprimerCategorie(categorie.id);
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

export default ListeCategories