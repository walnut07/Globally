import AreaMolecule from "../molecules/Form/Area";
import DateMolecule from "../molecules/Form/Date";
import StartTimeMolecule from "../molecules/Form/StartTime";
import EndTimeMolecule from "../molecules/Form/EndTime";
import FormTitle from "../molecules/Form/FormTitle";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type Props = {

}

const FormMeetingDateOrganism: React.FC<Props> = ({}) => {
  
  return (
    <form className={"form-meeting-date"}>
      <FormTitle text={"When and where is the meeting held?"} />
      <Container>
      <Row>
        <Col><AreaMolecule /></Col>
      </Row>
      <Row>
        <Col><DateMolecule /></Col>
        <Col><StartTimeMolecule /></Col>
        <Col><EndTimeMolecule /></Col>
      </Row>
    </Container>
    </form>
  );
};

export default FormMeetingDateOrganism;