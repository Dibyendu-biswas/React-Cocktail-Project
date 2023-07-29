import React from 'react'
import { Link } from 'react-router-dom'

const CocktailCard = ({ name, id, image, glass, info }) => {
  return (
    <article className='cocktailCard'>
        <div className='img-container'>
          <img src={image} alt={name} />
        </div>
        <div className='footer'>
          <h4>{name}</h4>
          <h5>{glass}</h5>
          <p>{info}</p>
          <Link to={`/cocktail/${id}`} className='btn '>details</Link>
        </div>
    </article>
  )
}

export default CocktailCard