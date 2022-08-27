import AreaMolecule from "../molecules/Form/Area";
import FormTitle from "../molecules/Form/FormTitle";
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {

}

const FormMeetingDateOrganism: React.FC<Props> = ({}) => {
  
  return (
    <Form className={"form-time-zone"}>
      <FormTitle text={"Where are the attendees?"} />
      <AreaMolecule />
      <AreaMolecule />
    </Form>
  );
};

export default FormMeetingDateOrganism;