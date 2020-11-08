import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './App.css';



export default class Cardbacks extends Component {
    constructor(props) {
        super(props)
        this.state = {lista: [
            {name: 'prototype', description:'Hello World', howToGet:'Got by running the app'},
            {name: 'generic', description:'Test', howToGet:'Got by debugging'}
        ] }
    }

    async componentDidMount() {

        await axios.get('http://localhost:3000/api/cardbacklist')
            .then(resp=> {
                if(Math.floor(resp.status/100) === 2) {
                    this.setState({lista:resp.data})
                    return;
                }
                console.log(resp)
            })
            .catch(erro => console.log(erro))

    }



    render() {
        if (this.state.redirectToReferrer === true) {
            return (
                <Redirect to="/cardbacks"/>
            )
        }


        
        var cardbacks = this.state.lista;
        console.log(cardbacks)

        var liCardbacks = cardbacks.map(cardback => {
            return (
                    <li key={cardback.name}>
                        <h3>{cardback.name}</h3>
                        {cardback.description}<br/><br/>
                        <small>{cardback.howToGet}</small><hr></hr>
                    </li>
            )
        })
        var trCardbacks = cardbacks.map(cardback => {
            return (
                    <tr key={cardback.name}>
                        <td style={{borderStyle: 'solid',borderWidth: '1px',borderColor: 'white'}}>{cardback.name}</td>
                        <td style={{borderStyle: 'solid',borderWidth: '1px',borderColor: 'white'}}><small>{cardback.description}</small></td>
                        <td style={{borderStyle: 'solid',borderWidth: '1px',borderColor: 'white'}}><small>{cardback.howToGet}</small></td>
                    </tr>
            )
        })

        
        return (
            <div>
                <table style={{paddingLeft: '10%',paddingRight: '10%',paddingBottom: '50px'}}>
                    <tr>
                        <td style={{borderStyle: 'solid',borderColor: 'white'}}><big><b>Name</b></big></td>
                        <td style={{borderStyle: 'solid',borderColor: 'white'}}><big><b>Description</b></big></td>
                        <td style={{borderStyle: 'solid',borderColor: 'white'}}><big><b>How to Get</b></big></td>
                    </tr>
                    {trCardbacks}
                </table>
                
            </div>
        )
    }
}