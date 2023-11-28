import api  from './api';


const getPublicListMedicaments = (pharmacieId) =>{
 return api.get(`/public/listerProduits/${pharmacieId}`);
}


export const  ProduitService = {
 getPublicListMedicaments
}