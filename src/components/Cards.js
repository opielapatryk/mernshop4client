import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Data from "../mock-data.json"
import {useState} from "react";
function AppCard() {
  const [query, setQuery] = useState("")
  return (
    <>
    <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} />
{
  Data.filter(post => {
    if (query === '') {
      return post;
    } else if (post.code.toLowerCase().includes(query.toLowerCase())) {
      return post;
    }
  }).map((post, index) => (
  <CardGroup>
      <Card  key={index}>
        <Card.Img variant="top" src={post.img} style={{width:"20%"}}/>
        <Card.Body>
          <Card.Title>Code: {post.code}</Card.Title>
          <Card.Title>Price: {post.price}</Card.Title>
        </Card.Body>
        <Card.Footer >
          <small className="text-muted">999$</small>
        </Card.Footer>
      </Card>
      
    </CardGroup>
    ))
}
    </>
  );
}

export default AppCard;