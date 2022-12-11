

export const Highlights = ({ highlights }:{highlights: string[]}) => {
  return (
    <ul>
      {
        highlights.map( (elem,index) => (
          <li key={ index }>{ elem }</li>
        ) )
      }
    </ul>
  )
}
