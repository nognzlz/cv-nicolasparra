"use client";

import { Heading } from "@/components/Heading";
import { Input } from "@/components/Input/Input";
import { Label } from "@/components/Input/Label";
import { Textarea } from "@/components/Input/Textarea";
import { Button } from "@/components/Button/Button";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { notifyContactMessage } from "./actions";
import { Spinner } from "@/components/Icons/Spinner";
import { Success } from "./Success";
import { FormSchema, formSchema } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: "300" });

export const ContactForm = () => {
  const formMethods = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = formMethods;

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  async function onSubmit(data: FormSchema) {
    try {
      setIsSubmitting(true);
      await notifyContactMessage(data);
      setIsSubmitted(true);
      setIsSubmitting(false);
    } catch (error) {
      setIsError(true);
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {!isSubmitted && (
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
                  <div className="flex flex-row gap-x-4">
                    <Label htmlFor="name">Name</Label>
                    {errors.name?.message && (
                      <p
                        className={clsx(
                          "text-red-300 text-sm",
                          nunito.className
                        )}
                      >
                        {errors.name?.message}
                      </p>
                    )}
                  </div>
                  <Input
                    name={"name"}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                    error={!!errors.name?.message}
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <div className="flex flex-row gap-x-4">
                    <Label htmlFor="email">Email</Label>
                    {errors.email?.message && (
                      <p
                        className={clsx(
                          "text-red-300 text-sm",
                          nunito.className
                        )}
                      >
                        {errors.email?.message}
                      </p>
                    )}
                  </div>
                  <Input
                    name={"email"}
                    type={"email"}
                    placeholder={"John@gmail.com"}
                    disabled={isSubmitting}
                    error={!!errors.email?.message}
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <div className="flex flex-row gap-x-4">
                    <Label htmlFor="message">Message</Label>
                    {errors.message?.message && (
                      <p
                        className={clsx(
                          "text-red-300 text-sm",
                          nunito.className
                        )}
                      >
                        {errors.message?.message}
                      </p>
                    )}
                  </div>
                  <Textarea
                    className="h-64"
                    name={"message"}
                    placeholder="Leave me your message here"
                    disabled={isSubmitting}
                    error={!!errors.message?.message}
                  />
                </div>
                <div className="flex flex-row-reverse">
                  <Button type="submit" disabled={isSubmitting}>
                    <>
                      <span>
                        {isSubmitting ? (
                          <>
                            <Spinner />
                            Loading...
                          </>
                        ) : (
                          "Submit"
                        )}
                      </span>
                    </>
                  </Button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      )}
      {isSubmitted && <Success />}
    </>
  );
};
