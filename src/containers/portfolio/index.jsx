import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import ImageOne from "../../components/images/image1.jpg";
import ImageTwo from "../../components/images/image2.jpg";
import ImageThree from "../../components/images/image3.jpg";
import ImageFour from "../../components/images/image4.jpg";
import ImageFive from "../../components/images/image5.jpg";
import ImageSix from "../../components/images/image6.jpg";
import "./styles.scss";
import { Link } from "react-router-dom";

const portfolioData = [
  {
    id: 3,
    name: "Stage 1er année",
    image: ImageOne,
    link: "/stage",
  },
  {
    id: 2,
    name: "projet VFG auto",
    image: ImageTwo,
    link: "/vfgauto",
  },
  {
    id: 2,
    name: "GLPI - Installation Debian 12",
    image: ImageSix,
    link: "/glpi",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "all",
  },
  {
    filterId: 2,
    label: "cours",
  },
  {
    filterId: 3,
    label: "stage",
  },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("===============================");
  console.log(hoveredValue);
  console.log("===============================");

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        HeaderText="Mon portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem-${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <Link to={item.link}>
                    <button>Visiter</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
