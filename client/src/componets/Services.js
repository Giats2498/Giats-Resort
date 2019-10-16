import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';

import Title from "./Title";

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free coctails",
                info: "Mollit est velit proident ullamco laboris et laborum. Labore officia consequat tempor sit sint do dolor sit Lorem cillum proident. Aute exercitation exercitation ipsum incididunt duis aute do aute nisi commodo."
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info: "Consectetur culpa non in consequat consequat eiusmod nisi.Enim laborum proident tempor enim eiusmod dolore officia labore velit.Esse ex ut laborum et ea qui laboris mollit."
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free shuttle",
                info: "In voluptate amet commodo magna proident velit ex quis consequat.Pariatur nulla ad do voluptate mollit ea labore officia magna id non elit adipisicing deserunt."
            },
            {
                icon:<FaBeer/>,
                title:"Best beer",
                info: "Labore sit Lorem in anim proident eiusmod.Id consectetur nulla et ipsum magna proident dolor cupidatat est officia ea.Nulla dolor sint occaecat laborum exercitation sint esse qui amet."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services'/>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}
