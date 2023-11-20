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

const detailsPharmacie=()=>{
    return api.get('/pharmacie')
       
   }


export const  PharmacieService = {
 getListPharmacie,
 detailsPharmacie,
 listeProprietaires,
 getListQuartier,
 getListRegion,
 getListDepartements
}