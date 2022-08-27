import SaveMolecule from "../molecules/Save";

type Props = {
  isTimeConverted: boolean
}

const Save: React.FC<Props>  = ({isTimeConverted}) => {
  return (
    <SaveMolecule isTimeConverted={isTimeConverted}/>
  );
};

export default Save;