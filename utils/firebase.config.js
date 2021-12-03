import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyCGX37eMTyYzwIw8CqUggVunxNDhVqmGsY',
  authDomain: 'todoreact-83897.firebaseapp.com',
  projectId: 'todoreact-83897',
  storageBucket: 'todoreact-83897.appspot.com',
  messagingSenderId: '67471597444',
  appId: '1:67471597444:web:c6fde314d2c07f512407d1',
}

initializeApp(firebaseConfig)
const db = getFirestore()

export default db
