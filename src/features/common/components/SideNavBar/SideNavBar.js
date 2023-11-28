import React from 'react';
import './SideNavBar.css';
import LogoImg from '../../../../assets/logo.svg';
import AccountImg from '../../../../assets/account.svg';
import HomeImg from '../../../../assets/home.svg';
import LogoutImg from '../../../../assets/logout.svg';
import ProfileImg from '../../../../assets/profile.svg';
import PropImg from '../../../../assets/prop.svg';
import SimpleImg from '../../../../assets/simple.svg';
import { Link, useNavigate } from 'react-router-dom';
import { UserService } from '../../../../services/user.service';
import { AuthService } from '../../../../services/auth.service';

export const SideNavBar = () => {
	const navigate = useNavigate();

	return(
		<div className="SideNavBar">
			<div className='p-4 text-left border-bottom'>
				<img src={LogoImg} alt='Logo' />
			</div>
			<div className='p-3'>
				<ul className='list-unstyled'>
					<li className='mt-2 p-2'>
						<Link className='link' to={'/account/admin/'+UserService.getCurrentUser()?.id} >
							<img src={HomeImg} alt='account' />
							<span className='ms-2'>Dashboard</span>
						</Link>
					</li>
					<li className='mt-2 p-2'>
						<Link className='link' to={'/account/admin/'+UserService.getCurrentUser()?.id+'/gestion/region'}>
							<img src={AccountImg} alt='account' />
							<span className='ms-2'>Gestion Region</span>
						</Link>
					</li>
					<li className='mt-2 p-2'>
						<Link className='link' to={'/account/admin/'+UserService.getCurrentUser()?.id+'/gestion/prop'}>
							<img src={PropImg} alt='account' />
							<span className='ms-2'>Propriétaire Pharmacie</span>
						</Link>
					</li>
					<li className='mt-2 p-2'>
						<Link className='link' to={'/account/admin/'+UserService.getCurrentUser()?.id+'/gestion/user'}>
							<img src={SimpleImg} alt='User' />
							<span className='ms-2'>Utilisateur Simple</span>
						</Link>
					</li>
				</ul>
			</div>

			<div className='p-3 BottomSection w-100'>
				<ul className='list-unstyled w-100'>
					<li className='mt-2 p-2'>
					   <Link className='link' to={''} >
							<img src={ProfileImg} alt='profile' />
							<span className='ms-2'>Profile</span>
					   </Link>
					</li>
					<li className='mt-2 p-2' onClick={() => AuthService.logout(navigate)}>
						<img src={LogoutImg} alt='logout' />
						<span className='ms-2'>Déconnexion</span>
					</li>
				</ul>
			</div>
		</div>
	)
	
}