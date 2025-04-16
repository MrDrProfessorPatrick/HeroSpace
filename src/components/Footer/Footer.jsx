import FooterBg from "../../assets/planetsRow.webp";

const FooterLinks = [
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contacts",
    link: "/#contacts",
  },
  {
    title: "Pricing",
    link: "/#pricing",
  },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "100px",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={bgImage} className=" text-white flex justify-end">
      <div className="min-h-[250px] py-8 px-4">
        <ul className="flex mt-[100px] gap-6">
          {FooterLinks.map((data, index) => (
            <li key={index}>
              <a
                href={data.link}
                className="inline-block hover:scale-105 duration-200 "
              >
                {data.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
