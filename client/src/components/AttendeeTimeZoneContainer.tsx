import Selector from "./Selector";
import "../Style.css";

const AttendeeTimeZoneContainer = () => {
  return (
    <form>
      <Selector title="Area" inputType="text" isOption={true}/>
      <Selector title="Area" inputType="text" isOption={true}/>
    </form>
  );
};

export default AttendeeTimeZoneContainer;