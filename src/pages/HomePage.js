import { Container } from 'reactstrap';
import BootstrapCarousel from '../components/BootstrapCarousel';
import DisplayList from '../features/display/DisplayList';


const HomePage = () => {
  return (
      <Container>
          <DisplayList />
          <BootstrapCarousel />
      </Container>
  );
};

export default HomePage;