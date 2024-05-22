import React from 'react'

const CharacterCounter = () => {

    const [count, setCount] = React.useState("")

    function counter(e){
        setCount(e.target.value)
    }

  return (
    <div>
      <textarea onChange={counter}/>
      <p>Character count: {count.length}</p>
    </div>
  )
}

export default CharacterCounter