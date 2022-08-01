

import { useState } from 'react';
import './navbar.scss';


const MainNavbar = () => {
  var [data, setdata] = useState(false)
    return (<><div className="navbar-real" >
      <div className="container-real">
        <p>calcue</p>
        <p>contact us:</p>
        <p>email us:</p>
        </div>
    </div></>);
}
 
export default MainNavbar;