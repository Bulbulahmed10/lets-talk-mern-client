import React from "react";
import Marquee from "react-fast-marquee";
import sponsorImg1 from "../../../../assets/sponsorLogo/585fcc6fcb11b227491c35b8.png";
import sponsorImg2 from "../../../../assets/sponsorLogo/61487e7fd329bb0004dbd338 (1).png";
import sponsorImg3 from "../../../../assets/sponsorLogo/62796e8453c8a73e766a78e3.png";
import sponsorImg4 from "../../../../assets/sponsorLogo/6279702453c8a73e766a78ef.png";
import sponsorImg5 from "../../../../assets/sponsorLogo/627e252afb8551d41bf21cd6.png";
import sponsorImg6 from "../../../../assets/sponsorLogo/627e28f0fb8551d41bf21ce9.png";
import sponsorImg7 from "../../../../assets/sponsorLogo/harvard.png";
import SectionHeading from "../../../../shared/SectionHeading/SectionHeading";
import { Zoom } from "react-awesome-reveal";
const Sponsor = () => {
  const sponsorLogos = [
    { id: 1, name: "Harvard University", image: sponsorImg1 },
    { id: 2, name: "Oxford University", image: sponsorImg2 },
    { id: 3, name: "Stanford University", image: sponsorImg3 },
    { id: 4, name: "MIT", image: sponsorImg4 },
    {
      id: 5,
      name: "Cambridge University",
      image: sponsorImg5,
    },
    { id: 6, name: "Yale University", image: sponsorImg6 },
    {
      id: 7,
      name: "Princeton University",
      image: sponsorImg7,
    },
  ];

  return (
    <div className="mx-auto py-4">
      <SectionHeading heading="Our Sponsor" />
      <Marquee speed={40} gradient={false} pauseOnHover={true}>
        {sponsorLogos.map((sponsor) => (
          <>
            <div data-aos="zoom-in" key={sponsor.id} className="px-4 py-2">
              <img
                src={sponsor.image}
                alt={sponsor.name}
                className="w-32 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto object-contain"
              />
            </div>
          </>
        ))}
      </Marquee>
    </div>
  );
};

export default Sponsor;
