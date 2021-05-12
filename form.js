import React, { Component } from 'react'

class form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: ''
             
        }
    }
    handleUsernameChange=(event)=>{
        this.setState=({
            username: event.target.value
        })
}
    
    render() {
        return (
            <form>
                <div>
                    <label>
                        <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                        {// when a event handler is passed to an onchange attribute, the event itself is passed as a parameter
    }
                    </label>
                </div>
            </form>
        )
    }
}

export default form
