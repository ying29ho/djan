import "./App.css";
import Homepage from "./homepage";
import Homecarousel from "./homecarousel";
import Servicescarousel from "./servicescarousel";
import CataloguePage from "./cataloguepage";
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
        className="position-relative w-100"
        style={{
          background: "url('djan_aboutus.svg') center/cover no-repeat",
          height: "100vh",
        }}
      >
        {/* <img className="w-100" src="djan_about.svg" alt="About Us" /> */}
        {/* <h1 className="position-absolute top-30 start-30 display-1 text-right">ABOUT US</h1> */}
        {/* <br></br><br></br><h1 className="pe-5 display-1 text-left">ABOUT US</h1>
        <br></br><br></br>{" "}
        <h4 className="mx-5 ps-5 text-right">
          DJAN WORKS SDN BHD is a registered Class V ABCi construction company
          based in Negara Brunei Darussalam, with over 15 years of experience in
          Construction, Civil Engineering works, Property Maintenance, and
          Sports Ground Construction. At Djan Works, we’re dedicated to building
          excellence. We take pride in delivering quality construction works and
          property maintenance services.
        </h4> */}
      </div>
      <div
        id="about-past"
        className="position-relative w-100"
        style={{
          background: "url('djan_about_past.svg') center/cover no-repeat",
          height: "100vh",
        }}
      ></div>
      <div
        id="about-current w-100"
        className="position-relative"
        style={{
          background: "url('djan_about_current.svg') center/cover no-repeat",
          height: "100vh",
        }}
      ></div>
      {/* </Container> */}
      <div id="services">
        <Servicescarousel />
      </div>

      <div
        id="catalogue"
        // className="position-relative"
        // style={{
        //   ackground: "url('djan_catalogue.svg') center/cover no-repeat",
        //   height: "100vh",
        // }}
      >
        <CataloguePage />
        {/* <div id="catalogue">
        <img
          className="d-block w-100"
          src="djan_catalogue.svg"
          alt="Catalogue"
        /> */}

        {/* <div className="catalogue-container h-100 d-flex align items-center" >
          <div className="row w-100">

          <div className="col-md-5 empty-container"> 
          <img
                className="img-fluid w-30 rounded"
                src="sportsground_catalogue.png"
                alt="Djan Works Catalogue"
              />
              </div>
          </div>
        

        </div> */}
      </div>
      <div id="contact">
        <img
          className="d-block w-100"
          src="djan_contact.svg"
          alt="Contact Us"
        />
      </div>
    </div>
  );
}

export default App;
