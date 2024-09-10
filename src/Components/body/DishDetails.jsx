import React from 'react'
import Comments from './Comments'

const DishDetails = (props) => {
    // console.log(props);
  return (
    <div>
        <div className="card p-2" style={{ width: '18rem',marginTop:'10px',textAlign: 'left' }}>
        <img src={props.dish.image} className="card-img-top" alt={props.dish.name} />
        <p className='px-2'>{props.dish.name}</p>
        <p>{props.dish.price}</p>
        <p>{props.dish.description}</p>
        <Comments comment = {props.dish.comments} />
      </div>
    </div>
  )
}

export default DishDetails