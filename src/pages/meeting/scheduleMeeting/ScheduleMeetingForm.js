import React from "react";
import { CalendarIcon } from "../../../assets/icons";
import {
  TextInput,
  DateInput,
  SelectInput,
  ToggleButton,
} from "../../../components";
import Button from "../../../components/formComponents/Button";

const ScheduleMeetingForm = () => {
  const hoursArray = [
    {
      label: "00",
      value: "00",
    },
    {
      label: "01",
      value: "1",
    },
  ];
  const minutesArray = [
    {
      label: "00",
      value: "00",
    },
    {
      label: "05",
      value: "5",
    },
  ];
  return (
    <div className="w-[35vw] h-[100%]">
      <h1 className="text-white font-semibold text-xl text-center">
        Schedule Meeting
      </h1>
      <form className="flex flex-col gap-2">
        <TextInput label="Topic" placeholder="Enter topic..." />
        <div className="flex items-center gap-1">
          <SelectInput
            data={hoursArray}
            label="Estimated Duration"
            className="w-[50%]"
          />
          <DateInput
            placeholder="Select date"
            label="Date"
            inputFormat="DD/MM/YYYY"
            className="w-[50%]"
          />
        </div>

        <div className="flex items-center gap-1">
          <SelectInput data={hoursArray} label="Hours" className="w-[50%]" />
          <SelectInput
            data={minutesArray}
            label="Minutes"
            className="w-[50%]"
          />
        </div>
        <SelectInput data={minutesArray} label="Timezone" />
        <SelectInput data={minutesArray} label="Invite Participants" />
        <ToggleButton label="Allow join meeting before host" />
        <ToggleButton label="Need Password to join meeting" />
        <Button leftIcon={<CalendarIcon className="text-2xl" />}>
          Schedule Meeting
        </Button>
      </form>
    </div>
  );
};

export default ScheduleMeetingForm;
