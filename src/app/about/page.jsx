import FadeIn from "@/components/FadeIn";
import Container from "@/components/layout/Container";
import Title from "@/components/title/Title";
import React from "react";

const About = () => {
  return (
    <Container>
      <div className="flex flex-col gap-6">
        <FadeIn>
          <Title title="We Provide Best Services" />
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col md:flex-row items-start gap-10">
            <p className="mx-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              suscipit quod, natus laborum aliquam officia maiores nemo corporis
              rem necessitatibus alias reiciendis eum consectetur nostrum neque
              libero quam. Tempora, delectus?
            </p>
            <p className="mx-w-2xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              assumenda, similique sunt nobis recusandae dolore vero excepturi
              repellendus dolor reiciendis amet corrupti optio quaerat soluta
              modi culpa blanditiis ut maxime?
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col md:flex-row items-start gap-10">
            <p className="mx-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              suscipit quod, natus laborum aliquam officia maiores nemo corporis
              rem necessitatibus alias reiciendis eum consectetur nostrum neque
              libero quam. Tempora, delectus?
            </p>
            <p className="mx-w-2xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              assumenda, similique sunt nobis recusandae dolore vero excepturi
              repellendus dolor reiciendis amet corrupti optio quaerat soluta
              modi culpa blanditiis ut maxime?
            </p>
          </div>
        </FadeIn>
      </div>
    </Container>
  );
};

export default About;
