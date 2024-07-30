"use client";
import ImageLoader from "@/components/ImgLoader/ImageLoader";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function ImageRenderer({ image, title }: { image: string; title: string }) {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  useEffect(() => {
    const img = new Image();
    if (img)
      img.onload = () => {
        setIsImageLoaded(true);
      };
    img.src = image;
  }, [image]);
  return (
    <>
      {isImageLoaded ? (
        <div className=" w-fit mx-auto  ">
          <>
            <LazyLoadImage
              src={image}
              alt={title}
              effect="blur"
              className="lg:w-[800px] w-auto rounded"
              threshold={100}
            />
          </>
        </div>
      ) : (
        <div className="  w-full mx-auto h-[300px] lg:h-[86vh] flex justify-center items-center project_card_container">
          <ImageLoader />
        </div>
      )}
    </>
  );
}

export default ImageRenderer;
