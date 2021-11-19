import { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { BentoSidebar } from "@bentoproject/sidebar/react";
import "@bentoproject/sidebar/styles.css";

import {
  BentoAccordion,
  BentoAccordionSection,
  BentoAccordionHeader,
  BentoAccordionContent,
} from "@bentoproject/accordion/react";
import "@bentoproject/accordion/styles.css";

export default function Home() {
  const sidebarRef = useRef();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
          <button onClick={() => sidebarRef.current.open()}>
            Open Doc Sidebar
          </button>
        </p>

        <BentoSidebar ref={sidebarRef} style={{ width: "350px" }}>
          <button onClick={() => sidebarRef.current.close()}>X</button>
          <BentoAccordion expandSingleSection animate style={{ width: "100%" }}>
            <BentoAccordionSection>
              <BentoAccordionHeader>
                <h2>Documentation &rarr;</h2>
              </BentoAccordionHeader>
              <BentoAccordionContent>
                <a href="https://nextjs.org/docs">
                  <p>
                    Find in-depth information about Next.js features and API.
                  </p>
                </a>
              </BentoAccordionContent>
            </BentoAccordionSection>

            <BentoAccordionSection>
              <BentoAccordionHeader>
                <h2>Learn &rarr;</h2>
              </BentoAccordionHeader>
              <BentoAccordionContent>
                <a href="https://nextjs.org/learn">
                  <p>
                    Learn about Next.js in an interactive course with quizzes!
                  </p>
                </a>
              </BentoAccordionContent>
            </BentoAccordionSection>

            <BentoAccordionSection>
              <BentoAccordionHeader>
                <h2>Examples &rarr;</h2>
              </BentoAccordionHeader>
              <BentoAccordionContent>
                <a href="https://github.com/vercel/next.js/tree/master/examples">
                  <p>
                    Discover and deploy boilerplate example Next.js projects.
                  </p>
                </a>
              </BentoAccordionContent>
            </BentoAccordionSection>

            <BentoAccordionSection>
              <BentoAccordionHeader>
                <h2>Deploy &rarr;</h2>
              </BentoAccordionHeader>
              <BentoAccordionContent>
                <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
                  <p>
                    Instantly deploy your Next.js site to a public URL with
                    Vercel.
                  </p>
                </a>
              </BentoAccordionContent>
            </BentoAccordionSection>
          </BentoAccordion>
        </BentoSidebar>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}