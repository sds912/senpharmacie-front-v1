import api  from './api';


const getListPharmacie = () =>{
 return api.get('/pharmacie');
}
//AgentPharmacie
const listeAgentPharmacie = () =>{
    return api.get('/proprietaire/listerMesAgentPharmacies');
   }
 
   const bloquerAgentPharmacie = (id) =>{
      return api.post(`/proprietaire/bloquerAgent/${id}`);
     }
const detailsAgentPharmacie=(id)=>{
    return api.get(`/proprietaire/detailsAgent/${id}`,id)
       
   }
const ajoutAgentPharmacie=(data)=>{

    return api.post(`/proprietaire/ajouterAgentPharmacie/${data.pharmacie_id}`,data);
       
   }

//Mediacament
const listeMedicament = (id) =>{
    return api.get(`proprietaire/listerProduits/${id}`);
   }
const modifierMedicament = (data, selectMed) =>{
    const formData = new FormData();
    formData.append('nom', data.nom);
    formData.append('photo', data.photo);
    formData.append('description', data.description);
    formData.append('categorie_id', data.categorie_id);
    formData.append('prix', data.prix);
    formData.append('quantite', data.quantite);
    return api.put(`proprietaire/modifierProduit/${selectMed.pharmacie_id}/produits/${selectMed.id}`
    ,formData,
    {headers: {
        "Content-Type": "multipart/form-data"
    }});

   }
const ajouterMedicament = (data, id) =>{
    const formData = new FormData();
    formData.append('nom', data.nom);
    formData.append('photo', data.photo);
    formData.append('description', data.description);
    formData.append('categorie_id', data.categorie_id);
    formData.append('prix', data.prix);
    formData.append('quantite', data.quantite);
    
    return api.post(`proprietaire/ajouterProduit/${id}`,formData,{headers: {
        "Content-Type": "multipart/form-data"
    }});
   }
const supprimerMedicamet = (pharmacieId, id) => {
    return api.delete(`/proprietaire/supprimerProduit/${pharmacieId}/produits/${id}`);
   }
//CATEGORIES
const listeCategorie = (id) =>{
    return api.get(`/proprietaire/listerCategories/${id}`);
   }
const modifierCategorie = (data, id) =>{
    data.id = id;
    return api.put(`/proprietaire/modifierCategorie/${data.pharmacie_id}/categories/${id}`, data);

   }
const supprimerCatergorie = (idPharmaci,idCategorie) =>{
    return api.delete(`/proprietaire/supprimerCategorie/${idPharmaci}/categories/${idCategorie}`);
   }
const ajouterCatergorie = (data) =>{
      return api.post(`proprietaire/ajouterCategorie/${data.pharmacie_id}`,data);
     }
     
//PHARMACIE
const listMesPharmacie = () =>{
    return api.get('/proprietaire/listerMesPharmacies');
   }
const modifierPharmacie = (id) =>{
    return api.put(`pharmacie/modifierPharmacie/${id}`);
   }
const ajouterPharmacie = (data) =>{
    const formData = new FormData();
    formData.append('nom', data.nom);
    formData.append('adresse', data.adresse);
    formData.append('latitude', data.latitude);
    formData.append('longitude', data.longitude);
    formData.append('telephone', data.telephone);
    formData.append('fax', data.fax);
    formData.append('quartier_id', data.quartier_id);
    formData.append('photo', data.photo !== null? data.photo[0]: null);
    return api.post('/pharmacie/ajouterPharmacie',formData, {headers: {
        "Content-Type": "multipart/form-data"
    }});
   }
const supprimerPharmacie = (id) =>{
    return api.delete(`pharmacie/supprimerPharmacie/${id}`,id);
   }
   const detailsPharmacie=(id)=>{
      return api.get(`/pharmacie/detailsPharmacie/${id}`)
         
     }
export const  ProprietaireService = {
 
 listMesPharmacie,modifierPharmacie,ajouterPharmacie,supprimerPharmacie,detailsPharmacie,
 listeCategorie,modifierCategorie,supprimerCatergorie,ajouterCatergorie,
 listeMedicament,ajouterMedicament,supprimerMedicamet,modifierMedicament,
 listeAgentPharmacie,bloquerAgentPharmacie,ajoutAgentPharmacie,detailsAgentPharmacie,
}