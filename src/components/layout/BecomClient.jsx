"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const BecomClient = () => {
  return (
    <div className="h-screen bg-gray-50 flex items-center">
      <section
        className="w-full bg-cover bg-center py-32"
        style={{
          backgroundImage:
            'url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHgA8gMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAAAAQIDBAf/xAAkEAACAwEAAgICAgMAAAAAAAAAAQIRITESQVFhAyJxgRMyof/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDxVDYAAIpMkAKscfskpP6Aq0UnhCfwVGTb0CiofYkiktApKuFrUKKLitAcFhagn0qCwtUBlWleFopqtQP+QM3HDCdpnUuUuGE9AyWiaZXsmTAl8IRTeGbAJNE0DE3QBxidMTdgAwuiRsBvSaoHdE02BdoCfF/IAUAiuACBsLF0BrSq0EvkaX7ANIpdwKKq2gLopCiigKiapL2TFUWqAtIaS+RJou41wArCJIu79ksBKJlNG3VXwZziBzbZDNZKkZyAh8MzStoKwDH2J8LmklZDeAR7GSwtgNsa0nSlgBQroqTuNEegKsCN+AApDsSGAFIl2O/0sC0vsqvdmXldGl4A10qxDSYGsXZSIjhfkBouFxTuzP8AG7NE0BVpFxdmOtmkcArjG1aIu3ZXk64AroUuAlbK8VWgc8qujOUc4dEkl6MZIDB5KzKTd4bzRi42+ARJ2iW8otxwnxAzeCLpsXiAkXbXCaHTABPC4xfbJn3AJsQeLACkNoKLjQEqNoqSuKQ6oVtACgUn8jUr6OkwBsalQNCYGilZaMoGqYFr/ha5pCNE18AVFWy3F+g/FT9GjoDOmUp1jRf6ky/gAb/VtEuTeIU/rhEZWgCe4zGeGsjn/Jbl9AJ6Q6G3RDYEzdukZtjb/Zsh9ALAKwQFVYcZKdCfQLFLSo6rM5gOmIn+2AGjaCLJod0BfRtMlSKk8ASNI9M0y4gaSwlb6BSYW/YFwpFpWYxaZvF5gGkI5pVfHSFMFL9u1/QHVC4dH5qzL/LarpSkkuoDRU3fCpSww80/aY15AORC+kOT1UT/AJVxIAb3TCf+xc5mM5AZ/l6Yt6VJ2yGAn0dAinQE19ioJDbwCWmxDbJTAqK8Z4wfQSt/YpOnVAAh39CApAylGxONewEi/RKWMdAJdLtUZ1oAbJlXfMIgNgUk/k0g8MotVppBpqgNkqE+kee0DYGqklGxudxxUYpqqZKmrYHSqcUkaeVf0c8JXq4VKUVtgOf5reUQ/wAq41QsbtIUkusBOa9GMn5UVLuERTsBUTI1dEtAQl+qQMcmSBEgGyWwHVirRrg0Atu0Emm0xoVaAUgGADQ2Suj8voBoAbEAMEtALAviwpc0mLKfAEi4/r32QirYGi8fSF5VrJUmiJStgaOViXcIt4aRVAaxZH5HuEvvSkgKhiFNh5IiTAhy0qLM21bBTA0kZtsUvyN8I8mBVghJ+hsBS+iChMAsVitjSbVgO9CyV0v0BNgAAUhpAADoAACG9BgADRqngABDY4sAApvNZK1gADaaGp4MAF56aRdgAAyZCACK/YVAACaEAAC6W1gABK0TWgAEsPIAAIlLAABWIAA//9k=")',
        }}
      >
        <div className="container mx-auto text-center text-white">
          <h1 className="text-xl md:text-4xl font-medium mb-6">
            A B2B consultancy with expertise in
          </h1>
          <p className=" text-4xl md:text-8xl mb-12">
            <Typewriter
              words={[
                "PPC (PAY PER CLICK)",
                "Email Marketing",
                "Logo Design",
                "SEO",
                "Affiliate Marketing",
                "Competitor Analysis",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </p>
          <a
            href="#"
            className="bg-indigo-500 text-white text-sm py-2 px-8 md:text-xl md:py-4 md:px-12 rounded-full hover:bg-indigo-600"
          >
            Book A 30 Minute Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default BecomClient;
