import "./Form.css";

type Props = {

}

const DateMolecule: React.FC<Props>  = ({}) => {

  return (
    <label className={"date-molecule"} htmlFor="date">
      <input type="date" name="date" />
    </label>
  );
};

export default DateMolecule;