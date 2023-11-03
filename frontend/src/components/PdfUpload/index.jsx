import React, { useState } from 'react'
import axios from 'axios'

const index = () => {
    const [ selectedFile, setSelectedFile ] = useState(null);
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    }
    const handleUpload = () => {
        // later
    }

  return (
    <div>
        <input type="file" name="" id="" accept='.pdf' onChange={handleFileChange} />
        <button onClick={handleUpload}>Upoload File</button>
    </div>
  )
}

export default index