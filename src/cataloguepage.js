import Button from 'react-bootstrap/Button';

function CataloguePage(){
    return(
        <div
        id="catalogue"
        className="position-relative"
        style={{
          background: "url('djan_catalogue.svg') center/cover no-repeat",
          height: "100vh",
        }}
      >
        <div className="catalogue-container h-100 d-flex align-items-center">
          <div className="row w-100">
            <div className="col-md-1 empty-container"> </div>
            <div className="col-md-4 button-container"> 
                <Button className="mt-5"size="lg" href="https://dev.djanworks.com/djan_sportsground_catalogue.pdf"
                style={{
                    backgroundColor: "#e1998c",
                    borderColor: "#e1998c",
                }}><b>Download</b></Button>
            </div>
            <div className="col-md-5 text-center text-start">
              <img
                className="img-fluid w-70 rounded"
                src="sportsground_catalogue.png"
                alt="djan catalogue"
              />
            </div>
            <div className="empty-container col-md-2 text-justify">
              
            </div>
          
          </div>
        </div>
      </div>
    )
}
export default CataloguePage;