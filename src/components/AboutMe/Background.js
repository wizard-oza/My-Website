import './Background.css'

const Background = () => {
    return (
        <div>
            <div className="backgroundBox">
                <h1 className="backgroundTitle">My Background</h1>
                <div className="backgounAdana">
                    <div className='backgroundContect'>
                    <h3 className="backgroundMiddleTitle">Early Years</h3>
                    <p className="backgrounPara">
                    
                        My story begins with Adana, a beautiful south city in Turkey. I was born on May 11th, 2001 in Adana, Ceyhan 
                        as the second child of the Çiçek family. As a toddler, I was very energetic and playful. 
                        My elementary and middle school years were spent studying, reading, and watching movies.
                    </p>
                    <div className="backgroundHighShcool">
                        <h3 className="backgroundMiddleTitle">HighSchool Years</h3>
                        <p className="backgrounPara">
                            When I graduated from middle school I went to Adana Collage thus my high school years started. 
                            High school was much tenser than middle school as university exams were apparent. I liked literature and history.
                            In my later years, my love for art began. I joined the theater club and played the leading role. 
                            In the last year, not much happened other than studying for the coming exams.
                        </p>
                    </div>
                    </div>
                    <img src = { require('./imagesAbout/Adana.png')} alt = "main" className="backIma"></img>
                </div>

                <div className="backgroundIstanbul">
                    <div className="backgroundUniversity">
                    <img src = { require('./imagesAbout/Istanbul.png')} alt = "main" className="backIma"></img>
                        <div>
                        <h3 className="backgroundMiddleTitle">University Years</h3>
                        <p className="backgrounPara">
                           I had good vibes about university. I started my computer science student years at Bahcesehir University.
                            The first semester was great. I met with new people, joined clubs, and explored Istanbul. However, things 
                            changed as the pandemic began. Restrictions were implemented and universities became online. And for the next year,
                            I sat in my room. This affected my overall happiness. After the pandemic got under control and restrictions were lifted.
                            Things were good once again. Currently, however, universities were closed after the Turkey-Syria earthquake.
                            This brings us to the current day.   
                        </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Background;