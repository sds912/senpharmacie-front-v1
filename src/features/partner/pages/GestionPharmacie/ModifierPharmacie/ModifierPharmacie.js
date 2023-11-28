import React, { useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SideNavBarPro } from '../../../../common/components/SideNavBarPro/SideNavBarPro';
import { useNavigate, useParams, Link } from "react-router-dom";

import { UserService } from '../../../../../services/user.service';
import { ProprietaireService } from '../../../../../services/propretaire.service';
import Swal from 'sweetalert2';

function ModifierPharmacie() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { id } = useParams();

  const [nomPharmacie, setNomPharmacie] = useState("");
  const [adresse, setAdressePharmacie] = useState("");
  const [latitudePharmacie, setLatitudePharmacie] = useState("");
  const [longitudePharmacie, setLongitudePharmacie] = useState("");
  const [telephonePharmacie, setTelephonePharmacie] = useState("");
  const [faxPharmacie, setFaxPharmacie] = useState("");
  const [quartierPharmacie, setQuartierPharmacie] = useState("");
  const [photoPharmacie, setPhotoPharmacie] = useState("");

   useEffect(() => {
    if (id) {
      ProprietaireService.detailsPharmacie(id)
        .then((response) => {
            console.log(response.data.pharmacie)
        //   const pharmacieData = response.data; 
          setNomPharmacie(response.data.pharmacie.nom || '');
          setAdressePharmacie(response.data.pharmacie.adresse || '');
          setLatitudePharmacie(response.data.pharmacie.latitude || '');
          setLongitudePharmacie(response.data.pharmacie.longitude || '');
          setTelephonePharmacie(response.data.pharmacie.telephone || '');
          setFaxPharmacie(response.data.pharmacie.fax || '');
          setQuartierPharmacie(response.data.pharmacie.quartier_id || '');
          setPhotoPharmacie(response.data.pharmacie.photo || '');

        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Une erreur est survenue, veuillez réessayer!',
          });
        });
    }
  }, [id]);

  const handleNomPharmacieChange = (event) => {
    setNomPharmacie(event.target.value);
  };

  const handleAdressePharmacieChange = (event) => {
    setAdressePharmacie(event.target.value);
  };

  const handleLatitudePharmacieChange = (event) => {
    setLatitudePharmacie(event.target.value);
  };

  const handleLongitudePharmacieChange = (event) => {
    setLongitudePharmacie(event.target.value);
  };

  const handleTelephonePharmacieChange = (event) => {
    setTelephonePharmacie(event.target.value);
  };

  const handleFaxPharmacieChange = (event) => {
    setFaxPharmacie(event.target.value);
  };

  const handleQuartierPharmacieChange = (event) => {
    setQuartierPharmacie(event.target.value);
  };

  const handlePhotoPharmacieChange = (event) => {
    setPhotoPharmacie(event.target.value);
  };

  const onSubmit = (id) =>
  {
    const data={
      nom: nomPharmacie,
      adresse: adresse,
      latitude: latitudePharmacie,
      longitude: longitudePharmacie,
      telephone: telephonePharmacie,
      fax: faxPharmacie,
      quartier_id: quartierPharmacie,
      photo: photoPharmacie,
      // Ajoutez ici les autres champs du formulaire
    }
    console.log(data);
    ProprietaireService.modifierPharmacie(
      data
    ).then((response) => {
        console.log(response);
      Swal.fire({
        icon: 'success',
        title: 'Succès',
        text: 'Pharmacie modifier avec succès!',
      }).then(() => {
        navigate(`/account/partner/${UserService.getCurrentUser()?.id}/listMesPharmacie`);
      });
      console.log(response);
    }).catch((error) => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Une erreur est survenue, veuillez réessayer!',
      });
    });
  };

  return (
    <div className="AdminHomePage container-fluid p-0 m-0">
      <div className="d-flex">
        <SideNavBarPro />
        <div className="body mx-3 p-4">
          <div className="mb-5 d-flex justify-content-between px-5">
            <h2>Ajouter une pharmacie</h2>
            <Link to={`/account/partner/${UserService.getCurrentUser()?.id}/listMesPharmacie`}>
              <button className="btn btn-outline-dark">Voir la liste</button>
            </Link>
          </div>
          <div className="px-5">
            <div className="LoginForm w-100">
              <form onSubmit={handleSubmit(onSubmit)} className="w-100">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="form-group mb-3">
                      <label className="form-label">Nom pharmacie</label>
                      <input
                        className="form-control w-100"
                        type="text"
                        value={nomPharmacie}
                        onChange={handleNomPharmacieChange}
                      />
                      {errors.nom && <span>Champ obligatoire</span>}
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group mb-3">
                      <label className="form-label">Adresse de la pharmacie </label>
                      <input
                        className="form-control w-100"
                        type="text"
                        value={adresse}
                        onChange={handleAdressePharmacieChange}
                      />
                      {errors.adresse && <span>Champ obligatoire</span>}
                    </div>
                  </div>
                </div>

                <div className="row">
                  {/* Ajoutez ici les champs manquants de votre formulaire */}
                  <div className="col-12 col-md-6">
                    <div className="form-group mb-3">
                      <label className="form-label">Latitude</label>
                      <input
                        className="form-control w-100"
                        type="text"
                        value={latitudePharmacie}
                        onChange={handleLatitudePharmacieChange}
                      />
                      {errors.latitude && <span>Champ obligatoire</span>}
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group mb-3">
                      <label className="form-label">Longitude</label>
                      <input
                        className="form-control w-100"
                        type="text"
                        value={longitudePharmacie}
                        onChange={handleLongitudePharmacieChange}
                      />
                      {errors.longitude && <span>Champ obligatoire</span>}
                    </div>
                  </div>
                </div>

                <div className="row">
                  {/* Ajoutez ici les champs manquants de votre formulaire */}
                  <div className="col-12 col-md-6">
                    <div className="form-group mb-3">
                      <label className="form-label">Numéro de téléphone de la pharmacie</label>
                      <input
                        className="form-control w-100"
                        type="text"
                        value={telephonePharmacie}
                        onChange={handleTelephonePharmacieChange}
                      />
                      {errors.telephone && <span>Champ obligatoire</span>}
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group mb-3">
                      <label className="form-label">Numéro de fax de la pharmacie</label>
                      <input
                        className="form-control w-100"
                        type="text"
                        value={faxPharmacie}
                        onChange={handleFaxPharmacieChange}
                      />
                      {errors.fax && <span>Champ obligatoire</span>}
                    </div>
                  </div>
                </div>

                <div className="row">
                  {/* Ajoutez ici les champs manquants de votre formulaire */}
                  <div className="col-12 col-md-6">
                    <div className="form-group mb-6">
                      <label className="form-label">Quartier</label>
                      <input
                        className="form-control w-100"
                        type="text"
                        value={quartierPharmacie}
                        onChange={handleQuartierPharmacieChange}
                      />
                      {errors.quartier_id && <span>Champ obligatoire</span>}
                    </div>
                  </div>
                  <div className="col-12 col-md-6">

                    <div className="form-group mb-3 ">
                      <label className="form-label">
                          changer l'image pharmacie
                        </label>
                        <div className='d-flex'>
                        <img style={{width: 40,height:40}} src={"http://localhost:8000/images/"+photoPharmacie} className=" imagePharmaci" alt={photoPharmacie.nom}></img>
                        <input
                        className="form-control w-100"
                        type="file"
                        
                        onChange={handlePhotoPharmacieChange}
                      />
                      {errors.photo && <span>Champ obligatoire</span>}
                        </div>

                      
                      
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <input className="btn btn-success valider" type="submit" value="Valider" />
                  <Link to={`/account/partner/${UserService.getCurrentUser()?.id}/listMesPharmacie`}>
                    <button className="btn btn-danger mx-3">Annuler l'ajout</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModifierPharmacie;
