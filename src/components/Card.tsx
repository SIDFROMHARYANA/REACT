
import { CountryType } from '../App';

const Card = ({ country, children }: { country: CountryType, children: string; }) => {
    return (
        <>
        <h5>{country.name}</h5>
        <p>{country.description}</p>
        <a href="#" className="btn btn-primary">Button</a>       
        <div>
        {children}
        </div>
        <div>
        <div dangerouslySetInnerHTML={{__html: country.disclaimer}} />
        <div/>
       
        </div>    
          
     
        </>
    )
}


export default Card