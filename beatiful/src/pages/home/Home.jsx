import {
  Hero,
  Navbar,
  Partners,
  Services,
  Socielity,
  Testimonial,
} from "../../components/pages/home-components";
import { Know } from "../../components/pages/home-components/know";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <Socielity />
      <Testimonial />
      <Know />
    </div>
  );
};
