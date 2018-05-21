import React, { Component }  from 'react'
import Bee from './bee'

class BeePage extends Component {
  render() {
    const beeStyles = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }
    const beeConfig = {
      language: 'en-US',
      autosave: true,
    }
    return(
        <Bee
          className="containerClassName"
          style={beeStyles}
          config={beeConfig}
          onSave={(jsonFile, htmlFile) => console.log('---onSave---', jsonFile, htmlFile, '---onSave---')}
          onSend={htmlFile => console.log('---onSend---', htmlFile, '---onSend---')}
          onSaveAsTemplate={jsonFile => console.log('---onSaveAsTemplate---', jsonFile, '---onSaveAsTemplate---')}
          onError={errorMessage => console.log(errorMessage)}
        />
    )
  }
}

export default BeePage
