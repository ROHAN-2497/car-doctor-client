import React, { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [Services, setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])

  return (
    <div className="mt-8">
      <div className="text-center">
        <h2 className="text-xl text-orange-600 font-bold">Services</h2>
        <h1 className="text-5xl text-black font-bold my-5">Our Service Area</h1>
        <p className="text-black">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            Services.map(service => <ServicesCard 
            key={service._id}
           service={service}
            ></ServicesCard>)
        }
      </div>
    </div>
  );
};

export default Services;
