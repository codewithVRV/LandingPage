
import './LandingPage.css'


import MobileImage from '../../assets/mobile.png'
import TimeImage from '../../assets/time.png'
import LocationImage from '../../assets/Location.png'
import OneImage from '../../assets/one.png'
import TwoImage from '../../assets/two.png'
import ThreeImage from '../../assets/three.png'

function LandingPage () {
    return (
        <>
            <div className="main">
                <div className="first">
                        <h2>Get In Touch With Us</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse inventore Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse inventore velit ut ab quo corporis laboriosam consequuntur impedit nemo culpa.</p>
                </div>
                <div className="parent-of-second-third">
                <div className="second">
                    <div className="second-left-side">
                        <img src={LocationImage} alt=''/>
                        <h4>Address</h4>
                        <p>238 5th SE Avenue, New York NY10000, United States</p>
                        <img src={MobileImage} alt=''/>
                        <h4>Phone</h4>
                        <p>238 5th SE Avenue, New York NY10000, United States</p>
                        <img src={TimeImage} alt=''/>
                        <h4>Working Time</h4>
                        <p>238 5th SE Avenue, New York NY10000, United States</p>
                    </div>
                </div>
                    <div className="third">
                <div className="second-right-side">
                        <p>Your Name</p>
                        <input type="text"  placeholder='ABC'/>
                        <p>Email Address</p>
                        <input type="text"  placeholder='Abc@gmail.com'/>
                        <p>Subject</p>
                        <input type="text"  placeholder='This is optional'/>
                        <p>Message</p>
                        <textarea rows="10" cols="60" />  
                        <button id='btn'>Submit</button>                  
                    </div>
                </div>
                </div>

                <div className="bottom-part">
                    <div className="parent">
                        <div className="one">
                            <img src={OneImage} alt="" />
                            <div className="child-of-one">
                                <h5>Hight Quality</h5>
                                <p>created from top Instructors</p>
                            </div>
                        </div>
                        <div className="one">
                            <img src={TwoImage} alt="" />
                            <div className="child-of-one">
                                <h5>Renual option</h5>
                                <p>Over 2 Years</p>
                            </div>
                        </div>
                        <div className="one">
                        <img src={ThreeImage} alt="" />
                            <div className="child-of-one">
                                <h5>22 / 7</h5>
                                <p>Dedicated support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;