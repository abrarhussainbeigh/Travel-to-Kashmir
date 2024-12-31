import { useEffect, useState } from 'react';

export default function Hero() {
  // List of images for the slideshow
  const images = [
    "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=",
    "https://media.istockphoto.com/id/1323846766/photo/a-beautiful-view-of-dal-lake-in-winter-srinagar-kashmir-india.jpg?s=612x612&w=0&k=20&c=Dp3peie2t-jdLEmqe4W-DD09GACu2Cr-JjHHeB6rpBc=",
    "https://media.istockphoto.com/id/1167698954/photo/scenic-view-of-dal-lake-jammu-kashmir-india.jpg?s=612x612&w=0&k=20&c=U2YRFaJkRfkyR-DRahlNtRfToXeaHAk7mEhmJlt2EBo=",
    "https://media.istockphoto.com/id/1139929489/photo/asias-largest-tulip-garden-in-jammu-and-kashmir.jpg?s=612x612&w=0&k=20&c=b-t9m5GQaJvIN7pD3ODaDSopOdyHuTu5yzblGXJQi-0=",
    "https://media.istockphoto.com/id/482651073/photo/valley-of-flowers.jpg?s=612x612&w=0&k=20&c=o6__zu4ZNOTE8jASiGIZxW9snXG0pPknugHvb3VhaDI=",
    "https://media.istockphoto.com/id/1149569073/photo/beautiful-scenery-of-snowy-pine-trees-with-sunset-at-background.jpg?s=612x612&w=0&k=20&c=n0kOTvAbsErHnbj8svHzUnTzTOHi5YA3nWz4nR4mBWA=",
    "https://media.istockphoto.com/id/1335055609/photo/view-of-betab-valley-in-winter-season-near-pahalgam-kashmir-india.jpg?s=612x612&w=0&k=20&c=GhioTgbop5NtmOgZB41-lZMZRDKnccIYoJWSauRSQEI="
  ];

  const [currentImage, setCurrentImage] = useState(0); // To track the current image index

  useEffect(() => {
    // Preload images to avoid delay
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    preloadImages();

    // Change the image every 6 seconds
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Background Image Slideshow with Fade + Zoom */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          animation: 'fadeZoomInOut 6s ease-in-out infinite', // Apply combined fade and zoom animation
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Discover the Beauty of Kashmir
          </h1>
          <p className="text-white text-lg md:text-xl mb-8">
            Experience the paradise on earth with our exclusive travel packages
          </p>
          <a
            href="#packages"
            className="bg-green-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300"
          >
            Explore Packages
          </a>
        </div>
      </div>

      {/* Keyframe Animation for Smooth Fade + Zoom */}
      <style jsx>{`
        @keyframes fadeZoomInOut {
          0% {
            /*opacity: 0.5;*/
            transform: scale(1.05);
          }
          50% {
           /* opacity: 1;*/
            transform: scale(1.1); /* Zoom In */
          }
          100% {
           /* opacity: 0.5;*/
            transform: scale(1.05); /* Zoom Out */
          }
        }
      `}</style>
    </div>
  );
}

