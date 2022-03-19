import './Pokecard.css';

export default function PokeCard({
  pokemon,
  type_1,
  type_2,
  color_1,
  color_2,
  ability_1,
  ability_2,
  ability_hidden,
  url_image,
  id,
}) {
  return (
    <div
      className="pokecard"
      style={{
        backgroundColor: `${color_1}`,
        border: `${color_2} 5px solid`,
        borderRadius: `25px`,
      }}
    >
      <h2 style={{ color: `${color_1}`, WebkitTextStrokeColor: `${color_2}` }}>{id}</h2>
      <p style={{ alignSelf: `flex-start` }}>
        {pokemon} <br></br>
        types: {type_1}, {type_2} <br></br>
        abilities: {ability_1}, {ability_2}, {ability_hidden}
      </p>
      <img src={`${url_image}`} alt={`${url_image}`} />
    </div>
  );
}
