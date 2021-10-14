import React, { Component } from 'react'
import {
  JsonTemplate,
  HtmlTemplate,
  ClientConfig,
  BeeEditor,
  $TSFixMe,
} from '../../types'
import { config } from '../../config/config.local'
// @ts-ignore
import BeePlugin from '@mailupinc/bee-plugin'

const DEFAULT_CONFIGURATION = {
  uid: config.CLIENT_UID,            // Needed for identify resources of the user.
  container: 'bee-plugin-container', // Identifies the id of div element that contains BEE Plugin.
  language: 'en-US',
  autosave: true,
}

type Props = {
  baseTemplate?: JsonTemplate
  onSave?: $TSFixMe
  onSend?: $TSFixMe
  onStart?: $TSFixMe
  onSaveAsTemplate?: $TSFixMe
  onError?: $TSFixMe
  beeConfig?: ClientConfig
  className?: string
  style?: React.CSSProperties
}

type State = {}

class Bee extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.onFetchTemplate = this.onFetchTemplate.bind(this)
    this.onFetchBeeToken = this.onFetchBeeToken.bind(this)
  }

  componentWillMount() {
    const { baseTemplate, onSave, onSend, onStart, onSaveAsTemplate, beeConfig } = this.props
    const beeFinalConfig = {...DEFAULT_CONFIGURATION, ...beeConfig, onSave, onSaveAsTemplate, onSend, onStart}
    return this.onFetchTemplate(baseTemplate || config.BASE_TEMPLATE)
      .then((template) => {
        const beeEditor: BeeEditor = new BeePlugin()
        this.onFetchBeeToken(config.CLIENT_ID, config.CLIENT_SECRET, beeEditor)
          .then(() => beeEditor.start(beeFinalConfig, template))
      })
      .catch((error) => {
        console.error(error)
    })
  }

  onFetchBeeToken(clientId: string, clientSecret: string, beeEditor: BeeEditor) {
    return beeEditor.getToken(clientId, clientSecret)
  }

  onFetchTemplate(template: JsonTemplate) {
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
