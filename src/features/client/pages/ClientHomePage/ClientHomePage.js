import React, { useEffect, useState } from 'react';
import './ClientHomePage.css';
import { PharmacieService } from '../../../../services/pharmacie.service';
import RegionButton from '../../../common/components/region-buttons/RegionButton';
import { NavBarTop } from '../../../common/components/NavBarTop/NavBarTop';
import { Link } from 'react-router-dom';

export const ClientHomePage = () => {

	const [pharmacies, setPharmacies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await PharmacieService.getListPharmacie();
        console.log(response)
        setPharmacies(response.data.items);
        console.log(response.data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container-fluid p-0 m-0">
		<NavBarTop />
      <div className="main">
        <RegionButton></RegionButton>
        <div className="container">
          <div className="row">
            {pharmacies.map((pharmacie) => (
              <div className="col-md-4 pt-4  card1" key={pharmacie.id}>
                <div className="card" >
                  <div className="row">
                    <div className="col-md-6">
                    <img src={"http://localhost:8000/images/"+pharmacie.photo} className=" image" alt={pharmacie.nom}></img>
                    </div>
                    <div className="col-md-6  mt-2">
                      <div className="card-body info ">
                        <h5 className="card-title nom">{pharmacie.nom}</h5>
                        <p className="card-text adresse">{pharmacie.adresse}</p>
                        
                        <div className="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="11" viewBox="0 0 8 11" fill=" #ABAFB3;">
                            <path d="M4.06859 0.169922C2.12375 0.169922 0.550781 1.73492 0.550781 3.66992C0.550781 6.29492 4.06859 10.1699 4.06859 10.1699C4.06859 10.1699 7.5864 6.29492 7.5864 3.66992C7.5864 1.73492 6.01344 0.169922 4.06859 0.169922ZM4.06859 4.91992C3.37508 4.91992 2.81223 4.35992 2.81223 3.66992C2.81223 2.97992 3.37508 2.41992 4.06859 2.41992C4.7621 2.41992 5.32495 2.97992 5.32495 3.66992C5.32495 4.35992 4.7621 4.91992 4.06859 4.91992Z" fill="#ABAFB3"/>
                        </svg>
                        <p className="card-text px-2  distance">200mn</p>
                      </div>
                     
                      <div className="d-flex mt-2 mb-0">
                      <p className="card-text statut ">Ouvert</p>
                      <Link to={`/detailsPharmacie/${pharmacie.id}`} className='lien'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M1.00391 6.00363H11.0039" stroke="#ABBFB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M6.00391 1.00391L11.0039 6.00391L6.00391 11.0039" stroke="#ABBFB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                      </Link>
                    </div>
                          
                       
                      </div>

                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
              <div className='align-items-center'>Voir plus</div>
          </div>
        </div>
      </div>
    </div>
  );
	
}