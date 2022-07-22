import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {getCharacter} from '../services/characters'

const CharacterDetailPage = () => {
  const [user, setUser] = useState([])
  const {id} = useParams()

  useEffect(()=>{
    getCharacter(id)
    .then(data =>
      setUser(data)
      )
  },[])

  return(
    <div>
      <h1>{user.name}</h1>

       <p>{user.name}</p>
    </div>
  )
}

export default CharacterDetailPage
