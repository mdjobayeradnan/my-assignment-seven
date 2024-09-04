import { MdOutlineWatchLater } from "react-icons/md";

import { FaGripfire } from "react-icons/fa";



const Item = ({item}) => {

    const {recipe_name ,recipe_image,short_description,ingredients,preparing_time,calories} = item;
    
    return (
        <div className="space-y-4 mb-5 h-[650px] border-2 boreder-state-200 rounded-lg pt-5 px-7">
          <img src={recipe_image}alt="" />
            <h1>{recipe_name}</h1>
            <h1 className="w-[350px]">{short_description}</h1>
            <hr />
            <div>
                <h1>ingredients:{ingredients.length}</h1>
                
                    <li> 550 g chicken</li>
                    <li> 120 ml soy sauce</li>           
          
           
          
                    <li>50 g chili flakes</li>
                    <li>400 g mushroom</li>
                
            </div>
<hr />

<div className="flex justify-around">
<h1 className="flex items-center gap-3"><span><MdOutlineWatchLater></MdOutlineWatchLater>

</span>{preparing_time}</h1>
<h1 className="flex items-center gap-3"> <span><FaGripfire></FaGripfire></span>{calories}</h1>
</div>



<button className="bg-green-500 rounded-full w-[150px]">Want to Cook</button>

        </div>
    );
};

export default Item;