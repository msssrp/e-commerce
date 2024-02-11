import React from "react";

const OurService = () => {
  const service = [
    {
      id: 1,
      image: "/home/services/assurance.png",
      title: "High-Quality Products",
      description: "We offer a curated selection of high-quality products",
    },
    {
      id: 2,
      image: "/home/services/fast-delivery.png",
      title: "Fast delivery",
      description: "We deliver your order promptly to your door",
    },
    {
      id: 3,
      image: "/home/services/order.png",
      title: "Online Ordering",
      description:
        "Explore products & order with ease using our Online Ordering",
    },
    {
      id: 4,
      image: "/home/services/gift.png",
      title: "Gift Cards",
      description:
        "Give the gift of exemptional dinling with SE Shop Gift Cards",
    },
  ];
  return (
    <div className="section-container mt-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="md:w-1/2">
          <div className="flex flex-col text-left md:w-4/5">
            <p className="subtitle uppercase">our story & services</p>
            <h2 className="title">Our Journey And Services</h2>
            <span className="text-black">
              We provide a curated selection of high-quality tech-inspried
              products, backend by fast shipping ad exceptional customer
              service. Our mission is to empower and inspire tech enthusiats
              through our carefully chosen merchandise and community engagement
              intiatives
            </span>
            <div>
              <button className="px-8 py-3 text-center rounded-full bg-red text-white mt-5">
                Explore
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            {service.map((item, index) => (
              <div
                key={index}
                className=" max-w-80 mb-5 flex flex-col items-center justify-center text-red shadow-md text-center">
                <div className="max-w-[70px]">
                  <img src={item.image} alt="" />
                </div>
                <p className="subtitle mt-5">{item.title}</p>
                <span className="text-black px-4 py-2 pb-6">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
