import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectDonutsiteById } from '../features/donuts/donutsitesSlice';
import DonutsiteDetail from '../features/donuts/DonutsiteDetail';


const DonutsiteDetailPage = () => {
  const { donutsiteId } = useParams();
  const donutsite = selectDonutsiteById(donutsiteId);
  return (
    <Container>
      <Row>
        <DonutsiteDetail donutsite={donutsite} />
      </Row>
    </Container>
  );
};




export default DonutsiteDetailPage;


