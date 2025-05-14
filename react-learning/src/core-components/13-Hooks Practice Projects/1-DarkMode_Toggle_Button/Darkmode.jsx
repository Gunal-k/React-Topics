import React,{useState,useEffect} from 'react'

const Darkmode = () => {
    const [darkmode,setDarkmode] = useState(false)

    useEffect(()=>{
        console.log("entered")
        if (darkmode){
            document.body.style.backgroundColor = "#202020";
            document.body.style.color = "white";
    }
    else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "#202020";
    }
    })
  return (
    <>
        <button onClick={()=>setDarkmode(!darkmode)}>Switch Mode</button>
    </>
  )
}

export default Darkmode