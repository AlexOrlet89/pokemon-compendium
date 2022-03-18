import './Pokecard.css';

export default function PokeCard({
  pokemon,
  type_1,
  type_2,
  color_1,
  color_2,
  color_f,
  url_image,
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
      <p style={{ alignSelf: `flex-start` }}>
        {pokemon} <br></br>
        types: {type_1}, {type_2}
      </p>
      <img src={`${url_image}`} alt={`${url_image}`} />
    </div>
  );
}
