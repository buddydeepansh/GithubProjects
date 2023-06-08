import { makeAutoObservable } from "mobx"

class AppStore {
  device = 1
  modalData = "1"
  constructor() {
    makeAutoObservable(this)
  }
  setDevice = (data) => {
    this.device = data
  }
  setModalData = (data) => {
    this.modalData = data
  }
}
export default new AppStore()
