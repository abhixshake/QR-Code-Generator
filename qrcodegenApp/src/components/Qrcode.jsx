import { useState } from 'react'
import QRCode from "react-qr-code"

function Qrcode() {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');
    function handleGenerateQrCode() {
        setQrCode(input)
        setInput('')
    }


    return (
        < >
            <h1>QR Code Generator</h1>
            <input onChange={(e)=>setInput(e.target.value)} type="text" name="qrcode" placeholder="Enter text to generate QR" value={input} />
            <button disabled={input && input.trim() !== "" ? false : true} onClick={handleGenerateQrCode}>Generate</button>
            <QRCode id="qr-code-value" value={qrCode} size={300} bgcolor="#fff"></QRCode>
        </>


    );
}

export default Qrcode