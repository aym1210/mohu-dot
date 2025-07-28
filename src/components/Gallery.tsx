import React from 'react';
import { ExternalLink, Plus } from 'lucide-react';

const Gallery = () => {
  // Corrected image paths to match actual files in /Gallery/ folder
  const galleryImages = [
    { id: 1, src: "/Gallery/clean1 (1).jpeg", alt: "Exterior car detailing" },
    { id: 2, src: "/Gallery/clean1 (19).jpeg", alt: "Interior car cleaning" },
    { id: 3, src: "/Gallery/clean1 (20).jpeg", alt: "Car washing process" },
    { id: 4, src: "/Gallery/clean1 (21).jpeg", alt: "Professional car detailing" },
    { id: 5, src: "/Gallery/clean1 (22).jpeg", alt: "Car interior detailing" },
    { id: 6, src: "/Gallery/clean1 (23).jpeg", alt: "Car exterior shine" },
    { id: 7, src: "/Gallery/clean1 (24).jpeg", alt: "Detailed car cleaning" },
    { id: 8, src: "/Gallery/clean1 (25).jpeg", alt: "Premium car care" },
    { id: 9, src: "/Gallery/clean1 (26).jpeg", alt: "Car detailing excellence" },
    { id: 10, src: "/Gallery/clean1 (27).jpeg", alt: "Professional car wash" },
    { id: 11, src: "/Gallery/clean1 (28).jpeg", alt: "Interior cleaning service" },
    { id: 12, src: "/Gallery/clean1 (29).jpeg", alt: "Exterior detailing work" },
    { id: 13, src: "/Gallery/clean1 (30).jpeg", alt: "Car care services" },
    { id: 14, src: "/Gallery/clean1 (31).jpeg", alt: "Professional detailing" },
    { id: 15, src: "/Gallery/clean1 (32).jpeg", alt: "Quality car cleaning" },
    { id: 16, src: "/Gallery/clean1 (33).jpeg", alt: "Premium car detailing" },
    { id: 17, src: "/Gallery/clean1 (34).jpeg", alt: "Car washing excellence" },
    { id: 18, src: "/Gallery/clean1 (35).jpeg", alt: "Interior car care" },
    { id: 19, src: "/Gallery/clean1 (36).jpeg", alt: "Exterior car polish" },
    { id: 20, src: "/Gallery/clean1 (37).jpeg", alt: "Professional car service" },
    { id: 21, src: "/Gallery/clean1 (38).jpeg", alt: "Detailed car wash" },
    { id: 22, src: "/Gallery/clean1 (39).jpeg", alt: "Car cleaning service" },
    { id: 23, src: "/Gallery/clean1 (40).jpeg", alt: "Premium detailing work" },
    { id: 24, src: "/Gallery/clean1 (41).jpeg", alt: "Car care excellence" },
    { id: 25, src: "/Gallery/clean1 (42).jpeg", alt: "Professional cleaning" },
    { id: 26, src: "/Gallery/clean1 (43).jpeg", alt: "Car detailing service" },
    { id: 27, src: "/Gallery/clean1 (44).jpeg", alt: "Interior car detailing" },
    { id: 28, src: "/Gallery/clean1 (45).jpeg", alt: "Exterior car care" },
    { id: 29, src: "/Gallery/clean1 (46).jpeg", alt: "Quality car wash" },
    { id: 30, src: "/Gallery/clean1 (47).jpeg", alt: "Premium car cleaning" },
    { id: 31, src: "/Gallery/clean1 (48).jpeg", alt: "Car detailing process" },
    { id: 32, src: "/Gallery/clean1 (49).jpeg", alt: "Professional car care" },
    { id: 33, src: "/Gallery/clean1 (50).jpeg", alt: "Car washing service" },
    { id: 34, src: "/Gallery/clean1 (51).jpeg", alt: "Detailed cleaning work" },
    { id: 35, src: "/Gallery/clean1 (52).jpeg", alt: "Car care service" },
    { id: 36, src: "/Gallery/clean1 (53).jpeg", alt: "Professional detailing" },
    { id: 37, src: "/Gallery/clean1 (54).jpeg", alt: "Car cleaning excellence" },
    { id: 38, src: "/Gallery/clean1 (55).jpeg", alt: "Premium car service" },
    { id: 39, src: "/Gallery/clean1 (56).jpeg", alt: "Car detailing work" },
    { id: 40, src: "/Gallery/clean1 (57).jpeg", alt: "Professional car wash" },
    { id: 41, src: "/Gallery/clean1 (58).jpeg", alt: "Interior cleaning" },
    { id: 42, src: "/Gallery/clean1 (59).jpeg", alt: "Exterior detailing" },
    { id: 43, src: "/Gallery/clean1 (60).jpeg", alt: "Car care process" },
    { id: 44, src: "/Gallery/clean1 (61).jpeg", alt: "Quality detailing" },
    { id: 45, src: "/Gallery/clean1 (62).jpeg", alt: "Professional cleaning" },
    { id: 46, src: "/Gallery/clean1 (63).jpeg", alt: "Car washing work" },
    { id: 47, src: "/Gallery/clean1 (64).jpeg", alt: "Premium car care" },
    { id: 48, src: "/Gallery/clean1 (65).jpeg", alt: "Car detailing service" },
    { id: 49, src: "/Gallery/clean1 (66).jpeg", alt: "Professional car care" },
    { id: 50, src: "/Gallery/clean1 (67).jpeg", alt: "Car cleaning process" },
    { id: 51, src: "/Gallery/clean1 (68).jpeg", alt: "Detailed car service" },
    { id: 52, src: "/Gallery/clean1 (69).jpeg", alt: "Car care excellence" },
    { id: 53, src: "/Gallery/clean1 (70).jpeg", alt: "Professional detailing" },
    { id: 54, src: "/Gallery/clean1 (71).jpeg", alt: "Car care perfection" }
  ];

  const [visibleImages, setVisibleImages] = React.useState(10);

  const loadMoreImages = () => {
    setVisibleImages((prev) => Math.min(prev + 6, galleryImages.length));
  };

  const displayedImages = galleryImages.slice(0, visibleImages);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the transformation and quality of our professional detailing services
          </p>
          <div className="w-20 h-1 bg-blue-600 rounded mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium mb-1">{image.alt}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleImages < galleryImages.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMoreImages}
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span>Load More Images</span>
            </button>
          </div>
        )}

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Want to see your car featured in our gallery?</p>
          <button
            onClick={() =>
              window.open(
                'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1ApvcefZDRDsUmhc4cDheXVG6-Hw1RVPHwcoyG146fEKgzjyLslJu7lls-78SpD-EPA4u-T2vT',
                '_blank'
              )
            }
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Book Your Detail Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
