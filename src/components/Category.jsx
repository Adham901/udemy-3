import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Category({filterByCategory}) {

  const filteron =  (cat)=>{
    filterByCategory(cat)
  }
  return (
    <>
      <Row>
        <Col sm="12" className="d-flex justify-content-center">
          <div>
            <button onClick={()=> filteron("الكل") } type="button" className="btn btn-outline-success mx-2">
              الكل{" "}
            </button>
            <button onClick={()=> filteron("فطار") }  type="button" className="btn btn-outline-success mx-2">
              الفطار
            </button>
            <button onClick={()=> filteron("غدا") }  type="button" className="btn btn-outline-success mx-2">
              الغداء
            </button>
            <button onClick={()=> filteron("عشاء") }  type="button" className="btn btn-outline-success mx-2">
              العشاء
            </button>
          </div>
        </Col>
      </Row>
    </>
  );
}
