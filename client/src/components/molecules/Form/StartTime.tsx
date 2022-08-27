import "./Form.css";

type Props = {

}

const StartTimeMolecule: React.FC<Props>  = ({}) => {

  return (
    <div className="start-time-molecule">
      <label className={"startTime-molecule"} htmlFor="start time">Start time</label>
        <input type="time" name="start time" />
    </div>
  );
};

export default StartTimeMolecule;