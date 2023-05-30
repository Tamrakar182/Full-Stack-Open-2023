// const Header = (props) => {
//   return (
//       <h1>{props.name}</h1>
//   )
// }

// const Part = (props) => {
//   return (
//     <p>{props.course} {props.points}</p>
//   )
// }

// const Content = (props) => {
//   return (
//     <>
//     <Part course={props.course[0]} points={props.points[0]} />
//     <Part course={props.course[1]} points={props.points[1]} />
//     <Part course={props.course[2]} points={props.points[2]} />
//     </>
//   )
// }

// const Total = (props) => {
//   return (
//     <p>Number of exercises = {props.points.reduce((partialSum, a) => partialSum + a, 0)} </p>
//   )
// }

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }
//   const name = course.name;
//   const courses = course['parts'].map(part => part.name)
//   const exercises = course['parts'].map(part => part.exercises);

//   return (
//     <div>
//       <Header name={name}/>
//       <Content course={courses} points={exercises} />
//       <Total points={exercises} />
//     </div>
//   )
// }


// export default App
import { useState } from 'react'

const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
 
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right) 
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(updatedRight + left)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text="left" />
      <Button handleClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks} />
      <p>total {total}</p>
    </div>
  )
}
export default App