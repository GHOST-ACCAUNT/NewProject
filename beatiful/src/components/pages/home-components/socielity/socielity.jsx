import React from "react";
import securityIcon from "/mock-imges/icons/security.svg";
import outsourcingIcon from "/mock-imges/icons/outsourcing.svg";
import ikigaiIcon from "/mock-imges/icons/ikigai.svg";
import alchemy from "/mock-imges/icons/alchemy.svg";
import social from "/mock-imges/icons/social.png";
import leader from "/mock-imges/icons/leader.svg";
import briding from "/mock-imges/icons/briding.svg";
import placeEarth from "/mock-imges/icons/place-earth.svg";

const items = [
  {
    icon: securityIcon,
    title: "Financial Security",
    description: "Keep more of your hard-earned cash in your wallet.",
  },
  {
    icon: outsourcingIcon,
    title: "Outsourcing",
    description: "you want to avoid certain chores that you don't enjoy.",
  },
  {
    icon: ikigaiIcon,
    title: "Ikigai",
    description:
      "you want to spend more time doing, what you love, what you are good at, what you can get paid for, what the world needs. .",
  },
  {
    icon: alchemy,
    title: "Alchemy",
    description:
      "you want to replace things that you don't want with things that you do want.",
  },
  {
    icon: social,
    title: "Social",
    description:
      "you want to replace things that you don't want with things that you do want..",
  },
  {
    icon: leader,
    title: "Leader",
    description:
      "you want to strengthen one or more of the communities or groups you are associated with.",
  },
  {
    icon: briding,
    title: "Briding",
    description:
      "you want people who are different from one another to get along with each other.",
  },
  {
    icon: placeEarth,
    title: "Place Earth",
    description:
      "you want to reduce your carbon footprint without unduly impacting your lifestyle.",
  },
];

export const Socielity = () => {
  return (
    <div className='mt-12 text-center'>
      <h1 className='w-[397px] h-[46px] flex-shrink-0 text-[26px] not-italic font-bold leading-[48px] text-yomon-1 mx-[auto] my-[0]'>
        Why Socielity ?
      </h1>
      <p className='w-[743px] h-[73px] flex-shrink-0 text-center text-[16px] not-italic font-normal leading-[24px] text-yomon-default mx-[auto]'>
        Welcome to CommuniTrader.com, the private on-line marketplace where you
        can exchange goods and services, cash-free, in one place, 24/7, with a
        select group of individuals, organizations, and businesses that you know
        and trust.
      </p>
      <div className='grid grid-cols-4 grid-rows-2 gap-8 mt-[50px]'>
        {items.map((item, index) => (
          <div
            key={index}
            className='p-6 box dfcol items-center gap-8 bg-gray-200 rounded-[8px]'
          >
            <div className='img'>
              <img src={item.icon} alt={`${item.title} Icon`} />
            </div>
            <div className='dfcol items-center gap-4'>
              <h3 className='text-lg font-bold leading-7'>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
