import { toast } from 'react-toastify'
import sleep from 'sleep-promise'

const apis = {}

apis.update = async (list) => {
  const ms = Math.floor(Math.random() * 200)
  await sleep(ms)
  const success = Math.floor(Math.random() * 100)
  if (success > 30) {
    toast('🦄 Successful')
    return '200 OK'
  }
  toast('Failed')
  throw Error('500 Unknown')
}

export default apis
