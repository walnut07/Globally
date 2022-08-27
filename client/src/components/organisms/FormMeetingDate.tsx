import AreaMolecule from "../molecules/Form/Area";
import DateMolecule from "../molecules/Form/Date";
import StartTimeMolecule from "../molecules/Form/StartTime";
import EndTimeMolecule from "../molecules/Form/EndTime";
import "../Style.css";

type Props = {

}

const FormMeetingDateOrganism: React.FC<Props> = ({}) => {
  
  return (
    <div className={"form-meeting-date"}>
      <AreaMolecule />
      <DateMolecule />
      <StartTimeMolecule />
      <EndTimeMolecule />
    </div>
  );
};

export default FormMeetingDateOrganism;