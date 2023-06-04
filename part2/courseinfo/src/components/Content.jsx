import Part from './Part'

const Content = ({course, points, id}) => {

    const rows = [];
    for (let i = 0; i < course.length; i++) {
        rows.push(<Part course={course[i]} key={id[i]} points={points[i]} />);
    }

    return (
      <>{rows}</>
    )
}
export default Content