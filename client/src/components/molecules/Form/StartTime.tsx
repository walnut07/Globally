import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {

}

const StartTimeMolecule: React.FC<Props>  = ({}) => {

  return (
    <div className="start-time-molecule">
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Start Time</InputGroup.Text>
        <Form.Control
          aria-label="Start Time"
          aria-describedby="inputGroup-sizing-sm"
          type="time"
        />
     </InputGroup>
    </div>
  );
};

export default StartTimeMolecule;