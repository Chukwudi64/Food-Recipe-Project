import Card from './component/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Recipe() {
    const [recipe, setrecipe] = useState("") //useState is used to store data at a particular time
    console.log(recipe);

    useEffect(()=>{ //UseEffect it's used to call a state on each reload and am using it to fetch data frm d backend and set d response am getting to the useState
        axios.get('http://localhost:8000/api/fetchrecipe')
        .then(response => {
            console.log(response.data)
            setrecipe(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    },[])
  return (
    <div>
        {
            recipe ? recipe.map((recipes, index) => // recipe frm line 7 will map through our card and supply it with data frm d recipe
            <Card recipes={recipes} key={index}/> 
        ): "no recipes"
        }
        
    </div>
  )
}

export default Recipe