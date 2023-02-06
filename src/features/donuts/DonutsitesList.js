import { Col, Row } from 'reactstrap';
//import { DONUTSITES } from '../../app/shared/DONUTSITES';
import DonutsiteCard from "./DonutsiteCard";
import { selectAllDonutsites } from './donutsitesSlice';


const DonutsitesList = () => {
  const donutsites = selectAllDonutsites();

  return (
    <Row className='ms-auto'>
      {donutsites.map((donutsite) => {
        return (
          <Col 
            md='3' 
            className='m-4' 
            key={donutsite.id}>
            <DonutsiteCard donutsite={donutsite} />
          </Col>
        );
      })}
    </Row>
  );
};



export default DonutsitesList;
