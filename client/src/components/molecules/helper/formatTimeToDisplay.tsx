import moment from "moment";

const formatTimeToDisplay = (convertedStartTimes: string[], convertedEndTimes: string[], 
  attendeeAreas: string[], userDate: string, userStartTime: string, userEndTime: string, userArea: string) :string =>  {

  const startTime = moment(`${userDate} ${userStartTime}`).format("YYYY-MM-DD hh:mm a");
  const endTime = moment(`${userDate} ${userEndTime}`).format("YYYY-MM-DD hh:mm a");

  let text = `Can we talk in the following time slot? \n\n`;
  text += `${startTime} ~ ${endTime} (${userArea}) \n`;

  for (let i = 0; i < convertedStartTimes.length; i++) {
    const convertedStartTime = moment(convertedStartTimes[i]).format("YYYY-MM-DD hh:mm a");
    const convertedEndTime = moment(convertedEndTimes[i]).format("YYYY-MM-DD hh:mm a");
    text += ` - ${convertedStartTime} ~ ${convertedEndTime}`;
    text += ` (${attendeeAreas[i]}) \n`;
  }

  return text;
}

export default formatTimeToDisplay;