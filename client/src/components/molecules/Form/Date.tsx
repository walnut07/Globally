import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {

}

const DateMolecule: React.FC<Props>  = ({}) => {

  return (
    <div className="date-molecule">
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Date</InputGroup.Text>
        <Form.Control
          aria-label="Date"
          aria-describedby="inputGroup-sizing-sm"
          type="Date"
        />
     </InputGroup>
    </div>
  );
};

export default DateMolecule;