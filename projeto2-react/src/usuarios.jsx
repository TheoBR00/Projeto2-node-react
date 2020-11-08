import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './App.css';



export default class Usuarios extends Component {
    constructor(props) {
        super(props)
        this.state = {lista: [
            {username: 'mrbrightside'},
            {username: 'jenny'}
        ], usuario: {username:''} }
    
        axios.get('http://localhost:3000/userlist')
            .then(resp=> {
                if(Math.floor(resp.status/100) === 2) {
                    this.setState({lista:resp.data})
                    return;
                }
                console.log(resp)
            })
            .catch(erro => console.log(erro))

            this.handleChange = this.handleChange.bind(this)
            this.cadastrar = this.cadastrar.bind(this)
    }


    render() {
        if (this.state.redirectToReferrer === true) {
            return (
                <Redirect to="/usuarios"/>
            )
        }


        var usuarios = this.state.lista

        var liUsuarios = usuarios.map(usuario => {
            return (
                <li key={usuario.username}>{usuario.username}</li>
            )
        })
        return (
            <div>
                <ul style={{listStyleType: 'none',paddingLeft: '10px',paddingRight: '10px'}}>
                    {liUsuarios}
                </ul>
                <ul>
                    <li>
                        <label>Username</label>
                        <input name="username"
                            value={this.state.usuario.username}
                            onChange={this.handleChange}/>
                    </li>
                    <li>
                        <button onClick={this.cadastrar}>Registrar</button>
                    </li>
                </ul>
            </div>
        )
    }

    cadastrar() {
        console.log("AAAAAAAAAAAAAA")
        console.log(this.state.usuario)
        axios.post('http://localhost:3000/users/',this.state.usuario)
            .then(resp=> {
                if(Math.floor(resp.status/100) === 2) {
                    this.setState((state) => {
                        return {
                            lista: [...state.lista, state.usuario],
                            usuario: {username: ''},
                            redirectToReferrer: true
                        }
                    })
                    return;
                }
                console.log(resp);
            })
            .catch(erro => console.log(erro));
        window.location.reload();
        return false;

            
    }

    handleChange(event) {
        var handleState = (state,event) => {
            state.usuario.username = event.target.value
            return state
        }
        this.setState(handleState(this.state,event))
    }
}