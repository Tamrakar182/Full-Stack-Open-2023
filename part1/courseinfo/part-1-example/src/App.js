const Header = (headerName) => {
  return (
      <h1>{headerName.name}</h1>
  )
}

const Content = (courseName) => {
  return (
    <p>{courseName.course} {courseName.points}</p>
  )
}

const Total = (points) => {
  return (
    <p>Number of exercises = {points.points.reduce((partialSum, a) => partialSum + a, 0)} </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>
      <Content course={part1} points={exercises1}/>
      <Content course={part2} points={exercises2}/>
      <Content course={part3} points={exercises3}/>
      <Total points={[exercises1,exercises2,exercises3]} />
    </div>
  )
}


export default App