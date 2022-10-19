import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
function AppCard() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src='./images/3p b 10.jpg' />
        <Card.Body>
          <Card.Title>Legrand</Card.Title>
          <Card.Title>3p b 10</Card.Title>
        </Card.Body>
        <Card.Footer >
          <small className="text-muted">999$</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src='./images/a9d56610.jpg'/>
        <Card.Body>
          <Card.Title>Schneider Electric</Card.Title>
          <Card.Title>a9d56610</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">777$</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src='./images/ad-atm60-ka3pr.jpg'/>
        <Card.Body>
          <Card.Title>Sick</Card.Title>
          <Card.Title>adatm60ka3pr</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">927$</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src='./images/bim-unt-ap6x.jpg'/>
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