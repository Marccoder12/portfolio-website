import { FiPhoneCall, FiBriefcase, FiSend, FiUser } from "react-icons/fi";
import { ContactFormData } from "../../types";
import { useState } from "react";
import { useResend } from "./Services/EmailService";

export const ContactMeContent = () => {
  const [formData, setFormData] = useState<ContactFormData | null>(null);

  const handleSubmit = async () => {
    await useResend({
      email: formData?.email_adress,
      message: formData?.message,
      phone_number: formData?.phone_number,
      purpose: formData?.purpose,
    });
  };

  return (
    <div className="bg-gray-700 flex flex-col gap-2 items-center  border-3 border-stone-200 justify-center">
      <h1 className="text-5xl text-blue-200 font-bold mb-10">
        Send Me an Email
      </h1>
      <div className="flex flex-col w-1/4">
        <span className="text-xl text-white">Email Address</span>
        <div className="relative">
          <FiUser className="absolute top-3 left-3 text-white" />
          <input
            type="email"
            onChange={(e) => {
              setFormData((prev) => {
                if (!prev) return null;

                return {
                  ...prev,
                  email_adress: e.target.value,
                };
              });
            }}
            className=" border-2 border-stone-200 p-3 pl-8 rounded-xl h-10 w-full bg-stone-white text-stone-50 focus:outline-2 focus:outline-blue-500"
          />
        </div>
      </div>
      <div className="flex flex-col w-1/4">
        <span className="text-xl text-white">Purpose</span>
        <div className="relative">
          <FiBriefcase className="absolute top-3 left-3 text-white" />
          <input
            type="text"
            onChange={(e) => {
              setFormData((prev) => {
                if (!prev) return null;

                return {
                  ...prev,
                  purpose: e.target.value,
                };
              });
            }}
            className=" border-2 border-stone-200 p-3 pl-8 rounded-xl h-10 w-full bg-stone-white text-stone-50 focus:outline-2 focus:outline-blue-500"
          />
        </div>
      </div>
      <div className="flex flex-col w-1/4">
        <span className="text-xl text-white">Phone Number (Optional)</span>
        <div className="relative">
          <FiPhoneCall className="absolute top-3 left-3 text-white" />
          <input
            type="tel"
            onChange={(e) => {
              setFormData((prev) => {
                if (!prev) return null;

                return {
                  ...prev,
                  phone_number: e.target.value,
                };
              });
            }}
            className=" border-2 border-stone-200 p-3 pl-8 rounded-xl h-10 w-full bg-stone-white text-stone-50 focus:outline-2 focus:outline-blue-500"
          />
        </div>
      </div>
      <div className="flex flex-col w-1/4  ">
        <span className="text-xl text-white">Message</span>
        <textarea
          className="h-50  w-full bg-stone-white text-start max-w-full text-stone-50 focus:outline-2 focus:outline-blue-500 border-2 border-stone-200 p-2 rounded-xl"
          onChange={(e) => {
            setFormData((prev) => {
              if (!prev) return null;

              return {
                ...prev,
                message: e.target.value,
              };
            });
          }}
        />
      </div>
      <button className="p-2 px-10 bg-blue-700 hover:bg-blue-600 border-none hover:transition-all hover:border-blue-800 hover:border-2 transition-all cursor-pointer flex gap-x-2 rounded-xl text-white font-semibold">
        Send
        <FiSend />
      </button>
    </div>
  );
};
