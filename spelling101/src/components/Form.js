import React from 'react';

class Form extends React.Component {

buttonClicked(e) {
    e.preventDefault()
    console.log('it works')
}

render () {
    return(
        <form>
            <input id = "word" type = "text" name = "word" placeholder = "Type your word here"/>
            <button onClick = {this.buttonClicked} >WORD!</button>
        </form>
    );
}

};

export default Form;