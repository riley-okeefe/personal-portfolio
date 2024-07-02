import profilePic from '../assets/images/gradphotonew.png';
import './home.css';

export default function Home() {
    return (
        <div id="home" className="content-card">
            <div className='content-body-home'>
                <div className='content-home'>
                    <div className='box-1'>
                        <h1>Welcome</h1>
                    </div>
                    <div className='box-2'>
                        <img src={profilePic} />
                    </div>
                    <div className='box-3'>
                        <p>
                            My name is Riley O'Keefe and you have arrived at my personal portfolio website where you 
                            can get to know me, see some of my work, and connect with me.
                            <br/><br/>
                            I'm currently based out of Halifax, Nova Scotia.
                        </p>
                        
                    </div>
                </div>
                <div className='content-home-mobile'>
                    <div className='box-1-mobile'>
                        <h1>Welcome</h1>
                    </div>
                    <div className='box-2-mobile'>
                        <img src={profilePic} />
                    </div>
                    <div className='box-3-mobile'>
                        <p>
                            My name is Riley O'Keefe and you have arrived at my personal portfolio website where you 
                            can get to know me, see some of my work, and connect with me.
                            <br/><br/>
                            I'm currently based out of Halifax, Nova Scotia.
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}