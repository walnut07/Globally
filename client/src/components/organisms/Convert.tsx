import ConvertMolecule from "../molecules/Convert";

type Props = {
  setIsTimeConverted: Function,
  setConvertedStartTime: Function,
  setConvertedEndTime: Function
  setAttendeeAreas: Function
  setUserStartTime: Function,
  setUserEndTime: Function,
  setUserDate: Function
  setUserArea: Function,
}

const FormMeetingDateOrganism: React.FC<Props> = ({setIsTimeConverted: setIsDataCollected, setConvertedStartTime, 
  setConvertedEndTime, setAttendeeAreas, setUserStartTime: setUserstartTime, setUserEndTime, setUserDate, setUserArea}) => {
  
  return (
    <div className={"convert-organism"}>
      <ConvertMolecule setIsTimeConverted={setIsDataCollected} setConvertedStartTime={setConvertedStartTime} 
        setConvertedEndTime={setConvertedEndTime} setAttendeeAreas={setAttendeeAreas} setUserStartTime={setUserstartTime}
        setUserEndTime={setUserEndTime} setUserDate={setUserDate} setUserArea={setUserArea} />
    </div>
  );
};

export default FormMeetingDateOrganism;