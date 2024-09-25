import objectType from "../typed";
import { ChangeEvent, useState } from "react";

const InputDesign = ({
  setObjectValue,
  idNumber,
  setIdNumber,
}: {
  setObjectValue: React.Dispatch<React.SetStateAction<objectType[]>>;
  idNumber: number;
  setIdNumber: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [countValue, setCountValue] = useState<number>(1);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleSetCountValue = (event: ChangeEvent<HTMLSelectElement>) => {
    setCountValue(Number(event.target.value));
  };
  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.length === 0) {
      alert("Input Some Text");
      return;
    }
    setIdNumber((idNumber) => idNumber + 1);
    const newObject: objectType = {
      id: idNumber,
      checked: false,
      count: countValue,
      text: inputValue,
    };
    setObjectValue((prev) => {
      const updatedList = [...prev, newObject];
      return updatedList;
    });

    setInputValue("");
    setCountValue(1);
  };
  return (
    <div className="bg-orange-400 w-full p-16">
      <div className="flex flex-col justify-center items-center gap-8">
        <div>
          <h1 className="font-roboto text-xl text-white">
            What do you need for your 😍 trip ?
          </h1>
        </div>
        <form className="flex gap-4" onSubmit={handleClick}>
          <select
            className="px-2 py-1 rounded-md bg-slate-200 text-teal-600 font-semibold text-lg"
            onChange={handleSetCountValue}
            value={countValue}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <input
            type="text"
            placeholder="Item..."
            value={inputValue}
            onChange={handleChange}
            className="px-2 py-1 rounded-md bg-slate-200 text-teal-600 font-semibold text-lg"
          />
          <button className="px-4 py-1 rounded-md bg-teal-700 text-white font-semibold text-lg">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputDesign;
