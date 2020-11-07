import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

export default class Cardsets extends Component {
    constructor(props) {
        super(props)
        this.state = {lista: [
            {name: 'Classic'},
            {name: 'Basic'}

        ]}

    }

    async componentDidMount() {

        await axios.get('http://localhost:3000/api/cardset')
            .then(resp => {
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
            return(
                <Redirect to = "/cardset"/>
            )
        }

        var cardset = this.state.lista;
        console.log(cardset)
    }
}