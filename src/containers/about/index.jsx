import React from 'react';
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import {DiApple, DiAndroid} from 'react-icons/di';
import {FaDev, FaDatabase} from 'react-icons/fa';
import "./styles.scss";

// Fonction pour calculer l'âge
const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
};
const age = calculateAge("2005-05-24");

const personalDetails = [
  {
    label: "Nom",
    value: "Benjamin DASSONVILLE",
  },
  {
    label: "Âge",
    value: age,
  },
  {
    label: "Email",
    value: "benjamin.dassonville.pro@gmail.com",
  },
  {
    label: "Numero de Tel",
    value: "+33 06.98.93.55.36",
  },
];

const jobSummary =
  "Passionné depuis toujours par les nouvelles technologies et le développement informatique, j'ai orienté mon parcours vers le numérique. Actuellement en BTS SIO (option SLAM) au lycée Gaston Berger à Lille, après un Bac Pro SN au lycée Léonard de Vinci à Roubaix, j'ai déjà eu plusieurs expériences professionnelles enrichissantes, notamment chez Oney Bank (dépannage systèmes/réseaux, codage, exploitation de l'IA) et Level Up (développement de borne d'arcade, infographie). Motivé, curieux et désireux de progresser, je cherche à mettre mes compétences en pratique tout en continuant à apprendre aux côtés de professionnels du secteur.";

const About = () => {
    return (
        <section id='about' className='about'>
            <PageHeaderContent
                HeaderText="À propos de moi"
                icon={<BsInfoCircleFill size={40}/>}
            />
            
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: "translateX(-900px)" }}
                        end={{ transform: "translatex(0px)" }}
                    >
                        <h3>Etudiant</h3>
                        <p>{jobSummary}</p>
                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: "translateX(500px)" }}
                        end={{ transform: "translatex(0px)" }}
                    >
                        <h3 className="personalInformationHearderText">Information Personnel</h3>
                        <ul>
                            {personalDetails.map((item,i)=>(
                                <li key={i}>
                                    <span className="title">{item.label}</span>
                                    <span className="value">{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </Animate>
                </div>

                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: "translateX(600px)" }}
                        end={{ transform: "translatex(0px)" }}
                    >
                        <div className="about__content__servicesWrapper__innerContent">
                            <div><FaDev size={60} color="var(--green-theme-main-color)"/></div>
                            <div><DiAndroid size={60} color="var(--green-theme-main-color)"/></div>
                            <div><FaDatabase size={60} color="var(--green-theme-main-color)"/></div>
                            <div><DiApple size={60} color="var(--green-theme-main-color)"/></div>
                        </div>
                    </Animate>
                </div>
            </div>
        </section>
    )
}

export default About;