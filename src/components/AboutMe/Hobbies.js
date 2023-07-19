import './Hobbies.css'

const Hobbies = ()  => {
    return (
        <div className='hobbies'>
        <h1 className='hobbiesTitle'>My Hobbies</h1>
        <div className='hobbiesCards'>
            <div className='hobbiesCardFashion'>
                <h3 className='hobbiesCardTitle'>Fashion</h3>
            </div>
            <div className='hobbiesCardFineArt'>
                <h3 className='hobbiesCardTitle'>Fine Art</h3>
            </div>
            <div className='hobbiesCardPool'>
                <h3 className='hobbiesCardTitle'>Pool </h3>
            </div>
        </div>
    </div>

    );
    
}


export default Hobbies;