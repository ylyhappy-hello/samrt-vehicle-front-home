declare module API {
  type TransportNote = {
    id: number
    title: string
    type: '1' | '2'  
    label?:string
    bannerUrl: string
    releaseAddr: string
    content: string
    publishTime: number
  }
}
