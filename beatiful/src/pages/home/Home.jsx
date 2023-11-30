import {
  Hero,
  Navbar,
  Partners,
  Services,
} from "../../components/pages/home-components";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partners />
      <Services />
    </div>
  );
};
