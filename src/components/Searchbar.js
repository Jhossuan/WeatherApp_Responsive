import React from 'react'
import { Input } from '../styles/Card.style'

const Searchbar = ({setCiudad, ciudad, search}) => {
  return (
    <div>
            <Input
            value={ciudad}
            onKeyPress={search}
            onChange={(e)=>setCiudad(e.target.value)}
            type='text' 
            placeholder='Buscar ciudad...'
            className='input-form'
            />
    </div>
  )
}

export default Searchbar