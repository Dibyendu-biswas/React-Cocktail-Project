import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import CocktailList from '../component/CocktailList';
import SearchForm from './SearchForm';
import { useQuery } from '@tanstack/react-query';
const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  
  const cocktailLoading=(searchItem)=>{
    return{
      queryKey:["search",searchItem || "all"],
      queryFn:async()=>{
        const response = await axios.get(`${cocktailSearchUrl}${searchItem}`) 
        console.log(response);
        return response.data.drinks
      }
    }
  }
export const loader=(queryClient)=>async({request})=>{
  const url = new URL(request.url)

  const searchItem=url.searchParams.get("search") || " ";
  await queryClient.ensureQueryData(cocktailLoading(searchItem))
  // const response = await axios.get(`${cocktailSearchUrl}${searchItem}`) 
  return {searchItem} /* drinks :response.data.drinks,*/
}
const Home = () => {
  const {searchItem}=useLoaderData()
  const {data:drinks}=useQuery(cocktailLoading(searchItem))
  return (
    <>
    <SearchForm searchItem={searchItem}/>
         <CocktailList drinks={drinks}/>
    </>
  )
}

export default Home