export type HtmlTemplate = string
export type JsonTemplate = string

export type ClientConfig = {
  language: string
  autosave: boolean
}
export type ErrorMessage = {}

export type BeeEditor = {
  getToken: (clientId: string, clientSecret: string) => Promise<string>
  start: $TSFixMe
}

export type $TSFixMe = any