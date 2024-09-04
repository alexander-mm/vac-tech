import { banner } from "../assets";

const Home = () => {
  return (
    <div id="home" className="relative w-full bg-cover bg-center py-52" style={{ backgroundImage: `url(${banner})` }}>
        <div className="text-end font-nunito uppercase font-bold text-white text-4xl text-shadow-lg pr-20">
          <h1 className="pr-72">A good choice changes everything.</h1>
          <h1>Our products become opportunities.</h1>
        </div>
    </div>
  );
};

export default Home;
