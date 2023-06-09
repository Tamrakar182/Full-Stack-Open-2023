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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const name = course.name;
  const courses = course['parts'].map(part => part.name)
  const exercises = course['parts'].map(part => part.exercises);

  return (
    <div>
      <Header name={name}/>
      <Content course={courses} points={exercises} />
      <Total points={exercises} />
    </div>
  )
}


export default App