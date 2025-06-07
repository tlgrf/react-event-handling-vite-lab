/**
 * PasswordInput
 * Renders a password field and logs every keystroke.
 */
function PasswordInput (){
      // Handler for input changes
      function handleChange(event) {
        console.log("Entering password...")
    }

    return(
        <input 
            type="password" 
            onChange={handleChange}
        />
    )
}

export default PasswordInput;