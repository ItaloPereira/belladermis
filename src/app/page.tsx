import Button from "@/ui/components/button";
import IconButton from "@/ui/components/icon-button";

import { FaWhatsapp } from "react-icons/fa";

const HomePage = () => {
  return (
    <main>
      <h1>Home Page</h1>
      <Button href="#" animated>Random text</Button>
      <IconButton ariaLabel="test"><FaWhatsapp /></IconButton>
    </main>
  );
}

export default HomePage;