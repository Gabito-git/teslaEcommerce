
import cars from "../cars";
import Section from "../components/Section";

const Homepage = () => {

  const renderCars = () => {
    return cars.map( (car, index) => {
      const isLastSection = index === cars.length -1
      return(
        <Section 
          car={ car }
          key={ car.id } 
          isLastSection={ isLastSection }
        />
      )
    })
  }

  return (
    <div className="homepage">
      { renderCars() }
    </div>
  )
}

export default Homepage