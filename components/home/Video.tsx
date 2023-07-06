"use client";
import React, {
  DetailedHTMLProps,
  VideoHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button } from "../ui/button";

const Video = () => {
  const videoRef = useRef<any>();
  const [stop, setStop] = useState(false);

  const handleVideo = () => {
    setStop(!stop);
    if (stop === true) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  //   const handlePlay = () => {
  //     videoRef.current.video.play();
  //     // console.log(videoRef.current);
  //   };

  return (
    <div className="relative pb-10 md:pb-20">
      {/* <div className="absolute left-[50%] top-[50%] z-20 ">
        <Button onClick={() => handleVideo()}>Play</Button>
      </div> */}
      <video
        className="relative"
        controls
        loop
        ref={videoRef}
        // src={"/images/bg/video.mp4#t=1"}
        // controls
        // height="100%"
        // width="100%"
        // type="video/mp4"
      >
        <source src={"/images/bg/video.mp4#t=1"} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
