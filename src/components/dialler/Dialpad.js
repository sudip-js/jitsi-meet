import React from "react";
import { CallIcon, MinimizeIcon } from "../../assets/icons";
import SelectInput from "../formComponents/SelectInput";
import TextInput from "../formComponents/TextInput";

const Dialpad = () => {
  const DIDNumbers = [
    {
      label: "+919315797998",
      value: "+919315797998",
    },
    {
      label: "+917678372708",
      value: "917678372708",
    },
  ];
  return (
    <div className="dialer">
      <header className="bg-black py-1">
        <div className="flex items-center justify-between px-3 text-white font-semibold">
          <h1 className="">New Call</h1>
          <MinimizeIcon className="text-xl cursor-pointer hover:text-[#db0000]" />
        </div>
        <TextInput placeholder="Enter a number" bg="#000000" border="none" />
      </header>
      <main className="flex flex-col items-center gap-5">
        <SelectInput data={DIDNumbers} placeholder="Call from" />
        <div className="grid grid-cols-3 gap-y-5 w-[200px]">
          <div className="flex flex-col items-center">
            <span className="text-white cursor-pointer">1</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white text-xl cursor-pointer">2</span>
            <span className="text-xs cursor-pointer font-semibold text-sidebarIcon">
              ABC
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white text-xl cursor-pointer">3</span>
            <span className="text-xs cursor-pointer font-semibold text-sidebarIcon">
              DEF
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white text-xl cursor-pointer">4</span>
            <span className="text-xs cursor-pointer font-semibold text-sidebarIcon">
              GHI
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white text-xl cursor-pointer">5</span>
            <span className="text-xs cursor-pointer font-semibold text-sidebarIcon">
              JKL
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white text-xl cursor-pointer">6</span>
            <span className="text-xs cursor-pointer font-semibold text-sidebarIcon">
              MNO
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white text-xl cursor-pointer">7</span>
            <span className="text-xs cursor-pointer font-semibold text-sidebarIcon">
              PQRS
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white text-xl cursor-pointer">8</span>
            <span className="text-xs cursor-pointer font-semibold text-sidebarIcon">
              TUV
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white text-xl cursor-pointer">9</span>
            <span className="text-xs cursor-pointer font-semibold text-sidebarIcon">
              WXYX
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white text-xl cursor-pointer">*</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white text-xl cursor-pointer">0</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white text-xl cursor-pointer">#</span>
          </div>
        </div>
        <div className="bg-green-500 p-2 rounded-full cursor-pointer">
          <CallIcon className="text-4xl text-white" />
        </div>
      </main>
    </div>
  );
};

export default Dialpad;
