"use client";
import Divider from "@/components/elements/Divider";
import Typography from "@/components/elements/Typography";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert("yo");
  };
  return (
    <Section className="max-w-6xl mx-auto">
      <Container className="grid grid-cols-1 md:grid-cols-3 gap-24 ">
        <form onSubmit={handleSubmit(onSubmit)} className="col-span-2 ">
          <Divider spacing={48} className="opacity-25" />
          <div className="flex px-8 flex-col-reverse relative ">
            <p className="text-red-600 text-sm ">
              {(errors?.name?.message as any) ?? null}
            </p>
            <input
              type="text"
              placeholder="Your name"
              className="bg-transparent border-none px-0 peer ring-0 focus:border-none appearance-none focus:ring-0 text-zinc-50 text-xl font-normal md:text-2xl "
              {...register("name", {
                required: {
                  value: true,
                  message: "Please enter a valid name",
                },
                maxLength: {
                  value: 80,
                  message: "You have exceeded the max length of 80 characters.",
                },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Please enter a valid name.",
                },
              })}
            />
            <Typography
              as="label"
              style="h4"
              className="  text-zinc-400  duration-300 transform  peer-focus:text-zinc-400  peer-placeholder-shown:text-zinc-50 font-normal"
            >
              What&apos;s your name?
            </Typography>
            <Typography
              as="span"
              style="h4"
              className=" top-0 left-0 absolute text-zinc-600 font-normal"
            >
              01
            </Typography>
          </div>
          <Divider spacing={48} className="opacity-25" />
          <div className="flex px-8 flex-col-reverse relative ">
            <p className="text-red-600 text-sm">
              {(errors?.email?.message as any) ?? null}
            </p>
            <input
              type="text"
              placeholder="Email address"
              className="bg-transparent border-none px-0 peer ring-0 focus:border-none appearance-none focus:ring-0 text-zinc-50 text-xl font-normal md:text-2xl "
              {...register("email", {
                required: {
                  value: true,
                  message: "Please enter your email address.",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address.",
                },
              })}
            />
            <Typography
              as="label"
              style="h4"
              className="  text-zinc-400  duration-300 transform  peer-focus:text-zinc-400  peer-placeholder-shown:text-zinc-50 font-normal"
            >
              What&apos;s your email?
            </Typography>
            <Typography
              as="span"
              style="h4"
              className=" top-0 left-0 absolute text-zinc-600 font-normal"
            >
              02
            </Typography>
          </div>
          <Divider spacing={48} className="opacity-25" />
          <div className="flex  flex-col-reverse relative px-8 ">
            <p className="text-red-600 text-sm ">
              {(errors?.message?.message as any) ?? null}
            </p>
            <textarea
              placeholder="Hey, I want to talk about..."
              className="bg-transparent border-none px-0 peer ring-0 focus:border-none appearance-none focus:ring-0 text-zinc-50 text-xl font-normal md:text-2xl min-h-[300px] resize-none"
              {...register("message", {
                required: {
                  value: true,
                  message: "This field cannot be empty.",
                },
                maxLength: {
                  value: 500,
                  message: "You have exceeded the max length of 80 characters.",
                },
              })}
            />
            <Typography
              as="label"
              style="h4"
              className="  text-zinc-400  duration-300 transform  peer-focus:text-zinc-400  peer-placeholder-shown:text-zinc-50 font-normal"
            >
              What do you want to talk about?
            </Typography>
            <Typography
              as="span"
              style="h4"
              className=" top-0 left-0 absolute text-zinc-600 font-normal"
            >
              03
            </Typography>
          </div>
        </form>
        <aside className="w-full -mt-12 md:mt-12 md:order-1 -order-1 col-span-1 h-full">
          <Typography
            as="h4"
            style="h3"
            className="text-xs sm:text-xs text-zinc-600 uppercase"
          >
            Contact Information
          </Typography>
          <Divider spacing={4} className="opacity-0" />
          <div>
            <Typography
              as="p"
              style="bodyTwo"
              className=" font-normal text-zinc-50"
            >
              es23jr@gmail.com
            </Typography>
            <Typography
              as="p"
              style="bodyTwo"
              className=" font-normal text-zinc-50 "
            >
              New Jersey, USA
            </Typography>
          </div>
        </aside>
      </Container>
    </Section>
  );
}
