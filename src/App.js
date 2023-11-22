import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { GuardedRoute } from './helper/GuardedRoute';
import { ClientHomePage } from './features/client/pages/ClientHomePage/ClientHomePage';
import { LoginPage } from './features/common/pages/LoginPage/LoginPage';
import { RegisterPage } from './features/common/pages/RegisterPage/RegisterPage';
import PanierPage from './features/client/pages/PanierPage/PanierPage';
import {ChatPage} from './features/common/pages/ChatPage/ChatPage';
import { AddPropPage } from './features/admin/pages/AddPropPage/AddPropPage';
import { AdminHomePage } from './features/admin/pages/AdminHomePage/AdminHomePage';
import { GestionPropPage } from './features/admin/pages/GestionPropPage/GestionPropPage';
import PageDetailsPharmacie from './features/client/pages/PageDetailsPharmacie/PageDetPharmacie';
import { PartnerHomePage } from './features/partner/pages/PartnerHomePage/PartnerHomePage';
import ListePharmacie from './features/partner/pages/GestionPharmacie/ListePharmacie/ListePharmacie';
import Listemedicament from './features/partner/pages/GestionMedicament/listeMedicament/Listemedicament';
import ListeCategorie from './features/partner/pages/GestionCategorie/ListeCategorie/ListeCategorie';
import ListeAgent from './features/partner/pages/GestionAgent/ListeAgent/ListeAgent';
import AjouterPharmacie from './features/partner/pages/GestionPharmacie/AjouterPharmacie/AjouterPharmacie';
import ModifierPharmacie from './features/partner/pages/GestionPharmacie/ModifierPharmacie/ModifierPharmacie';
import DetailsDeMaPharmacies from './features/partner/pages/GestionPharmacie/DetailsPharmacie/DetailsPharmacie';
import AjouterMedicament from './features/partner/pages/GestionMedicament/AjouterMedicament/AjouterMedicament';
import ModifierMedicament from './features/partner/pages/GestionMedicament/ModifierMedicament/ModifierMedicament';
import AjouterCategorie from './features/partner/pages/GestionCategorie/AjoutCategorie/AjouterCategorie';
import ModifierCategorie from './features/partner/pages/GestionCategorie/ModifierCategori/ModifierCategorie';
import AjouterAgent from './features/partner/pages/GestionAgent/AjouterAgent/AjouterAgent';


function App() {
  return (
    <Router>
      <div className='container-fluid p-0'>
      <Routes>
        <Route path='/' Component={ClientHomePage} />
        <Route path='/auth/login' Component={LoginPage} />
        <Route path='/auth/register' Component={RegisterPage} />
        <Route path='/detailsPharmacie/:id' Component={PageDetailsPharmacie} />

                  {/* ROUTES POUR LE CLIENT */}
        <Route exact path='/account/client/:id'  element={
        <GuardedRoute>
         <ClientHomePage />
        </GuardedRoute>} />

        <Route path='/panier' element={
          <GuardedRoute>
            <PanierPage />
          </GuardedRoute>
        } />
        <Route path='/chat' element={
          <GuardedRoute>
            <ChatPage />
          </GuardedRoute>
        } />
                  {/* ROUTES POUR ADMIN  */}
        <Route exact path='/account/admin/:id'  element={
        <GuardedRoute>
         <AdminHomePage />
        </GuardedRoute>} />
        <Route exact path='/account/admin/:id/gestion/prop'  element={
        <GuardedRoute>
         <GestionPropPage />
        </GuardedRoute>} />
        <Route exact path='/account/admin/:id/add/prop'  element={
        <GuardedRoute>
         <AddPropPage />
        </GuardedRoute>} />
        
                          {/* ROUTE POUR PROPRETAIRE PHARMACIE */}
        <Route exact path='/account/partner/:id'  element={
        <GuardedRoute>
         <PartnerHomePage />
        </GuardedRoute>} />
          {/* ROUTE PHARMACIE */}
        <Route exact path='/account/partner/:id/listMesPharmacie'  element={
        <GuardedRoute>
         <ListePharmacie />
        </GuardedRoute>} />
        <Route exact path='/account/partner/:id/AjouterPharmacie'  element={
        <GuardedRoute>
         <AjouterPharmacie />
        </GuardedRoute>} />
        <Route exact path='/ModifierPharmacie/:id'  element={
        <GuardedRoute>
         <ModifierPharmacie />
        </GuardedRoute>} />
        <Route exact path='/DetailsDeMaPharmacie/:id'  element={
        <GuardedRoute>
         <DetailsDeMaPharmacies />
        </GuardedRoute>} />
          {/* ROUTE AGENT PHARMACIE */}
        <Route exact path='/account/partner/:id/listAgentPharmacie'  element={
        <GuardedRoute>
         <ListeAgent />
        </GuardedRoute>} />
        <Route exact path='/account/partner/:id/AjoutAgentPharmacie'  element={
        <GuardedRoute>
         <AjouterAgent />
        </GuardedRoute>} />
        
          {/* ROUTE MEDICAMENT */}
        <Route exact path='/account/partner/:id/listMedicament'  element={
        <GuardedRoute>
         <Listemedicament />
        </GuardedRoute>} />
        <Route exact path='/account/partner/:id/AjouterMedicament'  element={
        <GuardedRoute>
         <AjouterMedicament />
        </GuardedRoute>} />
        <Route exact path='/ModifierMedicament/:id'  element={
        <GuardedRoute>
         <ModifierMedicament />
        </GuardedRoute>} />
        
        {/* ROUTE CATEGORIE */}
        <Route exact path='/account/partner/:id/listeCategorie'  element={
        <GuardedRoute>
         <ListeCategorie />
        </GuardedRoute>} />
        <Route exact path='/account/partner/:id/AjouterCategorie'  element={
        <GuardedRoute>
         <AjouterCategorie />
        </GuardedRoute>} />
        <Route exact path='/ModifierCategorie/:id'  element={
        <GuardedRoute>
         <ModifierCategorie />
        </GuardedRoute>} />
        
       
      </Routes>
      </div>
    </Router>
  );
}

export default App;
