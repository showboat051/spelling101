import React, {Component} from "react";
import {Jumbotron} from 'reactstrap';

class Home extends Component {
    render () {
        return (
            <div>
                <Jumbotron>
                    <h1 id = "title">Spelling 101</h1>
                    <p>It's a Dictionary, and a Spelling Book for the web</p>

                </Jumbotron>
            </div>
        )
    }
}

export default Home;