import { Server } from "http";
import { BrowserRouter } from "react-router-dom";

interface PropsData {
  type?: string;
  value: string;
  placeholder: string;
  onChangeHandler: (value: string) => void;
  onKeyPressHandler?: (event: React.KeyboardEvent<HTMLInputElement>) => any;
}

export const Input: React.FC<PropsData> = ({
  type,
  value,
  placeholder,
  onChangeHandler,
  onKeyPressHandler,
}) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChangeHandler(e.target.value)}
      onKeyPress={onKeyPressHandler}
    />
  );
};
"

Removing refrence now will affect other pages also. after some time I'll fix it


redux Server
redux architcture data
browser working
rendering process on BrowserRouter
critical rendering in browser
html and dhtml  


ata
deq@123
ni ata

- Discussion with Cam and Luke
- Added tracking in SER-15
- Created the GIF for different different brands
- 


