import React from 'react'

const ToggleVisibility = () => {

    const [visibilty, setVisibilty] = React.useState(false)

    function toggle (){
        setVisibilty(prevVisibility => !prevVisibility)
    }

    const centerStyle = {
        marginTop: "400px",
    }

    const buttonStyle = {
        width: "300px",
        height: "80px",
        fontSize: "24px",
        border: "1px solid black",
        borderRadius: "5px",
        background: "black",
        color: "white",
        boxShadow: "2px 2px 10px grey",
        cursor: "pointer"
    }

    const pStyle = {
        fontSize: "24px",
        fontFamily: "'poppins', 'sans-serif'",
        fontWeight: 600
    }

  return (
    <center style={centerStyle}>
        <button onClick={toggle} style={buttonStyle}>Show/Hide Text</button>
        <p style={pStyle}>{visibilty ? "Hi I am Menuk" : ""}</p>
    </center>
    
  )
}

export default ToggleVisibility