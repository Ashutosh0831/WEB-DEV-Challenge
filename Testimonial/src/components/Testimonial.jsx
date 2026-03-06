
import "../style/box.css"

const Testimonial = ({ img, name, review }) => {
  return (
    <>
      <div className="container">
        <div className="foot">
            <img src={img} alt={name} />
            <h3>{name}</h3>
        </div>   
        <p className="desc">{review}</p>
      </div>
    </>
  )
}

export default Testimonial
