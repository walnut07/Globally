import ConvertMolecule from "../molecules/Convert";
import "../Style.css";

type Props = {
  setIsDataCollected: Function,
  setConvertedStartTime: Function,
  setConvertedEndTime: Function
  setAttendeeAreas: Function
  setUserStartTime: Function,
  setUserEndTime: Function,
  setUserDate: Function
  setUserArea: Function,
}

const FormMeetingDateOrganism: React.FC<Props> = ({setIsDataCollected, setConvertedStartTime, 
  setConvertedEndTime, setAttendeeAreas, setUserStartTime: setUserstartTime, setUserEndTime, setUserDate, setUserArea}) => {
  
  return (
    <div className={"convert-organism"}>
      <ConvertMolecule setIsDataCollected={setIsDataCollected} setConvertedStartTime={setConvertedStartTime} 
        setConvertedEndTime={setConvertedEndTime} setAttendeeAreas={setAttendeeAreas} setUserStartTime={setUserstartTime}
        setUserEndTime={setUserEndTime} setUserDate={setUserDate} setUserArea={setUserArea} />
    </div>
  );
};

export default FormMeetingDateOrganism;