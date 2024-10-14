import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DataList = ({person}) => {
  return (
    <div>
     <Row className="justify-content-center ">
        <Col sm="8" className="">
         <div className="rectangle">
         {person.length ? (person.map((item)=>{
          return (
            <div key={item.id} className="p-2 d-flex border-bottom m-3">
          <img src={item.img} className="img-avatar" alt="person"/>
          <div className="px-3">
            <p className="fs-5 d-inline">{item.name}</p>
            <p className="fs-6">{item.date}</p>
          </div>

         </div>
)

         })): <h2 className="text-center pt-5">لا يوجد بيانات</h2>}




         </div></Col>

        </Row>
    </div>
  )
}

export default DataList
