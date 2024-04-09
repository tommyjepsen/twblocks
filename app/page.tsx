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

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Headers />
      <Heroes />
      <Cases />
      <Testimonials />
      <Features />
      <Pricings />
      <Stats />
      <CTAs />
      <Blogs />
      <FAQs />
      <Contacts />
      <Footers />
    </>
  );
}
