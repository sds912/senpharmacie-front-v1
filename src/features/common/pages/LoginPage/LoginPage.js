import React from 'react';
import './LoginPage.css';

import TeamImg from '../../../../assets/images/small-team.png';
import { Link } from 'react-router-dom';
import { LoginForm } from '../../components/LoginForm/LoginForm';

export  const LoginPage = () =>{

	return(
		<div className="container p-5  mt-2 LoginPage">
			<div className='row'>
              <div className='col-12 col-md-5 form-section border p-4 bg-white'>
				<h5 >Bienvenue !</h5>
				<h4 className='mt-4'>Connectez vous</h4>
				<p className='mb-5'>Pour pouvoir commander des médicaments</p>
               <LoginForm />
			   <div className='text-end'>
			   		<p className=' mt-5'>Vous n'avez pas encore de compte ? <Link className='link' to={'/auth/register'} ><span className='link'>Incrivez-vous</span></Link></p>
			   </div>
			  </div>
			  <div className='col-12 col-md-7'>
               <img src={TeamImg} alt='team' className='img-fluid' />
			  </div>
			</div>
		</div>
	)

}