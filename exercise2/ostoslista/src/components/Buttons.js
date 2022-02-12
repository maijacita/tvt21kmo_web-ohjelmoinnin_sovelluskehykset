import React from 'react';

export default function Buttons(props) {
  return <div>
          <button className="itemButtons" onClick={ ()=> props.clickMe(1) } >Add Koff</button>
          <button className="itemButtons" onClick={ ()=> props.clickMe(2) }>Add Sandels</button>
          <button className="itemButtons" onClick={ ()=> props.clickMe(3) }>Add Karhu</button>
          <button className="itemButtons" onClick={ ()=> props.clickMe(4) }>Add Omenasiideri</button>
  </div>;
}
