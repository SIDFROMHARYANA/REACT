const ContactUS = (props: any) => {
  return (
   <div style={{border: '1px solid green'}}>
     <p>{props.user.firstName} {props.user.lastName}</p>
      <p>{props.user.phone ? props.user.phone : 'Sorry you does not phone'}</p>
   </div>
  )
}

export default ContactUS