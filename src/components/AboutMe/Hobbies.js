import './Hobbies.css'

const Hobbies = ()  => {
    return (
        <div className='hobbies'>
        <h1 className='hobbiesTitle'>My Hobbies</h1>
        <div className='hobbiesCards'>
            <div className='hobbiesCard'>
                <img src = { require('./imagesAbout/Drawing.png')} alt = "Drawing" className="hobbiesIma"></img>
                <h3 className='hobbiesCardTitle'>Drawing</h3>
            </div>
            <div className='hobbiesCard'>
                <img src = { require('./imagesAbout/Sailing.png')} alt = "Sailing" className="hobbiesIma"></img>
                <h3 className='hobbiesCardTitle'>Sailing</h3>
            </div>
            <div className='hobbiesCard'>
                <img src = { require('./imagesAbout/Poll.png')} alt = "Poll" className="hobbiesIma"></img>
                <h3 className='hobbiesCardTitle'>8 Ball</h3>
            </div>
            <div className='hobbiesCard'>
                <img src = { require('./imagesAbout/Tennis.png')} alt = "Tennis" className="hobbiesIma"></img>
                <h3 className='hobbiesCardTitle'>Tennis</h3>
            </div>
        </div>
    </div>

    );
    
}


export default Hobbies;