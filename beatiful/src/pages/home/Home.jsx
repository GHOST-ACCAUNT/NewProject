import {
  Hero,
  Navbar,
  Partners,
  Services,
  Socielity,
} from "../../components/pages/home-components";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <Socielity />
    </div>
  );
};
