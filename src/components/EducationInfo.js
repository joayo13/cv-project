import React, { Component } from 'react'
import './EducationInfo.css'

class EducationInfo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          
        }
    }


    
    render() {
        return (
            <div>
            <div className = "educationInfoBody">
                <header className ="educationInfoHeader">Education Information</header>
                <div className="educationInfoInputContainer">
                <input type="text"  name="schoolName" className="educationInfoInput" placeholder="School/ Institution" onChange={this.props.handleInfoInputChange}/>
                <input type="text"  name="courseOrDegreeName" className="educationInfoInput" placeholder="Course title/ Degree" onChange={this.props.handleInfoInputChange}/>
                <input type="text"  name="startDate" className="educationInfoInput" placeholder="Start-date(yyyy-mm-dd)" onChange={this.props.handleInfoInputChange}/>
                <input type="text"  name="endDate" className="educationInfoInput" placeholder="End-date(yyyy-mm-dd)" onChange={this.props.handleInfoInputChange}/>
                </div>
                </div>
                </div>
        )
    }
}

export default EducationInfo
