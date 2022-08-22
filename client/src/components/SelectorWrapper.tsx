// import "./Header.css";
import Selector from "./Selector";

const SelectorWrapper = () => {
  return (
    <section className="date-selector-wrapper">
      <h2>Your favorable date:</h2>
      <Selector title="Country" inputType="text" isOption={true}/>
      <Selector title="City" inputType="select" isOption={true}/>
      <Selector title="Date" inputType="date" isOption={false}/>
      <Selector title="Start time" inputType="time" isOption={false}/>
      <Selector title="End time" inputType="time" isOption={false}/>
    </section>
  );
};

export default SelectorWrapper;