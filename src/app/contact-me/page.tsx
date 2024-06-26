import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageContent } from "@/components/Layout/PageContent";
import { PageWrapper } from "@/components/Layout/PageWrapper";
import React from "react";

export default () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <PageContent>Contact me page</PageContent>
      </PageWrapper>
      <Footer />
    </>
  );
};
