import './App.css';
import P from './PlainText';

export default function TextBody({width, type, value, onChange}){
    if(type === "input"){
        return (
            <textarea style={width} className="text-body" value={value} onChange={onChange}>

            </textarea>
        );
    }
    else {
        return (
            <div style={width} className="output-text">
                <P value={value}/>
            </div>
        )
    }
}