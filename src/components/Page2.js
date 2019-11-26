import React from 'react';
import logo from '../logo.svg';

const Page2 = ({onRouteChange}) => {
   return (
      <div>
         <header className="tc pv4 pv5-ns">
            <img src={logo} className="br-100 pa1 ba b--black-10 h3 w3" alt="avatar" />
            <h1 className="f5 f4-ns fw6 mid-gray">Code Splitting</h1>
            <h2 className="f6 gray fw2 ttu tracked">Page 2</h2>
         </header>
         <div className='tc ph3'>
            <button className='f6 link dim br2 ph3 pv2 mb2 dib white bg-mid-gray' onClick={() => onRouteChange('page1')}>Page1</button>
            <button className='f6 link dim br2 ph3 pv2 mb2 dib white bg-mid-gray' onClick={() => onRouteChange('page3')}>Page3</button>
         </div>
      </div>
   )
}

export default Page2;