import React from 'react';

const MenuItem = (props) => {
  console.log(props);
  return (
      <div className="card" style={{ width: '18rem',marginTop:'10px' }}>
        <img src={props.item.image} className="card-img-top" alt={props.item.name} />
        <div className="card-body">
          <h5 className="card-title">{props.item.name}</h5>
          <p className="card-text">{props.item.description}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
  );
}

export default MenuItem;
