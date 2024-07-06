'use client'
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';

const Gallary = () => {

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    '/public/Image/partnar/1.png',
    '/public/Image/partnar/2.png',
    '/public/Image/partnar/3.png',
    '/public/Image/partnar/11.jpg',
  ];

  const openFullscreen = (image) => {
    setSelectedImage(image);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setSelectedImage(null);
  };
  return (
    <div>

<div>
      <div className="flex flex-wrap justify-center">
        {images.map((image, index) => (
          <div key={index} className="p-2">
            <Image
            width={300}
            height={300}
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="cursor-pointer w-48 h-48 object-cover"
              onClick={() => openFullscreen(image)}
            />
          </div>
        ))}
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 text-white bg-red-600 rounded-full p-2"
          >
            X
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </div>
      
    </div>
  )
}

export default Gallary
