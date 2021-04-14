import React from "react";
import Fluoride from "../../../images/Fluoride.png";
import Cavity from '../../../images/Cavity.png';
import Whitening from "../../../images/whitening.png";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const serviceData = [
  {
    name: "Fluoride Treatment",
    image: Fluoride,
  },
  {
    name: "Cavity Filling",
    image: Cavity,
  },
  {
    name: "Teeth Whitening",
    image: Whitening,
  },
];

const Services = () => {
  return (
    <section className="pt-5">
      <div className="text-center">
        <h5 style={{ color: "#1CC7C1" }}>OUR SERVICES</h5>
        <h2>SERVICES WE PROVIDE</h2>
      </div>
      <div class="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
          {serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)}
        </div>
      </div>
    </section>
  );
};

export default Services;
