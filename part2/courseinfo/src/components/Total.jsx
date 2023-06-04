const Total = ({points}) => {
    return (
      <p><strong>total of {points.reduce((partialSum, a) => partialSum + a, 0)} exercises</strong></p>
    )
}

export default Total