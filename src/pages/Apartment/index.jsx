import "./style.css";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import { useState } from "react";


function Apartment() {
  const { id } = useParams();
  const apartment = data.find((apartment) => apartment.id == id);

  const tags = apartment.tags.map((tag) => <li key={tag}>{tag}</li>);

  const areEquips = apartment.Amenities != undefined ? apartment.Amenities : ['none']
   const equips = areEquips.map((equip) => (
    <li key={equip}>{equip}</li>
  ));
  

  const [descOpened, setDescOpened] = useState(false);
  const [equipOpened, setEquipOpened] = useState(false);

  function FullStar()  {
    return (
    <svg
    className='star'
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
        fill="#FF6060"
      />
    </svg>
  )};

  function EmptyStar() {
    return (
    <svg
    className='star'
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
        fill="#E3E3E3"
      />
    </svg>
  )};

  const ratingStars = [];
  for (let i = 1; i <= apartment.rating; i++) {

    ratingStars.push(<FullStar key={'a' + i} />)

  }

  for (let i = 1; i <= 5 - apartment.rating; i++) {

    ratingStars.push(<EmptyStar key={'b' + i} />)

  }

  return (
    <div>
      <Header />
      <article>
        <Gallery photos={apartment.pictures} />
        <section>
          <div>
            <h3>{apartment.title}</h3>
            <div>{apartment.location}</div>
            <ul>{tags}</ul>
          </div>
          <div className='host-container'>
            <div className="host">
              <div className="host-name">{apartment.host.name}</div>
              <img className="host-img" src={apartment.host.picture} />
            </div>
            <div className="stars">
              {ratingStars}
            </div>
          </div>
        </section>
        <div className="details">
          <div className="description">
            <div className="title-container">
              <div className="description-title">Description</div>
              <div onClick={() => setDescOpened(!descOpened)}>
                <svg
                  className={descOpened ? "turn-arrow" : ""}
                  width="20"
                  height="15"
                  viewBox="0 5 25 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.66344 0.859489L0.530518 3.00462L12.4604 14.9233L24.3903 2.99257L22.2574 0.859489L12.4604 10.6572L2.66344 0.859489Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            {descOpened && (
              <div className="description-body">{apartment.description}</div>
            )}
          </div>
          <div className="equipment">
            <div className="title-container">
              <div className="equipment-title">Equipment</div>
              <div onClick={() => setEquipOpened(!equipOpened)}>
                <svg
                  className={equipOpened ? "turn-arrow" : ""}
                  width="20"
                  height="15"
                  viewBox="0 5 25 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.66344 0.859489L0.530518 3.00462L12.4604 14.9233L24.3903 2.99257L22.2574 0.859489L12.4604 10.6572L2.66344 0.859489Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            {equipOpened && (
              <div className="equipment-body">
                <ul className="equip-list">{equips}</ul>
              </div>
            )}
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}

export default Apartment;
