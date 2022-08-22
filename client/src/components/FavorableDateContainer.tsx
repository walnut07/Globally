import Selector from "./Selector";

const FavorableDateContainer= () => {
  return (
    <form>
      <Selector title="Area" inputType="text" isOption={true}/>
      <Selector title="Date" inputType="date" isOption={false}/>
      <Selector title="Start time" inputType="time" isOption={false}/>
      <Selector title="End time" inputType="time" isOption={false}/>
    </form>
  );
};

export default FavorableDateContainer;