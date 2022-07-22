import {useEffect, useState} from 'react'

const CharacterCard = (props) => {
   const {getCharacters} = props
   const [character, setCharacter] = useState([])

  useEffect(()=>{
    getCharacters()
    .then(data => {
      setCharacter(data)
    })
  },[])

  return(
    <div>
      {
        character.map(item =>
        item ? 
        <article className="characterCard__Wrapper" key={item.id}>
          <div className="characterCard__ImgWrapper">
            <img src={item.image} alt="Beth's Mytholog" />
          </div>
          <div className="characterCard__ContentWrapper">
            <div className="section">
              <a href={item.url} rel="nofollow noopener noreferrer" target="_blank">
                <h2>{item.name}</h2>
              </a>
              <span className="status">
                <span className={item.status == "Alive" ? "status__icon--alive" : "status__icon" }></span>{item.status}
              </span>
            </div>
            <div className="section">
              <span className="text-gray">Last known location:</span>
              <p className="text-white">
              {item.location.name}
              </p>
            </div>
          </div>
        </article>
        :null)
      }
    </div>
  )
}

export default CharacterCard
