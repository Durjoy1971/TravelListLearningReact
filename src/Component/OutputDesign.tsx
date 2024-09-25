import objectType from "../typed";
import { ChangeEvent, Fragment, useState } from "react";

const OutputDesign = ({
  objectValue,
  setObjectValue,
}: {
  objectValue: objectType[];
  setObjectValue: React.Dispatch<React.SetStateAction<objectType[]>>;
}) => {
  const [type, setType] = useState<number>(1);
  
  const handleCheckBox = (idNumber: number) => {
    setObjectValue(
      objectValue.map((singleObj) => {
        if (singleObj.id === idNumber) {
          return { ...singleObj, checked: !singleObj.checked };
        } else {
          return singleObj;
        }
      })
    );
  };

  const handleDelete = (idNumber: number) => {
    setObjectValue(objectValue.filter((singleObj) => singleObj.id != idNumber));
  };

  const handleClearList = () => {
    setObjectValue([]);
  };

  const handleSortOut = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedType = Number(event.target.value);
    setType(selectedType);
  };

  return (
    <div className="w-full min-h-80 bg-amber-800 p-14">
      <div className="max-w-md mx-auto">
        <ul className="grid grid-cols-2 gap-2">
          {[...objectValue]
            .sort((a,b) => {
                if(type === 2) {
                    if(a.text === b.text) return 0;
                    else if(a.text > b.text) return 1;
                    else return -1;
                }
                else if(type === 3) {
                    if(a.checked && b.checked) return 1;
                    else if(a.checked) return 1;
                    else return -1;
                }
                return a.id - b.id;
            })
            .map((singleObj) => {
            return (
              <Fragment key={singleObj.id}>
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked={singleObj.checked}
                    onChange={() => handleCheckBox(singleObj.id)}
                  />
                  <li className="text-white font-roboto text-center">
                    {singleObj.count + " " + singleObj.text}
                  </li>
                  <button onClick={() => handleDelete(singleObj.id)}>❌</button>
                </div>
              </Fragment>
            );
          })}
        </ul>
      </div>
      <div className="max-w-[28rem] mx-auto mt-10 flex gap-6 font-roboto">
        <select
          className="px-3 py-2 rounded-md text-teal-800 font-semibold"
          onChange={handleSortOut}
        >
          <option value="1">SORT BY INPUT ORDER</option>
          <option value="2">SORT BY DESCRIPTION</option>
          <option value="3">SORT BY PACKED STATUS</option>
        </select>
        <button
          className="px-3 rounded-md bg-teal-700 text-white  "
          onClick={handleClearList}
        >
          CLEAR LIST
        </button>
      </div>
    </div>
  );
};

export default OutputDesign;
