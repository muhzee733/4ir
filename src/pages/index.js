import React from "react";
import Layout from "@/components/layout";
import Head from "next/head";
import H1 from "@/components/typography/H1";

const Index = () => {
  return (
    <>
      <Head>
        <title>Fourth Industrial Revolution Inc.</title>
      </Head>
      <Layout>
        <section>
          <H1 title="Hello My Heading" />

        </section>
      </Layout>
    </>
  );
};

export default Index;
