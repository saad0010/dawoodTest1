import FadeIn from "@/components/FadeIn";
import Container from "@/components/layout/Container";

import React from "react";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (service) => {
  const data = items[service];

  if (data) {
    return data;
  }

  return notFound();
};

const Service = ({ params }) => {
  const data = getData(params.service);
  console.log(data);
  return (
    <Container>
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <h1>{item.desc}</h1>
        </div>
      ))}
    </Container>
  );
};

export default Service;
