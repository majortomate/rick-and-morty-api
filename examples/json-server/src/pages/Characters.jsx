import CharacterCard from '../components/CharacterCard'

const CharactersPage = (props) => {
  const {getCharacters} = props

  // Effect to fetch the characters from the API

  return(
    <div className="App-header">
      <h1>CharacterDetailPage</h1>
      <section className="showcase__Wrapper">
        <section className="showcase__Inner">
          <CharacterCard getCharacters={getCharacters}/>
        </section>
      </section>
    </div>
  )
}

export default CharactersPage
