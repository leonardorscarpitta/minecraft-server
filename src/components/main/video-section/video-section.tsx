"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import styles from "./video-section.module.scss";

export default function VideoSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <section className={styles.section}>
      <h2 className="underline">Quem somos?</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sed quisquam, quo assumenda culpa soluta eius, et eligendi nisi commodi voluptatibus beatae iusto ipsam at, sint unde. Repellat, iste similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sed quisquam, quo assumenda culpa soluta eius, et eligendi nisi commodi voluptatibus beatae iusto ipsam at, sint unde. Repellat, iste similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sed quisquam, quo assumenda culpa soluta eius, et eligendi nisi commodi voluptatibus beatae iusto ipsam at, sint unde. Repellat, iste similique.</p>
      <ReactPlayer volume={0.5} className={styles.player} url="https://www.youtube.com/watch?v=uZ-9ehcSLyI"/>
    </section>
  );
}
