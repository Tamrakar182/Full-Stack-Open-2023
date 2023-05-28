const Header = (props) => {
  return (
      <h1>{props.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.course} {props.points}</p>
  )
}

const Content = (props) => {
  return (
    <>
    <Part course={props.course[0]} points={props.points[0]} />
    <Part course={props.course[1]} points={props.points[1]} />
    <Part course={props.course[2]} points={props.points[2]} />
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises = {props.points.reduce((partialSum, a) => partialSum + a, 0)} </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name={course}/>
      <Content course={[part1.name,part2.name,part3.name]} points={[part1.exercises,part2.exercises,part3.exercises]} />
      <Total points={[part1.exercises,part2.exercises,part3.exercises]} />
    </div>
  )
}


export default App