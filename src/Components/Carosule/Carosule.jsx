import { Carousel } from "keep-react";
// import { ArrowLineLeft, ArrowLineRight } from "phosphor-react";

export const CarouselComponent = () => {
  return (
    <Carousel
    className="-mt-48"
    slideInterval={4000}
     
    >
      <div>
      <img
        src="https://images.prismic.io/staticmania/ecd45179-4b86-4a34-b245-0078e022db5a_1.png?auto=compress,format"
        alt="slider-1"
        className="h-96 w-full rounded-full p-10 m-4"
      />
      </div>
      <div>
      <img
        src="https://images.prismic.io/staticmania/ecd45179-4b86-4a34-b245-0078e022db5a_1.png?auto=compress,format"
        alt="slider-1"
        className="h-96 w-full rounded-full p-10 m-4"
      />
      </div>
      
    
      
    </Carousel>
  );
};
