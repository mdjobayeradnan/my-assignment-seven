import { useEffect, useState } from "react";
import Item from "../Item/Item";


const Items = ({item, CookTime, wantToCooks}) => {
 const [items, setItems]  = useState([]);

 useEffect(() =>{
    fetch('fakedata.json')
    .then(res => res.json())
    .then(data => setItems(data),[])
 })


    return (
        <div className="md:w-[840px] gap-5 grid md:grid-cols-2 mt-10 border-2 border-green-300 md:mx-auto">
          

            {

                items.map(item  =>  <Item  key={item.id}  wantToCooks ={wantToCooks}    CookTime ={CookTime}  item = {item}></Item>)
            }
          

        </div>
    );
};

export default Items;