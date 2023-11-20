import React, { useEffect, useState } from 'react';
import './ProprietaireList.css';
import { PharmacieService } from '../../../../services/pharmacie.service';
import { UserService } from '../../../../services/user.service';

export const ProprietaireList = () => {
  const [proprietaires, setProprietaires] = useState([{
	nom: "Senghor",
	prenom: "Amina",
	email: "amina@gmail.com",
	adresse: "Dkar",
	telephone: "777443663",
	status: "Actif"
  }]);

  useEffect(() => {
   UserService.getProprietaires()
      .then(response => {
        // Check if the response data is an array before setting the state
        // if (Array.isArray(response?.data.items)) {
          // setProprietaires(response.data?.items);
          setProprietaires(response.data.proprietaires);
          console.log(response.data.proprietaires);
        // } 
        // else {
        //   console.error('Data is not an array:', response?.data);
        // }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (proprietaires === null) {
    // Loading state, you can render a loading spinner or message
    return <p>Loading...</p>;
  }

  return (
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
          {proprietaires.map(phar => (
            <tr key={phar.id}>
              <td>{phar.nom}</td>
              <td>{phar.prenom}</td>
              <td>{phar.email}</td>
              <td>{phar.adresse}</td>
              <td>{phar.telephone}</td>
              <td>{phar.status == 0 ?"actif":"inactif" }</td>
              <td>
                 <a href={`/modifierProPhar/${phar.id}`} className="btn btn-outline-danger "> Bloquer</a>
                 
                 <a href={`/modifierProPhar/${phar.id}`} className="btn btn-outline-primary "> Modifier</a>
			        </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
