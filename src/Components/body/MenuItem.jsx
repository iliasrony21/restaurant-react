import React from 'react';

const MenuItem = (props) => {
//   console.log(props);
  return (
      <div className="card" style={{ width: '18rem',marginTop:'10px' }}>
        <img src={props.item.image} className="card-img-top" alt={props.item.name} />
        <p onClick={props.disDetail} className='px-2'>{props.item.name}</p>
      </div>
  );
}

export default MenuItem;
