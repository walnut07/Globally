import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import formatTimeToSave from "./helper/formatTimeToSave";

type Props = {
  isTimeConverted: boolean,
  convertedStartTimes: string[],
  convertedEndTimes: string[],
  attendeeAreas: string[],
  userDate: string,
  userStartTime: string,
  userEndTime: string,
  userArea: string,
  user: any
}

const Save: React.FC<Props>  = ({isTimeConverted, convertedStartTimes, convertedEndTimes, attendeeAreas,
  userDate, userStartTime, userEndTime, userArea, user}) => {

  const handleSubmit = () => {
    const formattedData = formatTimeToSave(convertedStartTimes, convertedEndTimes, 
      attendeeAreas, userDate, userStartTime, userEndTime, userArea, user)

  }

  return (
    <div className="save-molecule">
      {isTimeConverted && 
      <Button variant="outline-secondary" size="sm" className="save-button-atom" onClick={handleSubmit}>Save</Button>}
    </div>
  );

};

export default Save;