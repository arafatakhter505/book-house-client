import React from "react";
import { bookselv } from "../../../assets";

const Hero = () => {
  return (
    <section className="container mx-auto my-12 flex md:flex-row flex-col-reverse items-center px-6 lg:px-0">
      <div className="md:w-1/2">
        <h3 className="text-xl">Book House</h3>
        <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold">
          Best Book Buy & <span className="text-primary">Rent Library</span>
        </h2>
        <p className="my-3 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          facere odit doloribus nam, dolorum optio quaerat pariatur nihil
          quibusdam, sint consequatur mollitia. Consequatur iusto nobis rerum
          quidem eum nulla molestias.
        </p>
        <button className="btn btn-primary text-white">Shop Now</button>
      </div>
      <div className="md:w-1/2">
        <img src={bookselv} alt="" className="md:w-2/3 ml-auto" />
      </div>
    </section>
  );
};

export default Hero;
