import { Carousel } from "keep-react";
// import { ArrowLineLeft, ArrowLineRight } from "phosphor-react";

export const CarouselComponent = () => {
  return (
    <Carousel
    className="-mt-48 "
    slideInterval={4000}
     
    >
      <div>
      <img
        src="https://i.ibb.co/5RRFSXn/3929669.jpg"
        alt="slider-1"
        className="h-96 w-full border border-green-500 rounded-full p-10 m-4"
      />
      </div>
      <div>
      <img
        src="https://i.ibb.co/7Nnhfdj/232.jpg"
        alt="slider-1"
        className="h-96 w-full border border-green-500 rounded-full p-10 m-4"
      />
      </div>
      <div>
      <img
        src="https://i.ibb.co/NCjMz2R/45106.jpg"
        alt="slider-1"
        className="h-96 w-full border border-green-500 rounded-full p-10 m-4"
      />
      </div>
      
    
      
    </Carousel>
  );
};
