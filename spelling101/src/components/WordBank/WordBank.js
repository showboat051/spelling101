import React from "react";



class WordBank extends React.Component {
    render () {
        return(
            <div>
             {this.props.meta && <p>word:{this.props.meta}</p>}   
             {this.props.id && <p>id:{this.props.id}</p>}   
             {this.props.shortdef && <p>shortdef: {this.props.shortdef}</p>}   


            </div>
        )
    }
}

export default WordBank;