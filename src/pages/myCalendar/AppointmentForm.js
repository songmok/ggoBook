import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-date-picker";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
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
import axios from "axios";

const AppointmentForm = ({ closeModal }) => {
  // States
  const [startDateTime, setStartDateTime] = useState(new Date());
  const [endDateTime, setEndDateTime] = useState(new Date());

  //Assign useDispatch hook to a variable
  const dispatch = useDispatch();

  // useForm handler
  const { register, handleSubmit, reset } = useForm();

  // user selector
  const user = useSelector((state) => state.user.uiSeq);
  console.log(user);
  // Date Picker State\
  console.log(new Date());
  const [selectedDate, onChangeDate] = useState(new Date());

  // date start end
  const [start, setStart] = useState();
  const [end, setEnd] = useState();

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
      biSeq: 1,
      startDate: start,
      endDate: end,
      uiSeq: user,
    };
    axios
      .post("http://192.168.0.160:8520/api/schedule/add", appointmentInfo)
      .then((res) => {
        console.log(res);
        console.log(appointmentInfo);
      })
      .catch((err) => {
        console.log(err);
        console.log(appointmentInfo);
        closeModal();
      });
    // Reset react-hook-form states
    reset();
    // Reset date picker and time picker
    setStartDateTime(new Date());
    setEndDateTime(new Date());
    // Close modal
    closeModal();
  };

  return (
    <FormWrapper>
      <Header>Create New Appointment</Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ListContainer>
          <ListItem>
            <Label>책제목</Label>
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
            <Label>일정</Label>
            <DatePicker
              onChange={setStart}
              value={start}
              dateFormat={"yy-MM-dd"}
            />
            <DatePicker onChange={setEnd} value={end} dateFormat={"yy-MM-dd"} />
          </ListItem>
          <ListItem>
            <Label>기록</Label>
            <Input
              name="description"
              type="text"
              placeholder="기록하기"
              required
              {...register("description", {
                required: true,
                maxLength: 300,
              })}
            />
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
