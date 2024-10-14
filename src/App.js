import {Container,Row,Col} from "react-bootstrap"
import {person}from './data'
import DatesCounts from "./components/DatesCounts";
import DataList from "./components/DataList";
import DataAction from "./components/DataAction";
import { useState, useEffect } from "react";

function App() {
  const [personData, setPersonData] = useState(person)
  const onDelete=()=>{
    setPersonData([])
  }
  const onViewData=()=>{
    setPersonData(person)
  }

  useEffect(() => {
    setPersonData([])
  
  }, [])
  




  return (
    <div className="font color-body py-5">
      <Container>

        <DatesCounts  person={personData}/>
        <DataList person={personData}/>
        <DataAction  deleteData={onDelete} viewData={onViewData}/>

      </Container>

 
    </div>
  );
}

export default App;
