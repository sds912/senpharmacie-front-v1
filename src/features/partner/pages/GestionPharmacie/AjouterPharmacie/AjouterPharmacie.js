import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './AjouterPharmacie.css';
import { SideNavBarPro } from '../../../../common/components/SideNavBarPro/SideNavBarPro';
import { Link, useNavigate } from 'react-router-dom';
import { UserService } from '../../../../../services/user.service';
import { ProprietaireService } from '../../../../../services/propretaire.service';
import Swal from 'sweetalert2';
import { PharmacieService } from '../../../../../services/pharmacie.service';

function AjouterPharmacie() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [quartiers, setQuarties] = useState([]);
  const [regions, setRegions] = useState([]);
  const [departements, setDepartements] = useState([]);

  useEffect(() => {
    PharmacieService.getListRegion()
    .then(response => {
      console.log(response)
      setRegions(response?.data)
    })
  },[])


  const onSubmit = (data) => {
    ProprietaireService.ajouterPharmacie(data).then((response) => {
      Swal.fire({
        icon: 'success',
        title: 'Succès',
        text: 'Pharmacie ajoutée avec succès!',
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


  const loadDepartment =  (idRegion) =>{
    PharmacieService.getListDepartements(idRegion)
    .then(response => {
      setDepartements(response.data);
      console.log(response?.data)
    })
  }

  const loadQuartier = (idDepartement) => {
    PharmacieService.getListQuartier(idDepartement)
    .then(response => {
      setQuarties(response?.data)
      setQuarties(response?.data)
    })
  }

  return (
    <div className="AdminHomePage container-fluid p-0 m-0 ">
      <div className="d-flex">
        <SideNavBarPro />
        <div className="body mx-3 p-4 pb-5">
          <div className="mb-5 d-flex justify-content-between px-5">
            <h2>Ajouter une pharmacie</h2>
            {/* <Link to={`/account/partner/${UserService.getCurrentUser()?.id}/listMesPharmacie`}>
              <button className="btn btn-outline-dark">Voir la liste</button>
            </Link> */}
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
                        {...register("nom")}
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
                        {...register("adresse")}
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
                        {...register("latitude")}
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
                        {...register("longitude")}
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
                       maxLength={9}
                       minLength={9}
                        className="form-control w-100"
                        type="tel"
                        {...register("telephone")}
                      />
                      {errors.telephone && <span>Champ obligatoire</span>}
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group mb-3">
                      <label className="form-label">Numéro de fax de la pharmacie</label>
                      <input
                       maxLength={9}
                       minLength={9}
                        className="form-control w-100"
                        type="tel"
                        {...register("fax")}
                      />
                      {errors.fax && <span>Champ obligatoire</span>}
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  {/* Ajoutez ici les champs manquants de votre formulaire */}
                  <div className="col-12 col-md-6">
                    <div className="form-group mb-6">
                      <label className="form-label">Séléctionner une région</label>
                      <select className='form-control' 
                        onChange={e => loadDepartment(e.target.value)}
                       >
                        <option selected value={''} disabled>Choisir une région</option>
                        {regions.map( (r) => <option key={r.id} value={r.id}>{r.nom}</option>)}
                      </select>
                      {errors.region && <span>Champ obligatoire</span>}
                    </div>
                  </div>

                   {/* Ajoutez ici les champs manquants de votre formulaire */}
                   <div className="col-12 col-md-6">
                    <div className="form-group mb-6">
                      <label className="form-label">Sélectionner un département</label>
                      <select className='form-control'
                       onChange={e => loadQuartier(e.target.value)}
                       >
                        <option selected value={''} disabled>Choisir un département</option>
                        {departements.map( (d) => <option key={d.id} value={d.id}>{d.nom}</option>)}
                      </select>
                      {errors.quartier_id && <span>Champ obligatoire</span>}
                    </div>
                  </div>
                  </div>

                <div className="row">
                  {/* Ajoutez ici les champs manquants de votre formulaire */}
                  <div className="col-12 col-md-6">
                    <div className="form-group mb-6">
                      <label className="form-label">Quartier</label>
                      <select className='form-control' {...register('quartier_id')} >
                        <option selected value={''} disabled>Choisir un quartier</option>
                        {quartiers.map( (q) => <option key={q.id} value={q.id}>{q.nom}</option>)}
                      </select>
                      {errors.quartier_id && <span>Champ obligatoire</span>}
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group mb-3">
                      <label className="form-label">Image de la pharmacie</label>
                      <input
                        className="form-control w-100"
                        type="file"
                        {...register('photo')}
                      />
                      {errors.photo && <span>Champ obligatoire</span>}
                    </div>
                  </div>
                </div>

                <div className="text-center mt-4">
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

export default AjouterPharmacie;
