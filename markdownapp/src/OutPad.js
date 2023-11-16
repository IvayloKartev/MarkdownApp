import Header from "./HeadBanner";
import TextBody from "./TextBody";

export default function Output(){
    return (
        <>
            <Header title="Previewer" width={{width: '40vw'}}/>
            <TextBody width={{width: '39.85vw'}} type="output"/>
        </>
    );
}