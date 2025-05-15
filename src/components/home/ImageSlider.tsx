
import React from "react";

const ImageSlider = () => {
  const images = [
    "/lovable-uploads/872c6e53-5ac8-4b3c-94ad-b1b30bd27530.png",
    "/lovable-uploads/9caf0e7c-171b-43cc-8afd-839430af2fc8.png",
    "/lovable-uploads/1a963ccc-23dc-47df-9a80-405bf733e9bb.png",
    "/lovable-uploads/98c170da-aba2-4c13-a9b7-607b9bfcbcc7.png",
    "/lovable-uploads/0c7d3459-99a8-4e1f-b5e9-66d76ffc8734.png",
    "/lovable-uploads/0940de70-6cc4-4f47-99b0-cc7e1b246462.png"
  ];

  return (
    <div className="w-full overflow-hidden glass-card rounded-xl mb-8">
      <div className="relative flex items-center">
        <div className="flex animate-slide">
          {images.map((img, index) => (
            <div key={index} className="min-w-[250px] h-[350px] p-1">
              <img 
                src={img} 
                alt={`MD RAHMAT - image ${index + 1}`} 
                className="w-full h-full object-cover rounded-lg" 
              />
            </div>
          ))}
          {/* Duplicate images for seamless infinite loop */}
          {images.map((img, index) => (
            <div key={`duplicate-${index}`} className="min-w-[250px] h-[350px] p-1">
              <img 
                src={img} 
                alt={`MD RAHMAT - image ${index + 1}`} 
                className="w-full h-full object-cover rounded-lg" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
