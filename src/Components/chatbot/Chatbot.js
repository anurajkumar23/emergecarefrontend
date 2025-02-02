import React from 'react'
import { useEffect } from 'react'
import Aibot from "./Aibot.png"

import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import "./bot.css"
import { useState } from 'react';
import { CgClose } from "react-icons/cg";


const Chatbot = () => {
  const [show,setShow] = useState()
  const steps = [
    {
        id: "Greet",
        message: "Hi there!👋 Welcome to EmerceCare! How may i help you 😊",
        trigger: "Ask Name",
      },
      {
        id: "Ask Name",
        message: "Please enter your name",
        trigger: "waiting",
      },
      {
        id: "waiting",
        user: true,
        trigger: "Name",
      },
      {
        id: "Name",
        message: "Hi {previousValue}, Please select your issue",
        trigger: "issues",
      },
      {
        id: "issues",
        options: [
          {value: "Bed Facility", label: "Bed Facility",trigger: "Bed Facility",},
          { value: "Ambulance", label: " Ambulance", trigger: " Ambulance" },
          { value: "Doctors", label: "Doctors", trigger: "Doctors" },
          { value: "Medicines", label: "Medicines", trigger: "Medicines" },
          { value: "Others", label: "Others", trigger: "Others" },
        ],
      },
  
      {
        id: "Bed Facility",
        message:"Tell your Bed Facility issue",
       
        trigger:"hi"
      },
      {
        id:"hi",
        user:true,
        trigger:"completed"
      },
      {
        id: " Ambulance",
       message:"Tell your Ambulance issue",
      
       trigger:"hello"
      },
      {
        id: "hello",
      //  message:"Tell your Angular issue",
       user:true,
       trigger:"completed"
       
      },
      {
          id: "Doctors",
          message:"Tell your Doctors issue",
          
          trigger:"java"
      },
      { 
        id:"java",
        user:true,
        trigger:"completed"
      },
      {
          id: "Medicines",
          message:"Tell your Medicines issue",
          trigger:"htcs"
      },
      {
        id:"htcs",
        user:true,
        trigger:"completed"
      },
      {
          id: "Others",
          message:"Tell your Others issue",
          trigger:"othe"
      },
      {
        id:"othe",
        user:true,
        trigger:"completed"
      },
  
      {
           id: "completed",
           message:"Thank you for Telling your Issues, our Team will taking an action on your issues very soon.",
           end:true
      }
  
  
    ];
    
  

  return (
    <div className='chatbot-2'>
    <img src={Aibot} alt="" className="chatbot-img" onClick={() => setShow(true) } />
    <div>
      {
       show?<CgClose className='close' onClick= {() => setShow(false)}/>:null
      } 
    </div>
    <div className='bot' id='type2'>
    <Segment>
      {
        show?<ChatBot  steps={steps}  />:null
        
      }
      </Segment>
      </div>
    </div>
  )
}

export default Chatbot
