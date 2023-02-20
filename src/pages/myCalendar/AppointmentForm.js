import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-date-picker";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import moment from "moment";
import { useDispatch } from "react-redux";
import { add_appointment } from "reducer/appointmentActions";
import uuid from "react-uuid";
import {
  AddButton,
  FormWrapper,
  Header,
  Input,
  Label,
  ListContainer,
  ListItem,
} from "./style/AppointFormStyles";

const AppointmentForm = ({ closeModal }) => {
  // States
  const [startDateTime, setStartDateTime] = useState(new Date());
  const [endDateTime, setEndDateTime] = useState(new Date());

  //Assign useDispatch hook to a variable
  const dispatch = useDispatch();

  // useForm handler
  const { register, handleSubmit, reset } = useForm();

  // Date Picker State
  const [selectedDate, onChangeDate] = useState(new Date());

  // date start end
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  // Timerange Picker State
  const [selectedTime, onChangeTime] = useState(["10:00", "11:00"]);

  // Add start and end date time when state changes
  useEffect(() => {
    let formattedDate = moment(selectedDate).format("YYYY-MM-DD");
    console.log(formattedDate);
    onChangeDate(formattedDate);
    // setEndDateTime(formattedDate + "T" + selectedTime[1] + ":00");
  }, [selectedDate, selectedTime]);

  // onSubmit Function
  const onSubmit = (data) => {
    const appointmentInfo = {
      ...data,
      start: start,
      end: end,
      id: uuid(),
    };
    dispatch(add_appointment(appointmentInfo))
      .then(() => {
        console.log("form data: ", appointmentInfo);
        // Check with localstorage data

        if ("appointments" in localStorage) {
          let localStorageArray = JSON.parse(
            localStorage.getItem("appointments")
          );
          localStorageArray.push(appointmentInfo);
          localStorage.setItem(
            "appointments",
            JSON.stringify(localStorageArray)
          );
        } else {
          let newArray = [];
          newArray.push(appointmentInfo);
          localStorage.setItem("appointments", JSON.stringify(newArray));
        }
        // Reset react-hook-form states
        reset();
        // Reset date picker and time picker
        setStartDateTime(new Date());
        setEndDateTime(new Date());
        // Close modal
        closeModal();
      })
      .catch((error) => {
        console.log(`Error getting data: ${error}`);
        // Close modal
        closeModal();
      });
  };

  return (
    <FormWrapper>
      <Header>Create New Appointment</Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ListContainer>
          <ListItem>
            <Label>Title</Label>
            <Input
              name="title"
              type="text"
              placeholder="Appointment of..."
              required
              {...register("title", {
                required: true,
                maxLength: 100,
              })}
            />
          </ListItem>
          <ListItem>
            <Label>Name</Label>
            <Input
              name="name"
              type="text"
              placeholder="Patient Name"
              required
              {...register("name", {
                required: true,
                maxLength: 45,
              })}
            />
          </ListItem>
          <ListItem>
            <Label>Age</Label>
            <Input
              name="age"
              type="number"
              required
              {...register("age", {
                required: true,
                maxLength: 3,
              })}
            />
          </ListItem>
          <ListItem>
            <Label>Date</Label>
            <DatePicker
              onChange={(e) => {
                setStart(e);
              }}
              value={start}
              dateFormat={"yyyy-MM-dd"}
            />
            <DatePicker
              onChange={setEnd}
              value={end}
              dateFormat={"yyyy-MM-dd"}
            />
          </ListItem>
          <ListItem>
            <Label>Time</Label>
            <TimeRangePicker onChange={onChangeTime} value={selectedTime} />
          </ListItem>
          <ListItem>
            <AddButton type="submit">Add To Calendar</AddButton>
          </ListItem>
        </ListContainer>
      </form>
    </FormWrapper>
  );
};

export default AppointmentForm;
