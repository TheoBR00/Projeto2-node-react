import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'



export default class Decks extends Component {
    constructor(props) {
        super(props)
        this.state = {lista: [
            {name: 'prototype', type:'Hello World', text:'Runs the app'},
            {name: 'generic', type:'Test', text:'Debugs'}
        ] }
    
        axios.get('http://localhost:3000/decklist')
            .then(resp=> {
                if(Math.floor(resp.status/100) === 2) {
                    this.setState({lista:resp.data})
                    return;
                }
                console.log(resp)
            })
            .catch(erro => console.log(erro))

            //this.handleChange = this.handleChange.bind(this)
            //this.cadastrar = this.cadastrar.bind(this)
    }


    render() {
        if (this.state.redirectToReferrer === true) {
            return (
                <Redirect to="/deck"/>
            )
        }


        var cards = this.state.lista

        var liCards = cards.map(card => {
            return (
                <li key={card.name}>{card.name}</li>
            )
        })
        return (
            <div>
                <ul>
                    {liCards}
                </ul>
            </div>
        )
    }

}