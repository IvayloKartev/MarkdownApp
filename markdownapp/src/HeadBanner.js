import './App.css';
export default function Header({title, width}){
    return (
        <>
        <div className="header" style={width}>
            <p>{title}</p>
            <i className="fas fa-expand"></i>
        </div>
        </>
    )
}