import React, { Component }  from 'react'
import {
  JsonTemplate,
  HtmlTemplate,
  ErrorMessage,
  ClientConfig,
} from '../../types'
import Bee from '../components/Bee'

const BeePage = () => {
  const beeStyles: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
  const beeConfig: ClientConfig = {
    language: 'en-US',
    autosave: true,
  }
  return(
    <Bee
      className="containerClassName"
      style={beeStyles}
      beeConfig={beeConfig}
      onSave={(jsonFile: JsonTemplate, htmlFile: HtmlTemplate) => console.log('---onSave---', jsonFile, htmlFile, '---onSave---')}
      onSend={(htmlFile: HtmlTemplate) => console.log('---onSend---', htmlFile, '---onSend---')}
      onSaveAsTemplate={(jsonFile: JsonTemplate) => console.log('---onSaveAsTemplate---', jsonFile, '---onSaveAsTemplate---')}
      onError={(errorMessage: ErrorMessage) => console.log(errorMessage)}
    />
  )
}

export default BeePage
