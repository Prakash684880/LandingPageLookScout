import DemonstrateCard from "../Component/DemonstrateCard";
import Faq from "../Component/Faq";
import Footer from "../Component/Footer";
import Hero from "../Component/Hero"
import Message from "../Component/Message"
import Team from "../Component/Team";
import WelcomeBanner from "../Component/WelcomeBanner";


const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Message />
      <DemonstrateCard/>
      <Team/>
      <Faq/>
      <WelcomeBanner/>
      <Footer/>
    </div>
  );
}

export default Home;