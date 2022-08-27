import CopyAreaMolecule from "../molecules/CopyArea";

type Props = {
  attendeeAreas: string[],
  userDate: string,
  userStartTime: string,
  userEndTime: string,
  userArea: string,
  convertedStartTimes: string[],
  convertedEndTimes: string[]
  isTimeConverted: boolean
}

const FormMeetingDateOrganism: React.FC<Props> = ({attendeeAreas, userDate, userStartTime, userEndTime,
  userArea, convertedStartTimes, convertedEndTimes, isTimeConverted}) => {

  return (
    <div className={"copy-area"}>
      <CopyAreaMolecule attendeeAreas={attendeeAreas} userDate={userDate} userStartTime={userStartTime} 
      userEndTime={userEndTime} userArea={userArea} convertedStartTimes={convertedStartTimes} 
      convertedEndTimes={convertedEndTimes} isTimeConverted={isTimeConverted} />
    </div>
  );
};

export default FormMeetingDateOrganism;