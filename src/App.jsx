import './App.css'

const placeData = [
  {
    "name": "Pure Joy Toys",
    "desc": "Store stocked with Funko Pops, trading card games, small business merch and video games.",
    "id": 1,
    "img": "src/assets/purejoytoys.jpg",
    "website": "https://www.facebook.com/purejoytoys/"
  },
  {
    "name": "Otaku Cafe",
    "desc": "Anime store featuring an array of action figures and collectibles, plus an arcade with fighting games.",
    "id": 2,
    "img": "src/assets/otakucafe.jpg",
    "website": "https://rrotakucafe.com/"
  },
  {
    "name": "Craftiques",
    "desc": "A marketplace showcasing handcrafted goods, gifts, collectibles, jewelry, and antiques.",
    "id": 3,
    "img": "src/assets/craftiques.jpg",
    "website": "https://craftiquesmall.com/"
  },
  {
    "name": "Anime Tokyo",
    "desc": "Retailer offering a selection of anime figures, as well as model kits and an arcade.",
    "id": 4,
    "img": "src/assets/animetokyo.png",
    "website": "https://animetokyosa.com/"
  },
  {
    "name": "Movie Exchange",
    "desc": "Retailer with listening stations that buys, sells & trades resale DVDs, CDs & video games.",
    "id": 5,
    "img": "src/assets/movieexchange.jpg",
    "website": "https://cdexchange-sa.com/"
  },
  {
    "name": "Traders Village",
    "desc": "Massive outdoor flea market with shopping, special events, rides & food vendors.",
    "id": 6,
    "img": "src/assets/tradersvillage.jpg",
    "website": "https://tradersvillage.com/san-antonio/"
  },
    {
    "name": "Dragon's Lair",
    "desc": "Spacious store stocking comics, games & models, with tables for play plus event nights.",
    "id": 7,
    "img": "src/assets/dragonslair.jpg",
    "website": "https://www.dlair.net/"
  },
  {
    "name": "Shenanigans",
    "desc": "Laid-back spot for card games, tournaments and gaming computers with snacks and drinks.",
    "id": 8,
    "img": "src/assets/shenanigans.jpg",
    "website": "https://www.shenanigansgaming.com/"
  },
  {
    "name": "Half Price Books",
    "desc": "Family-owned chain that sells secondhand books as well as movies & music in various formats.",
    "id": 9,
    "img": "src/assets/halfpricebooks.jpg",
    "website": "https://www.hpb.com/"
  },
  {
    "name": "Game Over Videogames",
    "desc": "Independent store specializing in the buying, selling, and trading of new and used video games.",
    "id": 10,
    "img": "src/assets/gameovervideogames.jpg",
    "website": "https://gameovervideogames.com/"
  },
  {
    "name": "Bytes Cafe",
    "desc": "Cyber cafe where caffeine, bites, & gaming collide. Great vibes & even greater company.",
    "id": 11,
    "img": "src/assets/bytescafe.jpg",
    "website": "https://bytescafesa.com/"
  },
  {
    "name": "Ironside Antiques Mall",
    "desc": "Local antiques mall with more than 50 vendors offering furniture, jewelry & collectibles.",
    "id": 12,
    "img": "src/assets/ironsideantiquesmall.jpg",
    "website": "https://www.facebook.com/Ironsidemall/"
  }
]

function PlaceCard(props) {
  const handleClick = () => {
    window.open(props.place.website, "_blank");
  }
  return (
  <div className="place-container">
    <div className="place-card" onClick={handleClick}>
      <img src={props.place.img} alt={props.place.name}/>
      <h3>{props.place.name}</h3>
      <p>{props.place.desc}</p>
    </div>
  </div>
  )
}

function App() {
  return (
    <div className = "app-container">
      <h1>Hobby shops in San Antonio</h1>
      <h3>These are some of my favorite spots in San Antonio. These places have video games, trading card games, and antiques!
        <br></br>Click on a shop to view its website.
      </h3>
      <div className = "cards-grid">
        {placeData.map((place) => (
          <PlaceCard key={place.id} place={place}/>
        ))}
      </div>
    </div>
  )
}

export default App