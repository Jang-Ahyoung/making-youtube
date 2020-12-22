import React from 'react';
import Meal from './meal';

const Meals = (props) => (
        <ul>

            {props.meals.map(meal =>(
            
                <Meal meal={meal}/>
            ))}
        </ul>
    );

export default Meals;