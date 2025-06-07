/**
 * SubmitButton
 * Renders a button and logs on mouse enter/leave.
 */
function SubmitButton() {
  // Handler for mouse entering the button
  function handleEnter() {
    console.log("Mouse Entering")
  }
   // Handler for mouse leaving the button
  function handleLeave() {
    console.log("Mouse Exiting")
  }

  return (
    <button
      type="button"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      Submit Password
    </button>
  )
}



export default SubmitButton;