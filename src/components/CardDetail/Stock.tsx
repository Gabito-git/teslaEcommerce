import { AiFillClockCircle, AiOutlineCheck } from "react-icons/ai"


export const Stock = ({ stock }: { stock: boolean }) => {
  return (
    <>
      {
        stock
        ? (
          <div className="car-detail__stock">
            <AiOutlineCheck style={{ fontSize:'1.8rem' }}/>
            <p>In Stock!</p>
          </div>
        )
        : (
          <div className="car-detail__stock">
            <AiFillClockCircle style={{ fontSize:'1.8rem' }}/>
            <p>Out Of Stock!</p>
          </div>
        )
      }
    </>
  )
}
