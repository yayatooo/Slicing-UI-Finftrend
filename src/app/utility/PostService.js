import React from "react";

const images = [
  {
    id: 1,
    urls: [
      "./assets/tweets/tweet 1.svg",
      "./assets/tweets/tweet 2.svg",
      "./assets/tweets/tweet 3.svg",
    ],
  },
  {
    id: 2,
    urls: [
      "./assets/tweets/tweet 1.svg",
      "./assets/tweets/tweet 2.svg",
      "./assets/tweets/tweet 3.svg",
    ],
  },
  {
    id: 3,
    urls: [
      "./assets/tweets/tweet 1.svg",
      "./assets/tweets/tweet 2.svg",
      "./assets/tweets/tweet 3.svg",
    ],
  },
  {
    id: 4,
    urls: [
      "./assets/tweets/tweet 1.svg",
      "./assets/tweets/tweet 2.svg",
      "./assets/tweets/tweet 3.svg",
    ],
  },
  {
    id: 5,
    urls: [
      "./assets/tweets/tweet 1.svg",
      "./assets/tweets/tweet 2.svg",
      "./assets/tweets/tweet 3.svg",
    ],
  },
  {
    id: 6,
    urls: [
      "./assets/tweets/tweet 1.svg",
      "./assets/tweets/tweet 2.svg",
      "./assets/tweets/tweet 3.svg",
    ],
  },
  {
    id: 7,
    urls: [
      "./assets/tweets/tweet 1.svg",
      "./assets/tweets/tweet 2.svg",
      "./assets/tweets/tweet 3.svg",
    ],
  },
  {
    id: 8,
    urls: [
      "./assets/tweets/tweet 1.svg",
      "./assets/tweets/tweet 2.svg",
      "./assets/tweets/tweet 3.svg",
    ],
  },
];

const getPost = (platformId) => {
  const platform = images.filter((data) => data.id === platformId)[0];
  // console.log(images.filter((data) =>  data.id === platformId)[0]);
  return (
    <>
      {platform.urls.map((data, i) => {
        return (
          <div className="w-full" key={i}>
            <img src={data} alt="tes" key={data.id} className="mx-auto" />
          </div>
        );
      })}
    </>
  );
};

export default getPost;
