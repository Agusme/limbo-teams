import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "../components/PostCard";
import Search from "../components/Search";
import AOS from "aos"; 
import "aos/dist/aos.css"; 

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    AOS.init(); 
  }, []);
  return (
    <>
      <div
        className="img-banner d-flex text-white p-5"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="d-flex justify-content-center align-items-center flex-column w-100">
          <h1
            className="display-4 text-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Blog de Usuarios
          </h1>
          <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" className="text-center">
            Descubre las ideas y pensamientos compartidos por nuestros usuarios
          </h3>
          <Search setSearchTerm={setSearchTerm} />
        </div>
      </div>
      <Container className="text-center justify-content-center align-content-center">
        <div className="bg-container-card mt-3 rounded-3">
          <Card searchTerm={searchTerm} />
        </div>
      </Container>
    </>
  );
};

export default Home;
