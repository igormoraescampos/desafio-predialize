import { Enterprise } from "./Enterprise"

export interface Client {
  _id: number,
  name: string,
  image_src: string,
  enterprises: Enterprise[]
}