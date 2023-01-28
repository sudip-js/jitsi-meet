import { openContextModal } from "@mantine/modals";
import React from "react";
import { Outlet } from "react-router-dom";
import { DialpadIcon } from "../../assets/icons";
import { Dialpad } from "../../components";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";
const PrivateLayout = () => {
  return (
    <div className="flex">
      <DashboardSidebar />
      <div>
        <DashboardHeader />
        <div className="bg-main h-[calc(100vh-8vh)] relative">
          <Outlet />
          <div
            onClick={() =>
              openContextModal({
                modal: "dialler",
                centered: true,
                withCloseButton: false,
                closeOnClickOutside: false,
                innerProps: {
                  modalBody: <Dialpad />,
                },

                sx: (theme) => ({
                  ".mantine-Modal-modal": {
                    width: "300px",
                    height: "70vh",
                    padding: "0",
                    backgroundColor: theme.colors.lightGrey,
                    ".mantine-Modal-header": {
                      color: theme.colors.white,
                    },
                  },
                }),
              })
            }
            className="bg-headerBtnActive absolute right-[16px] bottom-[16px] p-[20px] rounded-[100%] text-white cursor-pointer hover:bg-white hover:text-black"
          >
            <DialpadIcon className="text-3xl " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
