import api  from './api';

//Mediacament
const listeMedicament = () =>{
    return api.get(`agentPharmacie/listerProduits`);
   }
const modifierMedicament = (idMed) =>{
    return api.put(`agentPharmacie/modifierProduit/${idMed}`);}

const ajouterMedicament = (data) =>{
    return api.post(`agentPharmacie/ajouterProduit`,data);}

const supprimerMedicamet = (idMed) => {
    return api.delete(`/agentPharmacie/supprimerProduit/${idMed}`);
   }
//CATEGORIES
const listeCategorie = () =>{
    return api.get(`/agentPharmacie/listerCategories`);
   }
const modifierCategorie = (idCat) =>{
    return api.put(`/agentPharmacie/modifierCategorie/${idCat}`);

   }
const supprimerCatergorie = (idCat) =>{
    return api.delete(`/agentPharmacie/supprimerCategorie/${idCat}}`);
   }
const ajouterCatergorie = () =>{
      return api.post(`agentPharmacie/ajouterCategorie/`);
     }
     
     export const AgentService= {
        listeCategorie,modifierCategorie,supprimerCatergorie,ajouterCatergorie,
        listeMedicament,ajouterMedicament,supprimerMedicamet,modifierMedicament
     }