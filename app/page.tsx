"use client";

import { Heroes } from "@/components/blocks/heroes";
import { Header } from "@/components/header";
import { Hero } from "@/components/blocks/hero";
import { Cases } from "@/components/blocks/cases";
import { Testimonials } from "@/components/blocks/testimonials";
import { Features } from "@/components/blocks/features";
import { Pricings } from "@/components/blocks/pricings";
import { Stats } from "@/components/blocks/stats";
import { CTAs } from "@/components/blocks/ctas";
import { Blogs } from "@/components/blocks/blogs";
import { FAQs } from "@/components/blocks/faqs";
import { Contacts } from "@/components/blocks/contacts";
import { Footers } from "@/components/blocks/footers";
import { Headers } from "@/components/blocks/headers";
import { Footer, DayPickerProvider } from "react-day-picker";

export default function Home() {
  return (
    <DayPickerProvider initialProps={{}}>
      <>
        <Header />
        <Hero />
        <Footer />
      </>
    </DayPickerProvider>
  );
}
