import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DatesCounts = ({person}) => {
  return (
    <div>
        <Row className="justify-content-center ">
          <Col sm="8">
          لديك {person.length} مواعيد
          </Col>
        </Row>
    </div>
  )
}

export default DatesCounts
