"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import "./video-section.modules.scss";

export default function VideoSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <section>
      <h2 className="underline">Quem somos?</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sed quisquam, quo assumenda culpa soluta eius, et eligendi nisi commodi voluptatibus beatae iusto ipsam at, sint unde. Repellat, iste similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sed quisquam, quo assumenda culpa soluta eius, et eligendi nisi commodi voluptatibus beatae iusto ipsam at, sint unde. Repellat, iste similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sed quisquam, quo assumenda culpa soluta eius, et eligendi nisi commodi voluptatibus beatae iusto ipsam at, sint unde. Repellat, iste similique.</p>
      <ReactPlayer volume={0.3} className="player" url="https://www.youtube.com/watch?v=uZ-9ehcSLyI"/>
    </section>
  );
}
