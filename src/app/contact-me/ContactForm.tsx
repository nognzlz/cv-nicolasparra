"use client";

import { Heading } from "@/components/Heading";
import { Input } from "@/components/Input/Input";
import { Label } from "@/components/Input/Label";
import { Textarea } from "@/components/Input/Textarea";
import { Button } from "@/components/Button/Button";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { notifyContactMessage } from "./actions";

export const ContactForm = () => {
  type Inputs = {
    name: string;
    email: string;
    message: string;
  };

  const formMethods = useForm<Inputs>();
  const { handleSubmit } = formMethods;

  function onSubmit(data: Inputs) {
    notifyContactMessage(data);
  }

  return (
    <>
      <div className="flex flex-col p-4 space-y-4 md:my-8 my-4">
        <div className="text-center">
          <Heading>Contact me</Heading>
        </div>
        <div className="md:self-center self-stretch">
          <FormProvider {...formMethods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-y-4"
            >
              <div className="flex flex-col gap-y-1">
                <Label htmlFor="name">Name</Label>
                <Input name={"name"} placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  name={"email"}
                  type={"email"}
                  placeholder={"John@gmail.com"}
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  className="h-64"
                  name={"message"}
                  placeholder="Leave me your message here"
                />
              </div>
              <div className="flex flex-row-reverse">
                <Button type="submit">
                  <>
                    <span> Submit </span>
                  </>
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
};
