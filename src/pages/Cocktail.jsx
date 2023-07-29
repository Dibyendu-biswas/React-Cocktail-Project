import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { Link, Navigate, useLoaderData, useRouteError } from 'react-router-dom';
const singleCocktailUrl =
'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

  const singleCocktailLoading=(id)=>{
    return{
      queryKey:[id],
      queryFn:async()=>{
        const {data} = await axios.get(`${singleCocktailUrl}${id}`)
        return data
      }
    }
  }
  export const loader =(queryClient) => async({params})=>{
    const {id}= params
    // const {data} = await axios.get(`${singleCocktailUrl}${id}`)
    await queryClient.ensureQueryData(singleCocktailLoading(id))
    return {id}
  }
 const Cocktail =() => { 
  const {id }=useLoaderData()
  const {data}=useQuery(singleCocktailLoading(id))
  // if (!data) return <h2>something went wrong....</h2>
  if(!data) return <Navigate to={"/"}/>
  const singleDrink =data.drinks[0]
  console.log(singleDrink);
const {strDrink:name,strGlass:glass,strDrinkThumb:image,strCategory:category,strAlcoholic:info,strInstructions:instructuion}=singleDrink
  return (
    <section className='cocktail'>
      <header >
     <button className='btn'>
     <Link to={"/"}>Back to Home</Link>
     </button>
      <h3>{name}</h3>
      </header>
      <div className='data'>
        <img src={image} className='img' alt={name} />
        <div className='cocktail'>
          <p className='peragraph'><span>name : </span>{name}</p>
          <p className='peragraph'><span>category : </span>{category}</p>
          <p className='peragraph'><span>info : </span>{info}</p>
          <p className='peragraph'><span>instruction : </span>{instructuion}</p>
        </div>
      </div>
    </section>
  )
}

export default Cocktail
