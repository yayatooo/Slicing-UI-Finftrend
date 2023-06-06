"use client";
import React from "react";
import CardBestDeal from "./CardBestDeal";
import { useState } from "react";
import Switch from "../utility/Switch";

const BestDealSection = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <section className="py-28 bg-black w-full">
      <div className="w-10/12 mx-auto">
        <h1 className="text-6xl font-effra-heavy  text-center text-white mobile:text-4xl">
          Get your best deal
        </h1>
      </div>
      <div className="flex justify-center py-12">
        <Switch isChecked={isChecked} setIsChecked={setIsChecked} />
      </div>
      <div className="w-10/12 flex flex-wrap justify-center mx-auto gap-y-4 gap-x-4">
        <div className="w-[360px] h-[640px] p-8 rounded-xl bg-gray-4">
          <CardBestDeal
            tittle="Personal"
            desc="Special packet for all"
            price="8$"
            benefits="Up to 5 page each group"
          />
          <button className="w-full py-4 rounded-full font-effra-reguler bg-primary text-black hover:bg-secondary">
            Start Free Trial
          </button>
        </div>
        <div className="w-[360px] h-[640px] p-8 rounded-xl bg-primary">
          <CardBestDeal
            tittle="Reguler"
            desc="For You in Profesional"
            price="20$"
            benefits="Up to 5 page each group"
          />
          <button className="w-full py-4 rounded-full font-effra-reguler bg-black text-white">
            Start Free Trial
          </button>
        </div>
        <div className="w-[360px] h-[640px] p-8 rounded-xl bg-gray-4">
          <CardBestDeal
            tittle="Premium"
            desc="Packet For Start up Company"
            price="48$"
            benefits="Up to 5 page each group"
          />
          <button className="w-full py-4 rounded-full font-effra-reguler bg-primary text-black hover:bg-secondary">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestDealSection;
