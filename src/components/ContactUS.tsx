 const ContactUS = (props:any) => {
  return (
    <div style={{border:'1px solid green'}}>
      <p>{props.user.firstName} {props.user.lastname}</p>
    
      <p>{props.user.phone ? props.user.phone : 'Sorry your phone does not exist'}</p>   
    
    </div>
  )
 }

export default ContactUS