import AreaMolecule from "../molecules/Form/Area";
import "../Style.css";

type Props = {

}

const FormMeetingDateOrganism: React.FC<Props> = ({}) => {
  
  return (
    <div className={"form-time-zone"}>
      <AreaMolecule />
      <AreaMolecule />
    </div>
  );
};

export default FormMeetingDateOrganism;