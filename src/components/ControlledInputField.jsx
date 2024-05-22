import React from 'react'

const ControlledInputField = () => {

    const [updateField, setUpdateField] = React.useState("")

    function updatedField(e){
        setUpdateField(e.target.value)
    }

    const styles = {
        width: "400px",
        marginTop: "300px",
        height: "80px",
        fontSize: "34px",
        border: "2px solid black",
        borderRadius: "8px",
        padding: "10px"
    }

  return (
    <>
    <center>
    <   input 
            type="text" 
            value={updateField} 
            onChange={updatedField}
            style={styles}
        />
        <h2 id='para'>Input Text: {updateField}</h2>
    </center>
        
    </>
  )
}

export default ControlledInputField