import React from 'react'

export default function Alert(props) {
  const capitalize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase() +lower.slice(1)
;  }
  return (
    //if props.alert is already null then no need to go to div else go to div
    <div style={{height:'50px'}}>
    {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
    </div>}
    </div>
  )
}
