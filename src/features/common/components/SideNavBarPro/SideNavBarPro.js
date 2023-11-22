import React from 'react';
import './SideNavBarPro.css';
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

export const SideNavBarPro = () => {
	const navigate = useNavigate();

	return(
		<div className="SideNavBarPro">
			<div className='p-4 text-left border-bottom'>
				<img src={LogoImg} alt='Logo' />
			</div>
			<div className='p-3'>
				<ul className='list-unstyled'>
					<li className='mt-2 p-2'>
						<Link className='link' to={'/account/partner/'+UserService.getCurrentUser()?.id} >
							<img src={HomeImg} alt='account' />
							<span className='ms-2'>Dashboard</span>
						</Link>
					</li>
					<li className='mt-2 p-2'>
						<Link className='link' to={'/account/partner/'+UserService.getCurrentUser()?.id+'/listMesPharmacie'}>
							<img src={PropImg} alt='account' />
							<span className='ms-2'>Gestion pharmacie</span>
						</Link>
					</li>
					<li className='mt-2 p-2'>
						<Link className='link' to={'/account/partner/'+UserService.getCurrentUser()?.id+'/listAgentPharmacie'}>

							<img src={AccountImg} alt='account' />
							<span className='ms-2'>Gestion Agent de ma pharmacie</span>
						</Link>
					</li>
					<li className='mt-2 p-2'>
						<Link className='link' to={'/account/partner/'+UserService.getCurrentUser()?.id+'/listMedicament'}>

							<img src={PropImg} alt='account' />
							<span className='ms-2'>Gestion medicament</span>
						</Link>
					</li>
					<li className='mt-2 p-2'>
						<Link className='link' to={'/account/partner/'+UserService.getCurrentUser()?.id+'/listeCategorie'}>
							<img src={PropImg} alt='account' />
							<span className='ms-2'>Gestion Categorie</span>
						</Link>
					</li>
					<li className='mt-2 p-2'>
						<Link className='link' to={'/chat'} >
							<img src={SimpleImg} alt='User' />
							<span className='ms-2'>Chat</span>
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
					<li className='mt-2 p-2 link' onClick={() => AuthService.logout(navigate)}>
						<img src={LogoutImg} alt='logout' />
						<span className='ms-2 '>Déconnexion</span>
					</li>
				</ul>
			</div>
		</div>
	)
	
}