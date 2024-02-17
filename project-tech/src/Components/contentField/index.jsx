import './ContentField.css'
const ServiceDetails=({src,srcTitle,title, description})=>{
    return(
        <div className='field_det'>
            <img src={src} alt={srcTitle}/>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}
export default ServiceDetails