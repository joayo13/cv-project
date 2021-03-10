
import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import BasicInfo from './components/BasicInfo'
import EducationInfo from './components/EducationInfo'
import WorkInfo from './components/WorkInfo'
import uniqid from 'uniqid'
import FinalRender from './components/FinalRender'


class App extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      additionalEducationInfoComponents: [],
      educationInfoList: [],
      additionalWorkInfoComponents: [],
      workInfoList: [],
      finalRender: false,
    }
    
  }

  handleInfoInputChange = e => {
    
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(`${e.target.name} value: ${e.target.value}`))
  }

  addEducationExperience = () => {
    if(this.state.schoolName !== undefined && this.state.courseOrDegreeName !== undefined &&  this.state.startDate !== undefined && this.state.endDate !== undefined) {
    this.setState({
      educationInfoList: this.state.educationInfoList.concat({schoolName: this.state.schoolName, courseOrDegreeName: this.state.courseOrDegreeName, startDate: this.state.startDate, endDate: this.state.endDate}),
      additionalEducationInfoComponents: this.state.additionalEducationInfoComponents.concat(<EducationInfo key={uniqid()} handleInfoInputChange={this.handleInfoInputChange}/>),
      schoolName: undefined,
      courseOrDegreeName: undefined,
      startDate: undefined,
      endDate: undefined,
    }, () => console.log(this.state.educationInfoList))
  } else {
    alert("Please fill in all fields before adding a new experience.")
  }
  }

  addWorkExperience = () => {
    if(this.state.jobName !== undefined && this.state.employerName !== undefined &&  this.state.jobStartDate !== undefined && this.state.jobEndDate !== undefined) {
    this.setState({
      additionalWorkInfoComponents: this.state.additionalWorkInfoComponents.concat(<WorkInfo key={uniqid()} handleInfoInputChange={this.handleInfoInputChange}/>),
      workInfoList: this.state.workInfoList.concat({jobName: this.state.jobName, employerName: this.state.employerName, jobStartDate: this.state.jobStartDate, jobEndDate: this.state.jobEndDate}),
      jobName: undefined,
      employerName: undefined,
      jobStartDate: undefined,
      jobEndDate: undefined,
      finalRender: false
    }, () => console.log(this.state.workInfoList))
  } else {
    alert("Please fill in all fields before adding a new experience.")
  }
  }
  editHandler = () => {
    this.setState({
      finalRender: false,
      educationInfoList: [],
      additionalEducationInfoComponents: [],
      workInfoList: [],
      additionalWorkInfoComponents: []
    })
  }
  renderHandler = () => {
    this.setState({
      finalRender: true,
      educationInfoList: this.state.educationInfoList.concat({schoolName: this.state.schoolName, courseOrDegreeName: this.state.courseOrDegreeName, startDate: this.state.startDate, endDate: this.state.endDate}),
      workInfoList: this.state.workInfoList.concat({jobName: this.state.jobName, employerName: this.state.employerName, jobStartDate: this.state.jobStartDate, jobEndDate: this.state.jobEndDate})
    })
  }
  
  render() {
   
    if (this.state.finalRender === false) {
    return (
      <div>
        <Header/>
        <BasicInfo handleInfoInputChange={this.handleInfoInputChange} allBasicInfo={{fullName: this.state.fullName, email: this.state.email, phoneNumber: this.state.phoneNumber}}/>
        <EducationInfo handleInfoInputChange={this.handleInfoInputChange} addEducationExperience={this.addEducationExperience}/>
        <div>{this.state.additionalEducationInfoComponents}</div>
        <div><button className = "addEducationButton" onClick={this.addEducationExperience}>Add education experience</button></div>
        <WorkInfo handleInfoInputChange={this.handleInfoInputChange}/>
        <div>{this.state.additionalWorkInfoComponents}</div>
        <div><button className = "addWorkButton" onClick={this.addWorkExperience}>Add work experience</button></div>
        <div><button className= "finalRenderButton" onClick={this.renderHandler}>Final Render →</button></div>
      </div>
    )
      } else {
        return <FinalRender editHandler={this.editHandler} 
        allBasicInfo={{fullName: this.state.fullName, email: this.state.email, phoneNumber: this.state.phoneNumber}} 
        educationInfoList={this.state.educationInfoList}
        workInfoList={this.state.workInfoList}
        />
      }
    } 
  }

export default App

