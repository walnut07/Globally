import AreaMolecule from "../molecules/Form/Area";
import DateMolecule from "../molecules/Form/Date";
import StartTimeMolecule from "../molecules/Form/StartTime";
import EndTimeMolecule from "../molecules/Form/EndTime";

type Props = {

}

const FormMeetingDateOrganism: React.FC<Props> = ({}) => {
  
  return (
    <form className={"form-meeting-date"}>
      <AreaMolecule />
      <DateMolecule />
      <StartTimeMolecule />
      <EndTimeMolecule />
    </form>
  );
};

export default FormMeetingDateOrganism;