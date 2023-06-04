import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course}) => {
    const name = course.name;
    const courses = course['parts'].map(part => part.name)
    const exercises = course['parts'].map(part => part.exercises);
    const id = course['parts'].map(part => part.id)
  
    return (
      <div>
        <Header name={name}/>
        <Content course={courses} points={exercises} id={id}/>
        <Total points={exercises} /> 
      </div>
    )
}

export default Course