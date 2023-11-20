import React, { Component } from 'react';
import './AdminHomePage.css';
import { SideNavBar } from '../../../common/components/SideNavBar/SideNavBar';

export const AdminHomePage = () => {

	return(
		<div className="GestionPropPage container-fluid p-0 m-0">
			<div className='d-flex'>
              <SideNavBar />
			  <div className='body mx-3 p-4'>
				 
				<h1>Hello from Admin home page</h1>
			  </div>
			</div>
		</div>
	)
}