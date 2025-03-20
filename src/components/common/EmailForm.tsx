"use client";
import { MailIcon } from "@/utils/icons";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
interface ClassCustom {
  myClass?: string;
}

const EmailForm = ({ myClass }: ClassCustom) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const form = useRef<HTMLFormElement | null>(null);

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setError(true);
    if (email && emailRegex.test(email)) {
      setEmail("");
      setError(false);
      toast.success("Successfully sent!");
      if (form.current) {
        emailjs
          .sendForm("service_ll432uj", "template_61ujxkd", form.current, {
            publicKey: "N_TYdDnerS4n2JiUw",
          })
          .then(
            () => {
              console.log("SUCCESS!");
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
      }
    }
  };
  return (
    <>
      <ToastContainer position="top-right" />
      <div className={`px-4 w-full ${myClass}`}>
        <div className="max-w-[1240px] bg-black mx-auto flex justify-between items-center w-full py-9 rounded-[20px] px-16 max-lg:px-10 max-md:px-5 max-md:pt-8 max-md:pb-7">
          <div className="max-w-[1112px] mx-auto flex justify-between w-full items-center gap-10 max-lg:flex-wrap max-lg:justify-center max-md:gap-8">
            <h2 className="text-[40px] text-white font-integral max-w-[551px] max-lg:text-[32px] max-md:leading-[35px]">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
            <form
              ref={form}
              className="flex w-full flex-col justify-center items-start max-w-[349px] ml-auto gap-3.5 max-lg:mx-auto max-lg:gap-2 max-md:max-w-[311px]"
            >
              <div className="w-full">
                <div className="w-full max-w-[349px] flex gap-3 items-center py-3 px-4 rounded-full bg-white max-md:py-[11px]">
                  <label htmlFor="form-mail" className="cursor-pointer">
                    <MailIcon />
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    id="form-mail"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full placeholder:text-[#00000066] text-[#00000066] outline-none bg-transparent"
                  />
                </div>
                {error && email.length === 0 ? (
                  <p className="text-red-500 text-start pl-2 pt-1">
                    Please enter your email
                  </p>
                ) : (
                  !emailRegex.test(email) &&
                  email.length > 0 && (
                    <p className="text-red-500 pl-2 pt-1">
                      Please enter valid email
                    </p>
                  )
                )}
              </div>
              <button
                onClick={formHandler}
                className="w-full max-w-[349px] cursor-pointer items-center py-3 px-4 max-md:py-[11px] rounded-full border border-transparent bg-white satoshi-medium text-black hover:bg-black hover:text-white duration-300 ease-linear hover:border-white"
              >
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailForm;
