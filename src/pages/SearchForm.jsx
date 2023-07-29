import React from 'react'
import { useNavigation ,Form} from 'react-router-dom'

const SearchForm = ({searchItem}) => {
    const navigation = useNavigation()
    const isSubmit = navigation.state==="submitting"
  return (
<div className="searchForm">
<Form className='form'>
        <input type="search" placeholder='cocktail' className='form-input' name='search' defaultValue={searchItem} />
        <button type='submit' className='btn' disabled={isSubmit}>
            {isSubmit ?"submitting....":"submit"}
        </button>
    </Form>
</div>
  )
}

export default SearchForm