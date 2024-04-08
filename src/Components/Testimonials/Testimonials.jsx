import React, { useRef } from 'react'
import'./Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'



const Testimonials = () => {
    const slider=useRef();
    let tx=0;

    const slideForwerd=()=>{
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`

    }
const slideBackwerd=()=>{
    if(tx< 0){
        tx+=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`
}

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForwerd} />
        <img src={back_icon} alt=""  className='back-btn'onClick={slideBackwerd} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>William Jaclson</h3>
                                <span>Edusity,USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my digree at edusity was one of the best decision i ve ever made . the supportive community,state-of-the art facilities, and commitement to academic exclience have truly excedded my expectation.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Ritam Maji</h3>
                                <span>Edustity,usa</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my digree at edusity was one of the best decision i ve ever made . the supportive community,state-of-the art facilities, and commitement to academic exclience have truly excedded my expectation.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Jack Sperrow</h3>
                                <span>Edustity,usa</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my digree at edusity was one of the best decision i ve ever made . the supportive community,state-of-the art facilities, and commitement to academic exclience have truly excedded my expectation.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Kable jo</h3>
                                <span>Edustity,usa</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my digree at edusity was one of the best decision i ve ever made . the supportive community,state-of-the art facilities, and commitement to academic exclience have truly excedded my expectation.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials