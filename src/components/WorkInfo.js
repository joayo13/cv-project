import React, { Component } from 'react'
import './WorkInfo.css'

class WorkInfo extends Component {
    render() {
        return (
            <div>
        <div className = "workInfoBody">
                <header className ="workInfoHeader">Work Information</header>
                <div className="workInfoInputContainer">
                <input type="text" name="jobName" className="workInfoInput" placeholder="Job title" onChange={this.props.handleInfoInputChange}/>
                <input type="text" name="employerName" className="workInfoInput" placeholder="Employer name" onChange={this.props.handleInfoInputChange}/>
                <input type="text" name="jobStartDate" className="workInfoInput" placeholder="Start-date(yyyy-mm-dd)" onChange={this.props.handleInfoInputChange}/>
                <input type="text" name="jobEndDate" className="workInfoInput" placeholder="End-date(yyyy-mm-dd)" onChange={this.props.handleInfoInputChange}/>
                </div>
                </div>        
            </div>
        )
    }
}

export default WorkInfo
