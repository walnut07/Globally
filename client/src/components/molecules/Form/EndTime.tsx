import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {

}

const EndTimeMolecule: React.FC<Props>  = ({}) => {

  return (
    <div className="end-time-molecule">
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">End Time</InputGroup.Text>
        <Form.Control
          aria-label="End Time"
          aria-describedby="inputGroup-sizing-sm"
          type="time"
        />
     </InputGroup>
    </div>
  );
};

export default EndTimeMolecule;