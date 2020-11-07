import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'



export default class Cards extends Component {
    constructor(props) {
        super(props)
        this.state = {lista: [
            {name: 'prototype', type:'Hello World', text:'Runs the app'},
            {name: 'generic', type:'Test', text:'Debugs'}
        ], set: {cardset:'Basic'} } 
        if (localStorage.getItem("set") != null) {
            this.state.set.cardset = localStorage.getItem("cardset");
        }
        localStorage.setItem("cardset", "Basic");
    }

    async componentDidMount() {
        console.log(this.state.set)
        await axios.get('http://localhost:3000/api/cardlist',this.state.set)
            .then(resp=> {
                if(Math.floor(resp.status/100) === 2) {
                    this.setState({lista:resp.data,
                                    set:this.state.set})
                    return;
                }
                console.log(resp)
            })
            .catch(erro => console.log(erro))

    }

    getNew(value) {
        console.log(value)
        localStorage.setItem("cardset", value);
        console.log("AAAAAAAAAA");
        console.log(localStorage.getItem("cardset"));

        //window.location.reload();
        return false;       
    }



    render() {
        if (this.state.redirectToReferrer === true) {
            return (
                <Redirect to="/cards"/>
            )
        }

        
        var cards = this.state.lista;
        console.log(cards)

        var liCards = cards.map(card => {
            return (
                    <li key={card.name}>
                        <h3>{card.name}</h3>
                        {card.type}<br/><br/>
                        <small>{card.text}</small><hr></hr>
                    </li>
            )
        })
        return (
            <div>
            <button onClick={() => this.getNew(this.value)} value="Basic">Basic</button>
            <button onClick={() => this.getNew(this.value)} value="Classic">Classic</button>
            <h3>{this.state.set.cardset}</h3>
                <ul>
                    {liCards}
                </ul>
            </div>
        )
    }
}