import React, {Component} from "react";
import {Jumbotron, Button} from 'reactstrap';

class Home extends Component {
    render () {
        return (
            <div>
                <Jumbotron>
                    <h1>Spelling 101</h1>
                    <p>It's a Dictionary, and a Spelling Book for the web</p>

                </Jumbotron>
            </div>
        )
    }
}

export default Home;