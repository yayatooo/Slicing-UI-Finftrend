"use client";
import React, { useState } from "react";
import Tittle from "../utility/Tittle";
import getPost from "../utility/PostService";
import Button from "../utility/Button";

const PlatformSection = () => {
  const platforms = [
    {
      id: 1,
      title: "Facecook",
      image: "./assets/socmed/social media1.svg",
    },
    {
      id: 2,
      title: "Twitter",
      image: "./assets/socmed/social media2.svg",
    },
    {
      id: 3,
      title: "Dribbble",
      image: "./assets/socmed/social media3.svg",
    },
    {
      id: 4,
      title: "Pinterest",
      image: "./assets/socmed/social media4.svg",
    },
    {
      id: 5,
      title: "Motion",
      image: "./assets/socmed/social media5.svg",
    },
    {
      id: 6,
      title: "Reddit",
      image: "./assets/socmed/social media6.svg",
    },
    {
      id: 7,
      title: "WK",
      image: "./assets/socmed/social media7.svg",
    },
    {
      id: 8,
      title: "LinkedIn",
      image: "./assets/socmed/social media8.svg",
    },
  ];

  const [selected, setSelected] = useState(2);
  // const [post, setPost] = useState(getPost(selected));

  const handleClick = (platformId) => {
    setSelected(platformId);
    // setPost(platformId);
  };

  return (
    <div>
      <section className="py-28 bg-[#FAFAFA]">
        <Tittle>All platforms connect to Findtrend</Tittle>
        <div className="laptop:w-full mx-auto flex gap-x-4 justify-center items-center mobile:w-full overflow-auto">
          {platforms.map((data) => {
            return (
              <button
                key={data.id}
                onClick={() => handleClick(data.id)}
                className={`laptop:w-[124px] h-[124px] flex items-center justify-center p-8 rounded-lg mobile: flex-none ml-4  ${
                  selected === data.id ? "bg-primary" : "bg-white"
                }`}
              >
                <img src={data.image} className="mobile:w-full laptop:w-14" />
              </button>
            );
          })}
        </div>
        <div className="py-20 w-8/12 mx-auto gap-y-8">
          {/* {post} */}
          <img src="./assets/tweets/tweet 1.svg" className="mx-auto" />
          <img src="./assets/tweets/tweet 2.svg" className="mx-auto" />
          <img src="./assets/tweets/tweet 3.svg" className="mx-auto" />
        </div>
        <div className="w-2/12 mx-auto mobile:w-7/12 flex justify-center mx-auto ">
          <Button variant={"black-btn"}>View more trend</Button>
        </div>
      </section>
    </div>
  );
};

export default PlatformSection;
