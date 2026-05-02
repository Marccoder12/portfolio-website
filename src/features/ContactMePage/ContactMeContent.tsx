import { FiPhoneCall, FiBriefcase, FiSend, FiUser } from "react-icons/fi";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactMeContent = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [purpose, setPurpose] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [isSent, setIsSent] = useState(false);
  const handleSubmit = async () => {
    if (status === "sending" || isSent) return;
    if (!email || !purpose || !message) {
      toast.error(
        "Please fill in your email, purpose, and message before sending.",
      );
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          email: email,
          purpose: purpose,
          phone_number: phone_number,
          message: message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setIsSent(true);

      toast.success("Message sent successfully! I'll reply soon");
      setTimeout(() => {
        setEmail("");
        setMessage("");
        setPhone_number("");
        setPurpose("");
        setIsSent(false);
        setStatus("idle");
      }, 3000);
    } catch (error) {
      toast.error("Failed to send email. Please try again later.");
      console.error("Failed to send email:", error);
      setStatus("error");
      alert("Failed to send email. Please try again later.");
    }
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
              setEmail(e.target.value);
            }}
            value={email}
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
              setPurpose(e.target.value);
            }}
            value={purpose}
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
              setPhone_number(e.target.value);
            }}
            value={phone_number}
            className=" border-2 border-stone-200 p-3 pl-8 rounded-xl h-10 w-full bg-stone-white text-stone-50 focus:outline-2 focus:outline-blue-500"
          />
        </div>
      </div>
      <div className="flex flex-col w-1/4  ">
        <span className="text-xl text-white">Message</span>
        <textarea
          className="h-50  w-full bg-stone-white text-start max-w-full text-stone-50 focus:outline-2 focus:outline-blue-500 border-2 border-stone-200 p-2 rounded-xl"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        />
      </div>
      <button
        className="p-2 px-10 bg-blue-700 hover:bg-blue-600 border-none hover:transition-all hover:border-blue-800 hover:border-2 transition-all cursor-pointer flex gap-x-2 rounded-xl text-white font-semibold"
        disabled={status === "sending" || isSent}
        onClick={() => {
          // handleSubmit
          toast.success("This Test");
        }}
      >
        {status === "sending"
          ? "Sending Message..."
          : isSent
            ? "Message Sent!"
            : "Send"}
        <FiSend />
      </button>
    </div>
  );
};
