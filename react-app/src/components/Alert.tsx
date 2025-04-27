import { ReactNode } from "react";

interface AlertProps {
    // Define any props you want to pass to the Alert component
    children: ReactNode;
    // Add a prop for the onClose handler
    onClose: () => void;
    }

const Alert = ({children,onClose}: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissable" role="alert">
      {children}
      <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert;