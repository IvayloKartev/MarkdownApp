import Header from "./HeadBanner";
import TextBody from "./TextBody";

export default function Output({value}){
    return (
        <>
            <Header title="Previewer" width={{width: '40vw'}}/>
            <TextBody width={{width: '39.85vw'}} type="output" value={value}/>
        </>
    );
}