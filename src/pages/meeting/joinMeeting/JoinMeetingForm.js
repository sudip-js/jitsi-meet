import React from "react";
import { JoinMeetingIcon } from "../../../assets/icons";
import { TextInput } from "../../../components";
import Button from "../../../components/formComponents/Button";

const JoinMeetingForm = () => {
  return (
    <form className="w-[100%]">
      <TextInput
        placeholder="Enter a meeting code or link"
        icon={<JoinMeetingIcon className="text-2xl" />}
      />
      <Button
        loading={false}
        className="w-full bg-headerBtnActive hover:bg-white hover:text-black mt-2"
      >
        Join
      </Button>
    </form>
  );
};

export default JoinMeetingForm;
