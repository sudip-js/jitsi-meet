import React, { useCallback, useEffect } from "react";

const handleValueAfterLastSlash = (path) => {
  const lastIndexOfSlash = path.lastIndexOf("/");
  const result = path.substring(lastIndexOfSlash + 1);
  return result;
};

const Meeting = () => {
  const domain = "meet.jit.si";
  let api = {};

  const startMeet = useCallback(() => {
    const roomName = handleValueAfterLastSlash(window.location.href);
    const options = {
      roomName,
      width: "100%",
      height: "100%",
      configOverwrite: { prejoinPageEnabled: false },
      interfaceConfigOverwrite: {},
      parentNode: document.querySelector("#jitsi-iframe"),
      userInfo: {
        displayName: roomName,
      },
    };
    api = new window.JitsiMeetExternalAPI(domain, options);
    console.log("X", api);

    api.addEventListeners({
      readyToClose: handleClose,
      participantLeft: handleParticipantLeft,
      participantJoined: handleParticipantJoined,
      videoConferenceJoined: handleVideoConferenceJoined,
      videoConferenceLeft: handleVideoConferenceLeft,
    });
  }, [api]);

  useEffect(() => {
    if (window.JitsiMeetExternalAPI) {
      startMeet();
    } else {
      alert("JitsiMeetExternalAPI not loaded");
    }
  }, [startMeet]);

  const handleClose = () => {
    console.log("handleClose");
  };

  const handleParticipantLeft = async (participant) => {
    console.log("handleParticipantLeft", participant);
    await getParticipants();
  };

  const handleParticipantJoined = async (participant) => {
    console.log("handleParticipantJoined", participant);
    await getParticipants();
  };

  const handleVideoConferenceJoined = async (participant) => {
    console.log("handleVideoConferenceJoined", participant);
    await getParticipants();
  };

  const handleVideoConferenceLeft = () => {
    console.log("handleVideoConferenceLeft");
  };

  const getParticipants = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(api.getParticipantsInfo());
      }, 500);
    });
  };

  return (
    <div
      id="jitsi-iframe"
      className="w-[80vw] h-[94vh] border-[1px] border-solid border-white overflow-hidden "
    ></div>
  );
};

export default Meeting;
