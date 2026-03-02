import './App.css'

const placeData = [
  {
    "name": "Pure Joy Toys",
    "desc": "An exciting 5e RPG supplement that heroically represents pre-Columbian American cultures and mythologies",
    "id": 1
  },
  {
    "name": "Otaku Cafe",
    "desc": "An exciting 5e RPG supplement that heroically represents pre-Columbian American cultures and mythologies",
    "id": 2
  }
]

function PlaceCard(props) {
  return (
  <div className="place-container">
    <div className="place-card">
      <h3>{props.place.name}</h3>
      <p>{props.place.desc}</p>
    </div>
  </div>
  )
}

function App() {
  return (
    <div className = "app-container">
      <h1>Cool spots in San Antonio</h1>
      <div className = "cards-grid">
        {placeData.map((place) => (
          <PlaceCard key={place.id} place={place}/>
        ))}
      </div>
    </div>
  )
}

export default App