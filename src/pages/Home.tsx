import homeImage from "../assets/img/homeImage.jpg";

function Home() {
  return (
    <>
      <img className=" " src={homeImage} alt="" />

      <div className="pt-6">
        <h1 className=" text-2xl font-Bold  ">Welcome to wizard Js</h1>
      </div>
      <div className="pt-4">
        <p>
          the north and the Atlantic Ocean to the west, and has land borders
          with Algeria to the east, and the disputed territory of Western Sahara
          to the south. Morocco also claims the Spanish exclaves of Ceuta,
          Melilla and Peñón de Vélez de la Gomera, and several small
          Spanish-controlled islands off its coast.[15] It spans an area of
          446,300 km2 (172,300 sq mi)[16] or 710,850 km2 (274,460 sq mi),[b]
          with a population of roughly 37 million. Its official and predominant
          religion is Islam, and the official languages are
        </p>
      </div>
    </>
  );
}

export default Home;
