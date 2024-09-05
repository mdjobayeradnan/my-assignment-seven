import React from 'react';
import PropTypes from 'prop-types';
import WantToCook from '../WantToCook/WantToCook';

const WantToCooks = ({wantToCooks}) => {
    return (
    
  <div className='w-[400px]'>
              <h1 className='text-center mt-10'>Want to cook: {wantToCooks.length}</h1> 
             

            <div
     className=' flex  w-[300px] px-3 space-x-3 text-sm  text-start mt-5'>
                    <h1 className='w-[166px]'>Name</h1>
                    <h1 className='w-[130px]'>Time</h1>  
                    <h1 className='w-[100px]'>Calories</h1>                 
                
            </div>

               {
                wantToCooks.map(wantToCook =><WantToCook  key={wantToCook.id}   wantToCook = {wantToCook}></WantToCook> )
               }
   
             
        </div>
        
    );
};

WantToCooks.propTypes ={
    CookTime:PropTypes.func,
    wantToCooks:PropTypes.array
}

export default WantToCooks;