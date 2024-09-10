import React from 'react'
import dateFormat from "dateformat";
const Comments = (props) => {
    return (
  
            props.comment.map(item => {
                return(
                    <div key={item.id} className=''>
                        <h5>Author: { item.author }</h5>
                        <h5> Rating: { item.rating }</h5>
                        <h5> Comment: { item.comment }</h5>
                        <h5>Date: {dateFormat(item.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")  }</h5>

                    </div>
                )
            })
    )
}

export default Comments
