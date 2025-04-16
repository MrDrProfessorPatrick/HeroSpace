import HeroPng from "../../assets/planet.png";
import Mars from "../../assets/Planet_Mars.png";
import Moon from "../../assets/moon.png";
import bgSpaceImg from "../../assets/space.jpg";

const Hero = () => {
  const bgImg = {
    backgroundImage: `url(${bgSpaceImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "800px",
    width: "100%",
  };

  return (
    <>
      <div style={bgImg} className="text-white">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                Enjoy Space Exlorations Every Sunday
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  className="bg-clip-text bg-gradient-to-b text-red-950 font-cursive"
                >
                  Start
                </span>{" "}
              </h1>
              <div data-aos="fade-up" data-aos-delay="400">
                <button className=" from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  From Mars
                </button>
                <img
                  data-aos-once="true"
                  src={Mars}
                  alt="mars img"
                  className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin "
                />
              </div>
            </div>
            {/* Image section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 "
            >
              <div>
                {" "}
                <img
                  data-aos-once="true"
                  src={HeroPng}
                  alt="hero img"
                  className="w-[300px] sm:w-[450px]  mx-auto spin "
                />
                <div
                  data-aos="fade-left"
                  className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute top-10 left-10"
                >
                  <h1 className="text-white">From Earth</h1>
                </div>{" "}
              </div>

              <div>
                <div
                  data-aos="fade-right"
                  data-aos-offset="0"
                  className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute bottom-10 right-10"
                >
                  <h1 className="text-white">From Moon</h1>
                </div>
                <img
                  data-aos-once="true"
                  src={Moon}
                  alt="moon img"
                  className="w-[100px] sm:w-[150px] sm:scale-125 mx-auto spin "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
