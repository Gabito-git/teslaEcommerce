import { AiFillStar } from "react-icons/ai"

export const Stars = () => {

  return (
    <>
      {
        Array(5).fill(0).map( (_, index) => (
          <AiFillStar
            key={ index }
            style={{ fontSize:'1.9rem' }}
          />
        ))
      }
    </>
  )

}
