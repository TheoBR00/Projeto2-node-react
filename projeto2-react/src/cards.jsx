import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { request } from 'http'
import './App.css';



export default class Cards extends Component {
    constructor(props) {
        super(props)
        console.log(window.location.search)
        var setString = window.location.search.substring(1)
        this.state = {lista: [
            {name: 'prototype', type:'Hello World', text:'Runs the app'},
            {name: 'generic', type:'Test', text:'Debugs'}
        ], cardset: {set: setString} }
        console.log("AAAAAAAAA");
        /*
        console.log(localStorage.getItem("set"));
        if (localStorage.getItem("set") != null) {
            this.state.cardset.set = localStorage.getItem("dset");
        }
        */


        setString.replace('%20',' ')
        
        this.handleButton = this.handleButton.bind(this)
    }

    async componentDidMount() {

        console.log("CCCCCCCCCCCCC")
        console.log(this.state.cardset)
        await axios.get('http://localhost:3000/api/cardset/',{params: this.state.cardset})
            .then(resp=> {
                if(Math.floor(resp.status/100) === 2) {
                    this.setState({lista:resp.data,
                                    cardset:this.state.cardset})
                    return;
                }
                console.log(resp)
            })
            .catch(erro => console.log(erro))

    }

    



    render() {
        if (this.state.redirectToReferrer === true) {
            return (
                <Redirect to="/cards"/>
            )
        }


        
        var cards = this.state.lista;
        console.log(cards)

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
                            <button onClick={this.addCard} value= {card.name + "/" + card.type + "/" + card.text } style={{verticalAlign: 'middle', width:'90px',paddingLeft:'5px',paddingRight:'5px'}} >
                                Adicionar ao Deck
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
                        <button onClick={this.addCard} value= {card.name + "/" + card.type + "/" + card.text} >Adicionar ao Deck</button>
                        <hr></hr>
                    </li>
            )
        })
        return (
            <div style={{textAlign: 'center'}}>
            <small>Cardset:</small><br/>
            <button onClick={this.handleButton} value="Basic">Basic</button>
            <button onClick={this.handleButton} value="Classic">Classic</button>
            <button onClick={this.handleButton} value="Hall of Fame">Hall of Fame</button>
            <button onClick={this.handleButton} value="Naxxramas">Naxxramas</button>
            <button onClick={this.handleButton} value="Goblins vs Gnomes">Goblins vs Gnomes</button>
            <button onClick={this.handleButton} value="Blackrock Mountain">Blackrock Mountain</button>
            <button onClick={this.handleButton} value="The Grand Tournament">The Grand Tournament</button>
            <button onClick={this.handleButton} value="The League of Explorers">The League of Explorers</button>
            <button onClick={this.handleButton} value="Whispers of the Old Gods">Whispers of the Old Gods</button>
            <button onClick={this.handleButton} value="One Night in Karazhan">One Night in Karazhan</button>
            <button onClick={this.handleButton} value="Mean Streets of Gadgetzan">Mean Streets of Gadgetzan</button>
            <button onClick={this.handleButton} value="Journey to Un'Goro">Journey to Un'Goro</button>
            <button onClick={this.handleButton} value="Knights of the Frozen Throne">Knights of the Frozen Throne</button>
            <button onClick={this.handleButton} value="Whispers of the Old Gods">Whispers of the Old Gods</button>
            <button onClick={this.handleButton} value="Kobolds & Catacombs">Kobolds & Catacombs</button>
            <button onClick={this.handleButton} value="The Witchwood">The Witchwood</button>
            <button onClick={this.handleButton} value="The Boomsday Project">The Boomsday Project</button>
            <button onClick={this.handleButton} value="Rastakhan's Rumble">Rastakhan's Rumble</button>
            <button onClick={this.handleButton} value="Rise of Shadows">Rise of Shadows</button>
            <button onClick={this.handleButton} value="Saviors of Uldum">Saviors of Uldum</button>
            <button onClick={this.handleButton} value="Descent of Dragons">Descent of Dragons</button>
            <button onClick={this.handleButton} value="Galakrond's Awakening">Galakrond's Awakening</button>
            <button onClick={this.handleButton} value="Ashes of Outland">Ashes of Outland</button>
            <button onClick={this.handleButton} value="Demon Hunter Initiate">Demon Hunter Initiate</button>
            <button onClick={this.handleButton} value="Scholomance Academy">Scholomance Academy</button>
            <button onClick={this.handleButton} value="Madness At The Darkmoon Faire">Madness At The Darkmoon Faire</button>
            <button onClick={this.handleButton} value="Wild Event">Galakrond's Awakening</button>
            <button onClick={this.handleButton} value="Battlegrounds">Rastakhan's Rumble</button>
            <button onClick={this.handleButton} value="Tavern Brawl">Demon Hunter Initiate</button>
            <button onClick={this.handleButton} value="Taverns of Time">Scholomance Academy</button>

            <h2>{this.state.cardset.set.replaceAll('%20',' ')}</h2><hr/>
            
            <table style={{paddingLeft: '10%',paddingRight: '10%',paddingBottom: '50px',horizontalAlign:'middle'}}>
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

    handleButton(event) {
        var handleState = (state,event) => {
            state.cardset.set = event.target.value
            return state
        }
        console.log(this.state)
        this.setState(handleState(this.state,event))
        
        /*
        localStorage.setItem("set",this.state.cardset.set);
        console.log(localStorage.getItem("set"));
        */
        window.location.href="./?" + this.state.cardset.set;
        
    }


    addCard(event) {

        var splits = event.target.value.split("/")
        console.log(event.target.value)
        console.log(splits)
        var cardvalues = {name: splits[0], type: splits[1], text: splits[2]}
        console.log(cardvalues)
        axios.post('http://localhost:3000/decks/', cardvalues)
            .then(resp=> {
                if(Math.floor(resp.status/100) === 2) {
                    this.setState((state) => {
                        return {
                            lista: [...state.lista, state.cardset],
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