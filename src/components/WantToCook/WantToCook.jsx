import React from 'react';
import PropTypes from 'prop-types';

const WantToCook = ({wantToCook}) => {
    const {recipe_id,recipe_name,preparing_time,calories} = wantToCook;
    return (
        <div className='flex h-[50px] items-center border-2 text-start w-[400px] text-sm  space-x-2'>
            <h1>{recipe_id}</h1>
        <h2 className='w-[170px]'>{recipe_name}</h2>
        <h2 className='w-[130px]'>{preparing_time}</h2>
        <h2 className='w-[100px]'>{calories}</h2>
        <button className='bg-green-400 rounded-lg text-base p-2'>Preparing</button>
        </div>
    );
};

WantToCook.propTypes = {
    wantToCook: PropTypes.object
}
export default WantToCook;