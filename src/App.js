import "./App.css";
import Homepage from "./homepage";
import Homecarousel from "./homecarousel";
import Servicescarousel from "./servicescarousel";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Homepage />
      <div className="home" id="home">
        {/* <header className="App-header"> */}
        <Homecarousel />

        {/* </header> */}
      </div>
      {/* <Container> */}

      <div
        id="about"
        className="position-relative"
        style={{
          background: "url('djan_about.svg') center/cover no-repeat",
          height: "100vh",
        }}
      >
        {/* <img className="w-100" src="djan_about.svg" alt="About Us" /> */}
        {/* <h1 className="position-absolute top-30 start-30 display-1 text-right">ABOUT US</h1> */}
        <h1 className="display-1 text-left">ABOUT US</h1>
        <h6 className="display-6 text-right">
          DJAN WORKS SDN BHD is a registered Class V ABCi construction company
          based in Negara Brunei Darussalam, with over 15 years of experience in
          Construction, Civil Engineering works, Property Maintenance, and
          Sports Ground Construction. At Djan Works, we’re dedicated to building
          excellence. We take pride in delivering quality construction works and
          property maintenance services.
        </h6>
      </div>
      {/* </Container> */}
      <div id="services">
        <Servicescarousel />
      </div>
      <div id="catalogue">
      <img className="d-block w-100" src="djan_catalogue.svg" alt="Catalogue" />
      </div>
      <div id="contact">
      <img className="d-block w-100" src="djan_contact.svg" alt="Contact Us" />
      </div>
    </div>
  );
}

export default App;
