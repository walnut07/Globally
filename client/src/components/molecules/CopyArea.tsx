import moment from "moment";
import { useEffect, useState } from "react";
import formatTimeToDisplay from "./helper/formatTimeToDisplay";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  useEffect(() => {
    if (isTimeConverted) {
      const text = formatTimeToDisplay(convertedStartTimes, convertedEndTimes, attendeeAreas,
         userDate, userStartTime, userEndTime, userArea);
      const copyArea = 
        <FloatingLabel controlId="floatingTextarea2" className="copyAreaWrapper sm" label={undefined}>
          <Form.Control
          as="textarea"
          value={text}
          style={{ height: '130px' }}
        />
        </FloatingLabel>
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