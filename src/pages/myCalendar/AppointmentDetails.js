import moment from "moment";
import { Title } from "./style/AppointmentDetailsStyles";

const AppointmentDetails = ({ selectedEvent }) => {
  const startDateTime = selectedEvent.start;
  const endDateTime = selectedEvent.end;
  const formattedStartDate = moment(startDateTime).utc().format("DD MMMM YYYY");
  const formattedEndDate = moment(endDateTime).utc().format("DD MMMM YYYY");
  console.log(selectedEvent);
  console.log(formattedEndDate);
  return (
    <div>
      {selectedEvent ? (
        <div>
          <Title>{selectedEvent.title}</Title>
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
