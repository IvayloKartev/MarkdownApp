import TextBody from "./TextBody";
import Header from "./HeadBanner";
export default function Editor() {
    return (
      <div>
        <Header title="Editor" width={{ width: '30vw' }} />
        <TextBody width={{ width: '29.7vw' }} />
      </div>
    );
  }