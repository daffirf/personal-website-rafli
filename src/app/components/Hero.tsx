'use client'
import React from 'react'
import Image from "next/image";
import { Button } from "../components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#e7ecff] flex flex-col justify-center items-center text-center px-4">
      <div className="w-32 h-32 md:w-48 md:h-48 relative mb-6">
        <Image
          src="/images/MRF_FotoPas2023.jpg"
          alt="Foto Profil"
          layout="fill"
          objectFit="cover"
          className="rounded-full shadow-lg border-4 border-white"
        />
      </div>
      <h2 className="text-lg md:text-xl text-gray-600 font-medium mb-1">Hello there!</h2>
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
        Muhammad Rafli Fajri
      </h1>
      <h3 className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">
        Full Stack Web Developer
      </h3>
      <p className="text-gray-700 max-w-xl mx-auto text-sm md:text-base mb-6">
        Building scalable web solutions for your needs.
      </p>
      <a href="#portfolio">
      <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base px-6 py-3 rounded-full">
       View Portfolio
      </Button>
      </a>
    </section>
  );
}