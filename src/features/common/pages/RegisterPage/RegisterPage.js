import React from 'react';
import './RegisterPage.css';
import { Link } from 'react-router-dom';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

export const RegisterPage = () =>  {

	return(
		<div className="RegisterPage p-4 bg-white">
			<div className='text-center'>
				<h4>Inscrivez-vous</h4>
		  		<p>pour pouvoir commander des médicaments</p>
			</div>
			<div>
			   <RegisterForm />
			</div>
			<div className='text-center mt-5'>
				<p>Vous n'avez pas encore de compte ? <Link className='link' to={'/auth/login'} ><span className='link'>Se connecter</span></Link></p>
			</div>
		</div>
	)
	
}