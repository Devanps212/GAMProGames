import Category from "../components/home/category";
import Hero from "../components/home/hero";

const Home = () => {
  return (
    <div className="bg-linear-to-b from-gray-900 to-gray-600 py-5">
      <div className="max-w-11/12 mx-auto">
        <Hero />
        <Category />
      </div>
    </div>
  );
};

export default Home;
