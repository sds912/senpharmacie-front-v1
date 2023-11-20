// import React, {  useState } from "react";
import React, { useEffect, useState } from 'react';

import './PageDetPharmacie.css';
import ButtonMenu from "../../../common/components/button-menu-pharmacie/Button";
import { MedicamentList } from "../../components/MedicamentList/MedicamentList";
import { Localisation } from "../../components/Localisation/Localisation";
import { Horraire } from "../../components/Horraire/Horraire";
import { ContactList } from "../../components/ContactList/ContactList";
import { NavBarTop } from "../../../common/components/NavBarTop/NavBarTop";
import { Link } from "react-router-dom";
// import { PharmacieService } from "../../../../services/pharmacie.service";

function PageDetailsPharmacie() {
  const [tab, setTab] = useState(1);
  const [pharmacie, setPharmacie]=useState({
    id:1,
    nom:"amina"
  });
// useEffect(() => {
// 	   PharmacieService.detailsPharmacie()
// 		  .then(response => {
// 			// Check if the response data is an array before setting the state
// 			// if (Array.isArray(response?.data.items)) {
// 			  // setProprietaires(response.data?.items);
// 			  setPharmacie(response.data.items);
// 			  console.log(response.data.items[0]);
// 			// } 
// 			// else {
// 			//   console.error('Data is not an array:', response?.data);
// 			// }
// 		  })
// 		  .catch(error => {
// 			console.error(error);
// 		  });
// 	  }, []);
 const handletabSelect  = (tab) =>{
   setTab(tab);
 }

  return (
    <div className="container-fluid p-0 m-0">
      <NavBarTop />
      <div className=' section container-fluid p-0 m-0 pt-5'>
        <div className='nomPharmacie text-center pt-5 text-white'>
          <h1>{pharmacie.nom}</h1>
        <Link to={`/`} className='retour'>RETOUR</Link>

          </div>
        <div className="buttons">
        <ButtonMenu onSelectTab={handletabSelect}></ButtonMenu>
        </div>
      </div>
      <div className="details-section container bg-white p-4">
        { tab === 1 ?    <MedicamentList /> : null}
        { tab === 2 ?    <ContactList /> : null}
        { tab === 3 ?    <Horraire /> : null}
        { tab === 4 ?    <Localisation /> : null}
      </div>
    </div>
  )
}

export default PageDetailsPharmacie;