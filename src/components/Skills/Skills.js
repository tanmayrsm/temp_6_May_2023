import C_plus from '../../assets/img/logos/c_plus.png';
import java from '../../assets/img/logos/java.png';
import python from '../../assets/img/logos/python.png';
import angular from '../../assets/img/logos/angular.png';
import next from '../../assets/img/logos/next.png';
import mysql from '../../assets/img/logos/mysql.png';
import mongo from '../../assets/img/logos/mongo.png';
import tailwind from '../../assets/img/logos/tailwind.png';
import aws from '../../assets/img/logos/aws.png';
import react from '../../assets/img/logos/react.png';
import rxjs from '../../assets/img/logos/rxjs.png';
import sass from '../../assets/img/logos/sass.png';
import spring from '../../assets/img/logos/spring.png';
import js from '../../assets/img/logos/js.png';
import fb from '../../assets/img/logos/fb.png';
import css from '../../assets/img/logos/css.png';
import nodejs from '../../assets/img/logos/nodejs.png';
import htm from '../../assets/img/logos/html.png';
import azure from '../../assets/img/logos/azure.png';
import React from 'react'
import Ratings from './Ratings';

function Skills() {
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx zoomIn">
                        <h2>Skills</h2>
                            <div className='flex flex-col mt-2 mb-1'>
                                <p className='mb-2'>Languages</p>
                                <div className='flex flex-row justify-center mt-3'>
                                    <Ratings icon={C_plus} titleText='C++' value='2.5' precision={0.5} />
                                    <Ratings icon={java} titleText='java' value='4.5' precision={0.5} />
                                    <Ratings icon={python} titleText='python' value='3' />
                                </div>
                            </div>

                            <div className='flex flex-col mt-2 mb-1'>
                                <p className='mb-3'>Front end</p>
                                <div className='flex flex-row justify-center'>
                                    <Ratings icon={angular} titleText='Angular' value='4.5' precision={0.5} />
                                    <Ratings icon={react} titleText='React' value='4.5' precision={0.5} />
                                    <Ratings icon={js} titleText='Javascript' value='4.5' precision={0.5}  />
                                </div>
                                <div className='flex flex-row justify-center mt-3'>
                                    <Ratings icon={htm} titleText='HTML5' value='4' />
                                    <Ratings icon={css} titleText='CSS' value='4.5' precision={0.5} />
                                    <Ratings icon={sass} titleText='SASS' value='4' precision={0.5}  />
                                    <Ratings icon={tailwind} titleText='Tailwind CSS' value='3.5' precision={0.5}  />
                                    <Ratings icon={rxjs} titleText='RXJS' value='3.5' precision={0.5}  />
                                </div>
                            </div>

                            <div className='flex flex-col mt-2'>
                                <p className='mb-3'>Backend / database</p>
                                <div className='flex flex-row justify-center'>
                                    <Ratings icon={spring} titleText='Spring boot' value='4' precision={0.5} />
                                    <Ratings icon={nodejs} titleText='NodeJs' value='3' precision={0.5} />
                                </div>
                                <div className='flex flex-row justify-center mt-3'>
                                    <Ratings icon={mysql} titleText='Mysql' value='3' />
                                    <Ratings icon={mongo} titleText='Mongo' value='2' />
                                    <Ratings icon={fb} titleText='Firebase' value='4.5' precision={0.5} />
                                </div>
                            </div>

                            <div className='flex flex-col mt-2'>
                                <p className='mb-3'>Devops</p>
                                <div className='flex flex-row justify-center'>
                                    <Ratings icon={azure} titleText='Azure' value='3' precision={0.5} />
                                    <Ratings icon={aws} titleText='AWS' value='2' precision={0.5} />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Skills;