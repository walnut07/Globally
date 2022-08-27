import AreaMolecule from "../molecules/Form/Area";
import FormTitle from "../molecules/Form/FormTitle";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
type Props = {

}

const FormMeetingDateOrganism: React.FC<Props> = ({}) => {
  
  return (
    <Form className={"form-time-zone"}>
      <FormTitle text={"Where are the attendees?"} />
      <Container>
        <Row>
          <Col><AreaMolecule /></Col>
        </Row>
        <Row>
          <Col><AreaMolecule /></Col>
        </Row>
      </Container>
    </Form>
  );
};

export default FormMeetingDateOrganism;