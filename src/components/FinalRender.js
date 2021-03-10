import React from 'react'
import './FinalRender.css'
import uniqid from 'uniqid'

function FinalRender(props) {
    const {allBasicInfo} = props
    return (
        <div className = "finalRenderBody" >
        <div className = "basicInfoSection">
            <header className ="finalRenderBasicInfoHeader">Basic Information</header>
            <h2 className ="finalRenderBasicInfo">Full name: {allBasicInfo.fullName}</h2>
            <h2 className ="finalRenderBasicInfo">E-mail: {allBasicInfo.email}</h2>
            <h2 className ="finalRenderBasicInfo">Phone-number: {allBasicInfo.phoneNumber}</h2>   
        </div>
        <div className="educationInfoSection" >
            <div className="educationInfoSectionHeader">Education information</div>
            <div className="educationInfoSectionContainer">
                {props.educationInfoList.map(obj => {return (<div className="educationInfoSectionContainerChild" key = {uniqid()}>
                <h2 className="containerChildText">Place of study: {obj.schoolName}</h2>
                <h2 className="containerChildText">Course/ degree: {obj.courseOrDegreeName}</h2>
                <h2 className="containerChildText">Start date: {obj.startDate}</h2>
                <h2 className="containerChildText">End date: {obj.endDate}</h2>
                </div>)})}
            </div>
        </div>
        <div className="workInfoSection">
            <div className="workInfoSectionHeader">Work Information</div>
            <div className="workInfoSectionContainer">
                {props.workInfoList.map(obj => {return (<div className="workInfoSectionContainerChild" key = {uniqid()}>
                <h2 className="containerChildText">Job title: {obj.jobName}</h2>
                <h2 className="containerChildText">Name of employer: {obj.employerName}</h2>
                <h2 className="containerChildText">Start date: {obj.jobStartDate}</h2>
                <h2 className="containerChildText">End date: {obj.jobEndDate}</h2>
                </div>)})}
            </div>
        </div>
        <button className= "editButton" onClick ={() => props.editHandler()}> ← Redo</button>
        </div>
    )
}

export default FinalRender
