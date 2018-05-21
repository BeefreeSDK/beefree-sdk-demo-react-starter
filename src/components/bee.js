import React, { Component }  from 'react'
import BeePlugin from 'bee-plugin'

// Move credentials to backend for production.
const CLIENT_ID     = "my-client-id"
const CLIENT_SECRET = "my-secret-key"
const CLIENT_UID    = "username"

const BASE_TEMPLATE = "https://rsrc.getbee.io/api/templates/m-bee"

const DEFAULT_CONFIGURATION = {
  uid: CLIENT_UID,                   // Needed for identify resources of the user.
  container: 'bee-plugin-container', // Identifies the id of div element that contains BEE Plugin.
  language: 'en-US',
  autosave: true,
}

class Bee extends Component {
  constructor(props) {
    super(props)
    this.onFetchTemplate = this.onFetchTemplate.bind(this)
    this.onFetchBeeToken = this.onFetchBeeToken.bind(this)
  }

  componentWillMount() {
    const { baseTemplate, onSave, onSend, onStart, onSaveAsTemplate, beeConfig } = this.props
    const beeFinalConfig = {...DEFAULT_CONFIGURATION, ...beeConfig, onSave, onSaveAsTemplate, onSend, onStart}
    return this.onFetchTemplate(baseTemplate || BASE_TEMPLATE)
      .then((template) => {
        const beeEditor = new BeePlugin()
        this.onFetchBeeToken(CLIENT_ID, CLIENT_SECRET, beeEditor)
          .then(() => beeEditor.start(beeFinalConfig, template))
      })
      .catch((error) => {
        console.error(error)
    })
  }

  onFetchBeeToken(clientId, clientSecret, beeEditor) {
    return beeEditor.getToken(clientId, clientSecret)
  }

  onFetchTemplate(template) {
    return fetch(template)
      .then((response) => response.json())
  }

  render() {
    const { style, className } = this.props
    return(
        <div id="bee-plugin-container" style={style} className={className} />
    )
  }
}

export default Bee
