import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import pb10 from './images/3p b 10.jpg'
import a9d56610 from './images/a9d56610.jpg'
import adatm60ka3pr from './images/ad-atm60-ka3pr.jpg'
import bimuntap6 from './images/bim-unt-ap6x.jpg'
function AppCard() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={pb10} />
        <Card.Body>
          <Card.Title>Legrand</Card.Title>
          <Card.Title>3p b 10</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">999$</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={a9d56610}/>
        <Card.Body>
          <Card.Title>Schneider Electric</Card.Title>
          <Card.Title>a9d56610</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">777$</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={adatm60ka3pr}/>
        <Card.Body>
          <Card.Title>Sick</Card.Title>
          <Card.Title>adatm60ka3pr</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">927$</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={bimuntap6}/>
        <Card.Body>
          <Card.Title>Turck</Card.Title>
          <Card.Title>bimuntap6</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">2913$</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default AppCard;