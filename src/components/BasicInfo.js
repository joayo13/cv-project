import React, { Component } from 'react'
import './BasicInfo.css'
class BasicInfo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className = "basicInfoBody">
                <header className = "basicInfoHeader">Basic Information</header>
                <div className = "basicInfoInputContainer">
                    <input type="text" name="fullName" value={this.props.allBasicInfo.fullName} className ="basicInfoInput" placeholder="Full name" onChange={this.props.handleInfoInputChange}/>
                    <input type="text" name="email" value={this.props.allBasicInfo.email} className ="basicInfoInput" placeholder="E-mail address" onChange={this.props.handleInfoInputChange}/>
                    <input type="text" name="phoneNumber" value={this.props.allBasicInfo.phoneNumber} className ="basicInfoInput" placeholder="Phone-number" onChange={this.props.handleInfoInputChange}/>

                </div>
                
            </div>
        )
    }
}

export default BasicInfo
