import React,{useState,useEffect} from 'react'
import { SideNavBarPro } from '../../../../common/components/SideNavBarPro/SideNavBarPro'
// import { Link } from 'react-router-dom'
import { useNavigate, useParams, Link } from "react-router-dom";

import { UserService } from '../../../../../services/user.service'
import { ProprietaireService } from '../../../../../services/propretaire.service';

function DetailsDeMaPharmacies() {
  
  const { id } = useParams();

  const [pharmacieDetails, setPharmacieDetails] = useState({});

  useEffect(() => {
    if (id) {
      ProprietaireService.detailsPharmacie(id)
        .then((response) => {
          console.log(response.data);
          setPharmacieDetails(response.data.pharmacie || {});
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  return (
    <div className="AdminHomePage container-fluid p-0 m-0">
      <div className='d-flex'>
        <SideNavBarPro />
        <div className='body mx-3 p-4'>
          <div className='mb-5 d-flex justify-content-between px-5'>
            <h2>Details de la pharmacie</h2>
            <Link to={'/account/partner/' + UserService.getCurrentUser()?.id + '/listMesPharmacie'}>
              <button className='btn btn-outline-dark'>Voir la liste</button>
            </Link>
            <Link to={'/account/partner/'+ UserService.getCurrentUser()?.id +'/AjouterPharmacie'}>
						<button className='btn btn-outline-dark'>Mes categories</button>
					</Link><Link to={'/account/partner/'+ UserService.getCurrentUser()?.id +'/AjouterPharmacie'}>
						<button className='btn btn-outline-dark'>Mes agents</button>
					</Link>
          <Link to={'/account/partner/'+ UserService.getCurrentUser()?.id +'/AjouterPharmacie'}>
						<button className='btn btn-outline-dark'>Mes  medicaments</button>
					</Link>
          </div>
          <div class="container text-center">
            <div class="row">
              <div class="col-sm-8">
                <img  src={"http://localhost:8000/images/" + pharmacieDetails.photo} className=" imagePharmaci" alt={pharmacieDetails.nom}></img>
              </div>
              <div class="col-sm-4">
                <h1>{pharmacieDetails.nom}</h1>
                <h1>{pharmacieDetails.adresse}</h1>
                <h1>{pharmacieDetails.numero}</h1>
                <h1>{pharmacieDetails.fax}</h1>
                {/* <h1>{pharmacieDetails.quartier.nom}</h1> */}
               
                </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}





export default DetailsDeMaPharmacies

