
import {useEffect, useState} from "react";


export default function Meme({randomValue, topLine, bottomLine}){
    const [image, setImage] = useState([0]);

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setImage(data.data.memes))
    },[])

    return (
        <> <main className=" flex items-center justify-center md:mt-3 ">
                <div className=" w-full h-full flex items-center justify-center flex-col relative md:w-1/3">
                    <span className="absolute inset-x-0 top-0 text-center text-slate-200 text-4xl">{topLine}</span>
                    <img src={image[randomValue].url} alt="logo" className="w-full md:w-full h-full"/>
                    <span className="absolute inset-x-0 bottom-0 text-center text-slate-200 text-4xl">{bottomLine}</span>
                </div>
            </main>
        </>
    )
}