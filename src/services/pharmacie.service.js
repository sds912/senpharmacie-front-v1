import api  from './api';


const getListPharmacie = () =>{
 return api.get('/pharmacie');
}

const getListRegion = () =>{
    return api.get('/regions');
   }

const getListQuartier = (id) =>{
    return api.get(`/quartiers/${id}`);
   }
const getListDepartements = (id) =>{
    return api.get(`/departements/${id}`);
   }


const listeProprietaires = () =>{
    return api.get('/listeProprietaires');
   }

const detailsPharmacie=(id)=>{
    return api.get(`/pharmacie/detailsPharmacie/${id}`)
       
   }


const listePublicAgentsPharmacie = (id) => {
 return api.get(`/public/agentsPharmacies/${id}`);
}

const getPublicPharmacieHoraires = (id) =>{
 return api.get(`/public/horairesPharmacie/${id}`);

}


export const  PharmacieService = {
 getListPharmacie,
 detailsPharmacie,
 listeProprietaires,
 getListQuartier,
 getListRegion,
 getListDepartements,
 listePublicAgentsPharmacie,
 getPublicPharmacieHoraires
}