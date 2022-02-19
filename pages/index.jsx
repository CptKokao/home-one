import Header from "../components/Header/Header";
import Nav from "../components/nav/nav";
import Hero from "../components/hero/hero";
import Gallery from "../components/gallery/gallery";
import Adv from "../components/adv/adv";

const Home = () => {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Hero />
        <Adv />
        <Gallery />
      </main>

    </>
  )
}

export default Home;