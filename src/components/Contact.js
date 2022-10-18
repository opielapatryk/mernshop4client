import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AppNavBar from './Navbar'
function Contact() {
  return (
    <>
    <AppNavBar></AppNavBar>
    <div style={{backgroundColor:'white',color:"#282c34"}}>
    <div className="ContactInfo">
        <h1 style={{textAlign:"center", paddingTop:"1%"}}>
            Contact with us!
        </h1>
        <ul style={{listStyleType: "none",marginLeft: "3%"}}>
            <li>
                <h3>Poland</h3>
            </li>
            <li>
                <h5 style={{display:"inline"}}>St: </h5>Inwalidów Wojennych 10
            </li>
            <li>
                <h5 style={{display:"inline"}}>City: </h5>Jaworzno 43-600
            </li>
            <li>
                <h5 style={{display:"inline"}}>TIN: </h5>123123123
            </li>
            <li>
                <h5 style={{display:"inline"}}>Phone Nr: </h5>782782782
            </li>
            <li>
              <h5 style={{display:"inline"}}>Allegro: </h5><a href='https://allegro.pl/uzytkownik/GPAutomatic' rel="noopener noreferrer" target={"_blank"}>GP Automatic</a>
            </li>
            <li>
              <h5 style={{display:"inline"}}>Ebay: </h5><a href='https://www.ebay.com/' rel="noopener noreferrer" target={"_blank"}>GP Automatic</a>
            </li>
        </ul>
      </div>
      <div className="ContactForm" style={{marginLeft: "3%",marginRight:"3%"}}>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{fontWeight:"bold"}}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label style={{fontWeight:"bold"}}>Message</Form.Label>
        <Form.Control type="text" placeholder="Message" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="danger" type="" onClick={callApi} style={{marginBottom:"3%"}}>
        Submit
      </Button>
    </Form>
      </div>
    </div>
     
    </>
     
  );
}
function callApi() {
    fetch('https://mernshop4server.herokuapp.com/', { method: 'GET' })
        .then(data => data.json())
        .then(json => alert(JSON.stringify(json)))
}
export default Contact;