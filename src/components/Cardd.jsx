import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function Cardd({itemsData}) {
  return (
    <>
      <Row className="mt-3">

     {
      itemsData.length >=1 ? (itemsData.map((item, index)=>{

       return(
        <Col key={index} sm="12">
        <Card border="success" className="d-flex flex-row m-1">
          <Card.Img className="img-card" variant="top" src={item.imgUrl} />
          <Card.Body>
            <Card.Title className="d-flex justify-content-between">
              <div className="btn-nav">{item.title}</div>
              <div className="btn-nav">{item.price}</div>
            </Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
       )



      }))
       : <h3>لايوجد اصناف</h3>
     }



     
      </Row>
    </>
  );
}
