import { useState } from "react"
import sampleMessages from "../assets/sampleMessages.js"

export default function Chat() {

  const [messages, setMessages] = useState([])
  const [text, setText] = useState('')
  const [counter, setCounter] = useState(0)

  const handleText = (e) => {
    setText(e.target.value)
  }

  const handleSend = () => {
    setMessages([...messages, `Visitor: ${text}`])
    let currentCounter = counter
    let response = setTimeout(() => {
      let toSet = [...messages, `Visitor: ${text}`].concat("Virtual Host: " + sampleMessages[currentCounter % sampleMessages.length])
      setMessages(toSet)
      clearTimeout(response)
    }, 1500)
    setCounter(counter + 1)
    setText('')
  }


  return (
    <div>
      <div>
        <div style={chatContainerStyle}>
          <div style={chatContentContainerStyle} id="chatbox">
            {messages.map((message, i) => {
              return (
                <div>
                  <p className={`text-xl`}>{message}</p>
                  {i < messages.length - 1 && <div className="divider my-0"></div>}
                </div>
              )
            }
            )}
          </div>
        </div>
        <div>
        </div>
      </div>
      <div style={inputContainerStyle}>
          <input
            type="text"
            onChange={handleText}
            value={text}
            style={inputStyle}
            placeholder="Type your message here..."
            onKeyPress={(e)=>{
              if(e.charCode === 13) {
                handleSend()
              }
            }}
          />
          <button className="chatSend" style={buttonStyle} onClick={handleSend}>Send</button>
        </div>
    </div>
  )
}

var chatContainerStyle = {
  backgroundColor: "rgba(200, 200, 200, 0.2)",
  width: "80%",
  height: "50vh",
  marginLeft: "auto",
  marginRight: "20px",
  marginBottom: "20px",
  marginTop: "30px",
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "flex-start",
  padding: "10px",
  overflowY: "auto",
  textAlign: "left",
}

var chatContentContainerStyle = {
  flex: "1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
}

var inputContainerStyle = {
  display: "flex",
  marginTop: "16px",
  justifyContent: "flex-end",
  marginRight: "100px",
}

var buttonStyle = {
  backgroundColor: "grey",
  color: "white",
  border: "none",
  marginLeft: "8px",
  padding: "8px",
}

var inputStyle = {
  backgroundColor: "grey",
  color: "white",
  border: "none",
  flex: "1",
  padding: "8px",
  minWidth: "8%",
  maxWidth: "38%",
}