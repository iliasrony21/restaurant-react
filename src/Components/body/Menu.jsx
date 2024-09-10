import { Component } from 'react'
import Dishes from '../../data/dishes'
import MenuItem from './MenuItem'
import DishDetails from './DishDetails'
class Menu extends Component {
    state ={
        dishes : Dishes,
        dishDetails : null
    }

    onDishChange = (dish) =>{
        this.setState({
            dishDetails : dish,
        })
    }
    render() {
        const allDishes = this.state.dishes.map( item =>{
             return(
                <MenuItem item={item} key={item.id} disDetail = {()=>this.onDishChange(item)}></MenuItem>
             )
        });

        let details = null;
        if(this.state.dishDetails != null){
               details = <DishDetails dish = {this.state.dishDetails} />

        }
        return(
            <div className='container'>
                <div className="row">
                    <div className="col-6 col-md-6">
                        {allDishes}
                    </div>
                    <div className="col-6 col-md-6">
                        {details}
                    </div>
                </div>
            </div>
        )
    }
}
export default Menu