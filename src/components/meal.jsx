import React from 'react';

const Meal = (props) => (
    <>
        <p>{props.meal.mealDate}</p>
        <p>{props.meal.codeNm}</p>
        <p>{props.meal.mealNm}</p><br/>
    </>
        
    );

export default Meal;