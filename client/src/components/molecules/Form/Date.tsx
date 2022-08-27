import "./Form.css";

type Props = {

}

const DateMolecule: React.FC<Props>  = ({}) => {

  return (
    <div className="date-molecule">
      <label className={"date-molecule"} htmlFor="date">Date</label>
        <input type="date" name="date" />
    </div>
  );
};

export default DateMolecule;