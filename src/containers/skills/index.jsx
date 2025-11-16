import React from 'react';
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import './styles.scss';

const Skills = () => {
    return (
        <section id='Skills' className='skills'>
            <PageHeaderContent
                HeaderText="Mes compétences"
                icon={<BsInfoCircleFill size={40}/>}
            />
            <div className='skills__content-wrapper'>
                {skillsData.map((category, index) => (
                    <div key={index} className='skills__category'>
                        <h3 className='skills__category-title'>{category.label}</h3>
                        <ul className='skills__list'>
                            {category.skills.map((skill, skillIndex) => (
                                <li key={skillIndex} className='skills__item'>
                                    <span className='skills__bullet'>▹</span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills;