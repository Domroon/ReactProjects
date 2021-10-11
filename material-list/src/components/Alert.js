import { useEffect } from "react"

const Alert = ({ type, msg, removeAlert, items }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [items])
  return (
    <div className={`alert ${type}`}>
      <p>{msg}</p>
    </div>
  )
}

export default Alert
