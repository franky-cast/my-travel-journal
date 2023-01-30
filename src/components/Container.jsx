import icon from "../assets/icons8-place-marker-48.png"

function Container (props) { 
    const {item} = props
    return (
        <div className="container">
            <div id="main-section-el">

                <div className="wrap--img">
                    <img className="img" src={item.imageUrl} alt={`${item.title}`}></img>
                </div>

                <div className="content">
                    <div className="dflex geo">  
                        <div className="wrap--location-icon">
                            <img className="location-icon" src={icon} alt="location icon"></img>
                        </div>  
                        <p className="location-name">{item.location}</p>
                        <a className="google-maps" target="_blank" href={item.googleMapsUrl}>View on Google Maps</a>
                    </div>

                    <h2 className="title">{item.title}</h2>
                    <p className="dates"> {`${item.startDate} - ${item.endDate}`} </p>
                    <p className="description">{item.description}</p>
                </div>
            </div>
            <hr className="hr"></hr>
        </div>
    )
}

export default Container