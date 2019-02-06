import React from 'react';

class Form extends React.Component {


render () {
    return(
        <form onSubmit = {this.props.getWord}>
            <input type = "text" name = "word" placeholder = "Type your word here"/>
            <button>WORD!</button>
        </form>
    );
}

};

export default Form;