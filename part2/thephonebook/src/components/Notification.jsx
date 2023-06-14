const Notification = ({ message }) => {
    if (message === null) {
      return null
    }

    const { type, content } = message;

    const notificationStyle = {
      color: type === 'error' ? 'red' : 'green',
    }

    return (
      <div className='notification' style={notificationStyle}>
        {content}
      </div>
    )
}


export default Notification