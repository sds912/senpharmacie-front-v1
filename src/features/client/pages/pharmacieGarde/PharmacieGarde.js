import React from 'react'
import { NavBarTop } from '../../../common/components/NavBarTop/NavBarTop'
import HomeImg from '../../../../assets/home.svg';

function PharmacieGarde() {



  return (
    <div>
        <NavBarTop></NavBarTop>
        <div className='container-fluid  mt-6'>
<div class=" pt-6 list-group">
  <a href="#" class="list-group-item list-group-item-action"><img src={HomeImg} alt='account' />A second link item</a>
  <a href="#" class="list-group-item list-group-item-action">A third link item</a>
  <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
  <a class="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>
</div>
</div>
        
        
        </div>
  )
}

export default PharmacieGarde