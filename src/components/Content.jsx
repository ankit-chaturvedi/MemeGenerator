import Meme from "./Meme.jsx"
import {useState} from "react";
export default function Content(){
    const [randomValue, setRandomValue] = useState(0);
    const [topLine, setTopLine] = useState('');
    const [bottomLine, setBottomLine] = useState('');

    const handleTopLine = (e) => {
        setTopLine(e.target.value);
    }
    const handleBottomLine = (e) => {
        setBottomLine(e.target.value);
    }

    const randomGenerator = () => {
        setRandomValue(Math.floor(Math.random() * 100));
    }

    return (
        <>
            <main className="bg-blue-950 h-48 flex items-center justify-center gap-x-8 flex-wrap">
                <label htmlFor="" className="flex items-center justify-center flex-wrap text-slate-200 gap-3">
                    Top Line:
                    <input type="text" placeholder="line1" onChange={handleTopLine}  className="px-2 text-gray-900 rounded-sm"/>
                </label>
                <label htmlFor=""  className="flex items-center justify-center flex-wrap text-slate-200 gap-3">
                    Bottom Line:
                    <input type="text" placeholder="line2" onChange={handleBottomLine} className="px-2 text-gray-900 rounded-sm"/>
                </label>
                <button onClick={randomGenerator} className="text-slate-200 bg-green-700 rounded-md p-2 hover:bg-green-600 cursor-pointer">New Meme</button>
            </main>
            <Meme randomValue ={randomValue} topLine={topLine} bottomLine={bottomLine}/>
        </>
    )
}