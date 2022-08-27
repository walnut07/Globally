import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
  isTimeConverted: boolean
}

const Save: React.FC<Props>  = ({isTimeConverted}) => {
  return (
    <div className="save-molecule">
      {isTimeConverted && 
      <Button variant="outline-secondary" size="sm" className="save-button-atom">Save</Button>}
    </div>
  );
};

export default Save;