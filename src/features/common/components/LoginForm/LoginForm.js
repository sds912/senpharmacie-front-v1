import React, { useState } from 'react';
import './LoginForm.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../../../../services/auth.service';
import { UserService } from '../../../../services/user.service';

export const LoginForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (data) => {
    AuthService.login(data)
      .then((response) => {
        if (response?.data?.status_code === 200) {
          const user = response?.data?.users;
          localStorage.setItem('token', response?.data?.token);
          localStorage.setItem('user', JSON.stringify(user));
          UserService.goToAccount(navigate);
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage('Informations incorrectes. Veuillez réessayer.');
      });
  };

  return (
    <div className="LoginForm w-100">
      <form onSubmit={handleSubmit(onSubmit)} className="w-100">
        <div className="form-group mb-3">
          <label className="form-label">Adresse Email</label>
          <input className="form-control w-100" placeholder="Entrez votre adresse email" type="email" {...register('email')} />
          {errors.email && <span>Veillez renseigner votre email</span>}
        </div>

        <div className="form-group mb-4">
          <label>Mot de passe</label>
          <input className="form-control w-100" placeholder="Entrez votre mot de passe" type="password" {...register('password', { required: true })} />
          {errors.password && <span>Veillez renseigner votre mot de passe</span>}
        </div>

        {errorMessage && <div className="text-danger">{errorMessage}</div>}

        <div className="text-center">
          <input className="btn btn-success" type="submit" value="Connexion" />
        </div>
      </form>
    </div>
  );
};
