import { useState } from "react";
import objectType from "./typed";
import InputDesign from "./Component/InputDesign";
import HeaderDesign from "./Component/HeaderDesign";
import OutputDesign from "./Component/OutputDesign";
import FooterDesign from "./Component/FooterDesign";

export default function App() {
  const [objectValue, setObjectValue] = useState<objectType[]>([]);
  const [idNumber, setIdNumber] = useState<number>(1);

  return (
    <div className="flex flex-col ">
      <HeaderDesign />
      <InputDesign
        setObjectValue={setObjectValue}
        idNumber={idNumber}
        setIdNumber={setIdNumber}
      />
      <OutputDesign
        objectValue={objectValue}
        setObjectValue={setObjectValue}
      />
      <FooterDesign objectValue={objectValue} />
    </div>
  );
}
