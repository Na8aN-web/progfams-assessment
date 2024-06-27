import Hero from "@/components/Hero";
import FastTrack from "@/components/FastTrack";
import Testimonials from "@/components/Testimonials";
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <FastTrack />
      <Testimonials />
    </div>
  );
}

export default Home;
