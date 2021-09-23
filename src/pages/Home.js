import Games from "../components/Games"
import Logo from "../components/Logo"
import Navigation from "../components/Navigation"

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Logo />
      <Games />
    </div>
  )
}

export default Home