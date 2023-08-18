"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Slide from "react-reveal/Slide";

const schema = yup.object({
  name: yup.string().optional(),
  email: yup.string().email().required(),
  company: yup.string().optional(),
  message: yup.string().required(),
});

type FormData = yup.InferType<typeof schema>;

const Contact = () => {
  const contactInputs: any = [
    { name: "name", type: "text", placeholder: "Smit Sedan", label: "Name" },
    {
      name: "email",
      type: "email",
      placeholder: "smit@abc.com",
      label: "Email *",
    },
    {
      name: "company",
      type: "text",
      placeholder: "ABC",
      label: "Company Name",
    },
    {
      name: "message",
      type: "text",
      placeholder: "I want to discuss about a great opportunity",
      label: "Message *",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <div
      className="flex flex-col items-center py-10 h-screen justify-center"
      id="contact"
    >
      <div className="flex flex-col items-center border-b-4 border-double">
        <h2 className="text-2xl sm:text-4xl text-[#040c2c] dark:text-slate-400 font-bold">
          <Slide bottom cascade>
            Contact
          </Slide>
        </h2>
        <h4 className="text-xs sm:text-2xl">
          <Slide left cascade>
            <span> Let&apos;s get in touch</span>
          </Slide>
        </h4>
      </div>
      <div className="w-1/2">
        <form onSubmit={handleSubmit(onSubmit)}>
          {contactInputs.map((input: any) => (
            <div className="flex flex-col mb-4 w-full" key={input.name}>
              <label className="mb-2 text-md text-gray-900 dark:text-gray-100">
                {input.label}
              </label>
              {input.name === "message" ? (
                <>
                  <textarea
                    placeholder="I want to discuss about a great opportunity"
                    {...register("message")}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  ></textarea>
                </>
              ) : (
                <>
                  <input
                    placeholder={input.placeholder}
                    {...register(input.name)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  />
                </>
              )}
              {/* @ts-ignore */}
              {errors[input.name] && (
                // @ts-ignore
                <p className="text-rose-900">{errors[input.name].message}</p>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-500 text-white rounded-md shadow-sm dark:bg-indigo-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
