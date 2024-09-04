import { useEffect, useState } from "react";
import Item from "../Item/Item";


const Items = ({item}) => {
 const [items, setItems]  = useState([]);

 useEffect(() =>{
    fetch('fakedata.json')
    .then(res => res.json())
    .then(data => setItems(data))
 })


    return (
        <div className="md:w-2/3 grid md:grid-cols-2 mt-10 gap-5">
          

            {

                items.map(item  =>  <Item  key={item.id}  item = {item}></Item>)
            }
          

        </div>
    );
};

export default Items;