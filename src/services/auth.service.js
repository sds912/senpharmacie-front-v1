import api from './api';
import { UserService } from './user.service';

const login = (data) => {
 return api.post('/login',data )
}
const register = (data) => {
   return  api.post('/register',data )
  }

const logout = (navigate) => {
   const profile = UserService.getCurrentUser()?.profile;
   localStorage.clear('token');
   localStorage.clear('user');
   if(profile === 'client'){
      navigate('/')
   }else{
      navigate('/');
   }
}
// services/auth.service.js

 
const isAuthenticated =()=> {
     const token = localStorage.getItem('token');
     return !!token; // Si le token existe, l'utilisateur est considéré comme connecté
   }
 
 

export const AuthService = {
    login,
    register,
    isAuthenticated,
    logout
}