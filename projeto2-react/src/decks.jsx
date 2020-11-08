import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './App.css';



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

        var trCards = cards.map(card => {
            return (
                    <tr key={card.name}>
                        <td style={{borderStyle: 'solid',borderWidth: '1px',borderColor: 'white'}}>
                            {card.name}
                        </td>
                        <td style={{borderStyle: 'solid',borderWidth: '1px',borderColor: 'white'}}>
                            {card.type}
                        </td>
                        <td style={{borderStyle: 'solid',borderWidth: '1px',borderColor: 'white'}}>
                            <small>{card.text}</small>
                        </td>
                        <td style={{borderStyle: 'solid',borderWidth: '1px',borderColor: 'white', verticalAlign: 'middle'}}>
                            <button onClick={this.deleteCard} value= {card._id} style={{verticalAlign: 'middle', width:'90px',paddingLeft:'5px',paddingRight:'5px'}} >
                                Remover do Deck
                            </button>
                        </td>
                    </tr>
            )
        })
        var liCards = cards.map(card => {
            return (
                    <li key={card.name}>
                        <h3>{card.name}</h3>
                        {card.type}<br/><br/>
                        <small>{card.text}</small><br></br>
                        <button onClick={this.deleteCard} value= {card._id} >Remover do Deck</button>
                        <hr></hr>
                    </li>
            )
        })

        return (
            <div>
            <table style={{paddingLeft: '10%',paddingRight: '10%',paddingBottom: '50px'}}>
                <tr>
                    <td style={{borderStyle: 'solid',borderColor: 'white'}}><big><b>Name</b></big></td>
                    <td style={{borderStyle: 'solid',borderColor: 'white'}}><big><b>Type</b></big></td>
                    <td style={{borderStyle: 'solid',borderColor: 'white'}}><big><b>Text</b></big></td>
                    <td style={{borderStyle: 'solid',borderColor: 'white',width:'50px'}}></td>
                </tr>
                {trCards}
            </table>
            </div>
        )
    }

    deleteCard(event) {

        axios.delete('http://localhost:3000/decks/' + event.target.value)
            .then(resp=> {
                if(Math.floor(resp.status/100) === 2) {
                    this.setState((state) => {
                        return {
                            lista: [...state.lista],
                            redirectToReferrer: true
                        }
                    })
                    return;
                }
                console.log(resp);
            })
            .catch(erro => console.log(erro));

    
        window.location.href="../decks"
    }

}