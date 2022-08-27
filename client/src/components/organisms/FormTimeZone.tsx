import AreaMolecule from "../molecules/Form/Area";
import FormTitle from "../molecules/Form/FormTitle";

type Props = {

}

const FormMeetingDateOrganism: React.FC<Props> = ({}) => {
  
  return (
    <form className={"form-time-zone"}>
      <FormTitle text={"Where are the attendees?"} />
      <AreaMolecule />
      <AreaMolecule />
    </form>
  );
};

export default FormMeetingDateOrganism;