import './App.css';
export default function Header({title, width}){
    return (
        <>
        <div className="header" style={width}>
            <p>{title}</p>
            <div class="expand"><i className="fas fa-expand"></i></div>
        </div>
        </>
    )
}