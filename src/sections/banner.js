import React from "react";
import { ThemeProvider } from "theme-ui";

import theme from "theme";
import Layout from "components/layout";
import Banner from "../sections/banner";
import KeyFeature from "../sections/key-feature";
import ServiceSection from "../sections/service-section";
import Feature from "../sections/feature";
import CoreFeature from "../sections/core-feature";
import WorkFlow from "../sections/workflow";
import TestimonialCard from "../sections/testimonial";
import BlogSection from "../sections/blog-section";
import Subscribe from "../sections/subscribe";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Banner />
        <KeyFeature />
        <ServiceSection />
        <Feature />
        <CoreFeature />
        <WorkFlow />
        <TestimonialCard />
        <BlogSection />
        <Subscribe />
      </Layout>
    </ThemeProvider>
  );
}
