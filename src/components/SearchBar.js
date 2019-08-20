import React from 'react';

class SearchBar extends React.Component{

    // componentDidMount(){
    //     this.setState({term:'Type your search term here and hit return/enter'})
    // }
    
    state={term:''};

    onInputChange= (event)=>{
        this.setState({term: event.target.value})
    }
    onFormSubmit=(event)=>{
        event.preventDefault()

        this.props.onFormSubmit(this.state.term)
        //todo: make sure to call
        //callback from parent component 
    }

    render(){
        return(
        <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit}className= "ui form">
                <div className="field">
                    <h1>Video Search</h1>
                    <input 
                        type="text" 
                        value ={this.state.term}
                        onChange={this.onInputChange}></input>
                </div>

            </form>
        </div>
        )
    }
}

export default SearchBar