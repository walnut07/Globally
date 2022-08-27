import "./Form.css";

type Props = {
  text: string
}

const FormTitle: React.FC<Props>  = ({text}) => {

  return (
    <div className="form-title-molecule">
      <h3 className={"form-title-atom"}>{text}</h3>
    </div>
  );
};

export default FormTitle;