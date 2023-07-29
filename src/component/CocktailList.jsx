import React from 'react'
import CocktailCard from './CocktailCard'

const CocktailList = ({drinks}) => {
    if(!drinks){
        return <h2 style={{textAlign:"center"}}>Cocktails are not Matching....</h2>
    }
    const formateDrinks=drinks.map((item)=>{
        const {idDrink,strGlass,strDrinkThumb,strAlcoholic,strDrink}=item
        return {
            id:idDrink,
            glass: strGlass,
            image: strDrinkThumb,
            info: strAlcoholic,
            name:strDrink
        }
    })
  return (
    <>
   <div className='cocktailList'>
   {
        formateDrinks.map((item)=>{
            return <CocktailCard key={item.id} {...item}/>
        })
    }
   </div>
    </>
  )
}

export default CocktailList