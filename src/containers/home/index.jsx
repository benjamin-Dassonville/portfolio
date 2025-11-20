import React from 'react';
import { useNavigate } from "react-router-dom";
import './styles.scss';
import { Animate } from 'react-simple-animate';

const Home =()=>{

    const navigate = useNavigate();

    const handleNavigateToContactMePage=()=>{
        navigate("/about")
    };


    return(
        <section id='home' className='home'>
            <div className='home__text-wrapper'>
                <h1>
                    Bonjour, je suis benjamin Dassonville
                    <br/>
                    etudiant BTS SIO SLAM 2eme année
                </h1>
                <Animate 
                play
                duration={1.5}
                delay={1}
                start={{
                    transform : "translateY(550px)",
                    }}
                end={{
                    transform : "translatex(0px)",
                }}
                    >
                <div className='home__contact-me'>
                <button onClick={handleNavigateToContactMePage}>me contacter</button>
            </div>
            </Animate>
            </div>
        </section>
    )
}

export default Home;