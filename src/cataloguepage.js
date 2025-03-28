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
                <Button className="mt-5"size="lg" href="https://djanworks.s3.ap-southeast-2.amazonaws.com/Djan_Sportsground_Catalogue.pdf"
                target="_blank" rel="noopener noreferrer"
                style={{
                    backgroundColor: "#e1998c",
                    borderColor: "#e1998c",
                }}><b>Download</b></Button>
            </div>
            <div className="col-md-5 text-center text-start">
              <img
                className="img-fluid w-70 rounded"
                src="sportsground_catalogue.svg"
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