import "./Form.css";

type Props = {

}

const EndTimeMolecule: React.FC<Props>  = ({}) => {

  return (
    <div className="end-time-molecule">
      <label className={"endTime-molecule"} htmlFor="end time">End time</label>
        <input type="time" name="end time" />
    </div>
  );
};

export default EndTimeMolecule;