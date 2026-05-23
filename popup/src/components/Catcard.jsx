import "../style/wardobe.css"
import Popup from "../components/Popup"

const Catcard = () => {
  const catWardrobe = [
  {
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6",
    name: "Moonlight Velvet Coat",
    price: 45.99
  },
  {
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
    name: "Midnight Shimmer Cape",
    price: 39.50
  },
  {
    image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13  ",
    name: "Playful Paw Bow Tie",
    price: 12.00
  },
  {
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
    name: "Adventurer’s Raincoat",
    price: 29.99
  },
  {
    image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13",
    name: "Regal Silk Scarf",
    price: 18.75
  },
  {
    image: "https://images.unsplash.com/photo-1511044568932-338cba0ad803",
    name: "Bell-Tipped Boots",
    price: 34.20
  },
  {
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
    name: "Feathered Masquerade Hat",
    price: 22.40
  },
  {
    image: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb",
    name: "Jewel-Studded Collar",
    price: 55.00
  },
  {
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987",
    name: "Grand Masquerade Costume",
    price: 65.99
  },
  {
    image: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
    name: "Royal Lounge Robe",
    price: 42.50
  }
];





  return (
    <>
      {catWardrobe.map((val, idx) => {
        return (
          <div className="wardobeContainer">
            <div className="wardobe" key={idx}>
              <img src={val.image} alt="not found" />
              <h3>{val.name}</h3>
              <h5>{val.price}</h5>
              <Popup
                  trigger={<button className="button"> Buy </button>}
                  modal
                  nested
                ></Popup>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Catcard;
