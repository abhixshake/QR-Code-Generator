import { useState } from 'react'
import QRCode from "react-qr-code"
import "../../src/App.css"

function Qrcode() {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');
    function handleGenerateQrCode() {
        setQrCode(input)
        setInput('')
    }


    return (
        <div className='qrcontainer'>
            <h1>QR Code Generator</h1>
            <input onChange={(e)=>setInput(e.target.value)} type="text" name="qrcode" placeholder="Enter text to generate QR" value={input} />
            <button style={{backgroundColor: "green"}} disabled={input && input.trim() !== "" ? false : true} onClick={handleGenerateQrCode}>Generate</button>
            <QRCode id="qr-code-value" value={qrCode} size={300} bgcolor="#fff"></QRCode>
        </div>


    );
}

export default Qrcode