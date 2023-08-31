import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import g1 from './Miniimages/g1.webp'

const CardCarousel = () => {
  // Sample data for cards, each card contains images
  const cardsData = [
    {
      id: 1,
      title: "Card 1",
      images: [
        { id: 1, src: "image1.jpg" },
        { id: 2, src: "image2.jpg" },
        { id: 3, src: "image3.jpg" },
        { id: 3, src: "image3.jpg" },
        { id: 3, src: "image3.jpg" },
        { id: 3, src: "image3.jpg" },
        { id: 3, src: "image3.jpg" },

        // Add more images here as needed
      ],
    },
    {
      id: 2,
      title: "Card 2",
      images: [
        { id: 4, src:{g1}  },
        { id: 5, src: "image5.jpg" },
        { id: 6, src: "image6.jpg" },
        // Add more images here as needed
      ],
    },
    // Add more cards here as needed
  ];

  return (
    <div>
      <h1>Card Carousel</h1>
      <Carousel showThumbs={false} infiniteLoop>
        {cardsData.map((card) => (
          <div key={card.id}>
            <h3>{card.title}</h3>
            <div className="row">
              {card.images.map((image) => (
                <div key={image.id} className="col-md-2">
                  <div className="card">
                    <img
                      src={image.src}
                      className="card-img-top"
                      alt={`Image ${image.id}`}
                    />
                    <div className="card-body">
                      {/* Add additional content for each image if needed */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CardCarousel;
