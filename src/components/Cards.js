import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Data from "../mock-data.json"
import {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
function AppCard() {
  const [query, setQuery] = useState("")
  const {t} = useTranslation()
  return (
    <>
    <Form className="d-flex" style={{margin:"1%"}}>
            <Form.Control
              type="search"
              placeholder={t("Enter Product Code")}
              className="me-2"
              aria-label="Search"
              onChange={event => setQuery(event.target.value)}
            />
            <Button variant="outline-danger">{t("Search")}</Button>
          </Form>
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
        <Card.Img variant="top" src={post.img} style={{width:"20%",paddingTop:"1%",paddingLeft:"1%"}}/>
        <Card.Body>
          <Card.Title>{t("Code")}: {post.code}</Card.Title>
        </Card.Body>
        <Card.Footer >
        <Card.Title>{t("Price")}: {post.price}</Card.Title>
        </Card.Footer>
      </Card>
      
    </CardGroup>
    ))
}
    </>
  );
}

export default AppCard;