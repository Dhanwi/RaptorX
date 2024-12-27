"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";
import PropTypes from "prop-types";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";

export function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted");
  };
  return (
    <div className="z-50 max-w-md w-full mx-auto md:rounded-2xl p-4 md:p-8 shadow-input border-r-2 border-l-2 rounded-3xl">
      <h2 className="font-bold text-xl text-neutral-100 dark:text-neutral-200">
        Welcome to raptorX.ai
      </h2>
      {/* <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to aceternity if you can because we don&apos;t have a login flow
        yet
      </p> */}
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label className="text-white" htmlFor="firstname">
              First name
            </Label>
            <Input id="firstname" placeholder="Priya" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label className="text-white" htmlFor="lastname">
              Last name
            </Label>
            <Input id="lastname" placeholder="Kumari" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label className="text-white" htmlFor="email">
            Email Address
          </Label>
          <Input
            id="email"
            placeholder="project@gmail.com"
            type="email"
            autoComplete="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="text-white" htmlFor="password">
            Password
          </Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            autoComplete="current-password"
          />
        </LabelInputContainer>

        <button
          className="relative group/btn bg-gradient-to-br from-teal-400 to-blue-500 dark:from-sky-500 dark:to-sky-100 flex w-full border-[#c5e2f3] border-x-0 border-y-2 text-white align-middle items-center place-content-center rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
LabelInputContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};