import { Component } from 'react'
import Dishes from '../../data/dishes'
import MenuItem from './MenuItem'
class Menu extends Component {
    state ={
        dishes : Dishes
    }
    render() {
        const allDishes = this.state.dishes.map( item =>{
             return(
                <MenuItem item={item} key={item.id}></MenuItem>
             )
        })
        return(
            <div className='container'>
                <div className="row">
                    <div className="col-6 col-md-4">
                        {allDishes}
                    </div>
                </div>
            </div>
        )
    }
}
export default Menu