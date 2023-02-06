import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const DonutsiteCard = ({ donutsite }) => {
  const { id, image, name } = donutsite;
  return (
    <Link to={`${id}`}>
      <Card>
        <CardImg
          width='100%'
          src={image}
          alt={name}
        />
        <CardImgOverlay>
          <CardTitle>{name}</CardTitle>
        </CardImgOverlay>
        <CardBody>
  
        </CardBody>
      </Card>
    </Link>
  );
};




export default DonutsiteCard;