import React from 'react'

function Alert(props) {
  const formatType = (type) => {
    if (!type) return ''; // Handle case where type is undefined or null
    return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
};

  return (
  props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong> {formatType(props.alert.type)}! </strong> {props.alert.msg}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
  )
}

export default Alert
