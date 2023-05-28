const Header = (headerName) => {
  return (
      <h1>{headerName.name}</h1>
  )
}

const Part = (partName) => {
  return (
    <p>{partName.course} {partName.points}</p>
  )
}

const Content = (courseName) => {
  return (
    <>
    <Part course={courseName.course[0]} points={courseName.points[0]} />
    <Part course={courseName.course[1]} points={courseName.points[1]} />
    <Part course={courseName.course[2]} points={courseName.points[2]} />
    </>
  )
}

const Total = (point) => {
  return (
    <p>Number of exercises = {point.points.reduce((partialSum, a) => partialSum + a, 0)} </p>
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
      <Content course={[part1,part2,part3]} points={[exercises1,exercises2,exercises3]} />
      <Total points={[exercises1,exercises2,exercises3]} />
    </div>
  )
}


export default App