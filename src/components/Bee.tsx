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
import BeefreeSDK from '@beefree.io/sdk'

const DEFAULT_CONFIGURATION = {
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
    const beeFinalConfig = { ...DEFAULT_CONFIGURATION, ...beeConfig, onSave, onSaveAsTemplate, onSend, onStart }
    return this.onFetchTemplate(baseTemplate || config.BASE_TEMPLATE)
      .then((template) => {
        this.onFetchBeeToken(config.CLIENT_UID, config.CLIENT_ID, config.CLIENT_SECRET)
          .then((token:any) => {
            const beeEditor: BeeEditor = new BeefreeSDK(token);
            beeEditor.start(beeFinalConfig, template)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  async onFetchBeeToken(uid: string, clientId: string, clientSecret: string) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      uid: uid,
    });

    return await fetch("https://auth.getbee.io/loginV2", {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    }) 
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }

  onFetchTemplate(template: JsonTemplate) {
    return fetch(template)
      .then((response) => response.json())
  }

  render() {
    const { style, className } = this.props
    return (
      <div id="bee-plugin-container" style={style} className={className} />
    )
  }
}

export default Bee
