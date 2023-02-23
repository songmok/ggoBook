import moment from "moment";
import "moment/locale/ko";
import { Title } from "./style/AppointmentDetailsStyles";

const AppointmentDetails = ({ selectedEvent }) => {
  const startDateTime = selectedEvent.start;
  const endDateTime = selectedEvent.end;
  const formattedStartDate = moment(startDateTime).utc().format("YYYY-MM-DD");
  const formattedEndDate = moment(endDateTime).utc().format("YYYY-MM-DD");
  console.log(selectedEvent);
  console.log(formattedEndDate);
  return (
    <div>
      {selectedEvent ? (
        <div>
          <h3>{selectedEvent.title}</h3>
          <div>Name: {selectedEvent.name}</div>
          <div>Age: {selectedEvent.age}</div>
          <div>시작일: {formattedStartDate}</div>
          <div>마지막일: {formattedEndDate}</div>
        </div>
      ) : (
        <div>Error Getting Data</div>
      )}
    </div>
  );
};

export default AppointmentDetails;
