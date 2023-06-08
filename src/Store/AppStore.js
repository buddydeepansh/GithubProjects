import { makeAutoObservable } from "mobx"

class AppStore {
  device = 1
  modalData = "1"
  modalVisible = false
  constructor() {
    makeAutoObservable(this)
  }
  setDevice = (data) => {
    this.device = data
  }
  setModalData = (data) => {
    this.modalData = data
  }
  setModalVisible = (data) => {
    this.modalVisible = data
  }
}
export default new AppStore()
