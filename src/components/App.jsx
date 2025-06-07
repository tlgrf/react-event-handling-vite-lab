/**
 * App
 * Composes <PasswordInput> and <SubmitButton> into the main UI.
 */
import { useState } from 'react'
import '../App.css'
import PasswordInput from './PasswordInput'
import SubmitButton from './SubmitButton'

function App() {

  return (
    <div>
      <PasswordInput/>
      <SubmitButton/>
    </div>
  )
}

export default App
