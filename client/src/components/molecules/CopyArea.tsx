import moment from "moment";
import { useEffect, useState } from "react";
import "./Form.css";

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

const CopyAreaMolecule: React.FC<Props>  = ({attendeeAreas, userDate, userStartTime, userEndTime,
  userArea, convertedStartTimes, convertedEndTimes, isTimeConverted}) => {

  const [copyArea, setCopyArea] = useState<JSX.Element|null>(null);
  
  const formatTime = (convertedStartTimes: string[], convertedEndTimes: string[], attendeeAreas: string[]) :string =>  {
    const startTime = moment(`${userDate} ${userStartTime}`).format("YYYY-MM-DD hh:mm a");
    const endTime = moment(`${userDate} ${userEndTime}`).format("YYYY-MM-DD hh:mm a");

    let text = `Can we talk in the following time slot? \n\n`;
    text += `${startTime} ~ ${endTime} (${userArea}) \n`;

    for (let i = 0; i < convertedStartTimes.length; i++) {
      const convertedStartTime = moment(convertedStartTimes[i]).format("YYYY-MM-DD hh:mm a");
      const convertedEndTime = moment(convertedEndTimes[i]).format("YYYY-MM-DD hh:mm a");
      text += ` - ${convertedStartTime} ~ ${convertedEndTime}`;
      text += ` (${attendeeAreas[i]}) \n`;
    }

    return text;
  }

  useEffect(() => {
    if (isTimeConverted) {
      const text = formatTime(convertedStartTimes, convertedEndTimes, attendeeAreas);
      const copyArea = 
        <div className="copyAreaWrapper">
          <textarea value={text} id="textarea"/>
        </div>
      setCopyArea(copyArea);
    }
  }, [isTimeConverted])
  
  return (
    <div className="copy-area-molecule">
      {isTimeConverted && copyArea}
    </div>
  );
};

export default CopyAreaMolecule;