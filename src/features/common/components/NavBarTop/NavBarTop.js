import React from 'react';
import './NavBarTop.css';
import SearchBar from '../SearchBar/SearchBar';

import Logo from '../../../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { UserService } from '../../../../services/user.service';
import { AuthService } from '../../../../services/auth.service';

export const NavBarTop = () => {
  const navigate = useNavigate();

  // Utilisez une méthode ou une propriété pour vérifier si l'utilisateur est connecté
  const isUserAuthenticated = AuthService.isAuthenticated();

  // Gère l'événement de déconnexion
  const handleDeconnexion = () => {
    AuthService.logout(navigate);
  };

  return (
    <div className="container-fluid px-4 py-2 m-0 bg-white">
      <div className='d-flex justify-content-between align-items-center'>
        <div className='nav-bar d-flex align-items-end'>
          <img src={Logo} alt='SenPharma' />
          <ul className='d-flex list-unstyled ms-4'>
            <li className='nav-item ms-2' onClick={() => navigate('/')}>Acceuil</li>
            <li className='nav-item ms-2' onClick={() => navigate('/pharmacieEngarde')}>Pharmacies de Garde</li>
            <li className='nav-item ms-2' onClick={() => UserService.goToAccount(navigate)}>Compte</li>
          </ul>
        </div>
        <div className='d-flex justify-content-around'>
          <SearchBar />
          {/* Utilisation d'une structure conditionnelle pour afficher le bouton de connexion/déconnexion */}
          {isUserAuthenticated ? (
            <button className='btn btn-outline' onClick={handleDeconnexion}>
              Déconnexion
            </button>
          ) : (
            <button className='btn btn-outline' onClick={() => navigate('/auth/login')}>
              Se connecté
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
