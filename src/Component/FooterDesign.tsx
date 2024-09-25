import objectType from "../typed";

const FooterDesign = ({ objectValue }: { objectValue: objectType[] }) => {
    const fullLength = objectValue.length;
    const flag: boolean = fullLength > 0 ? true : false;
    let checked = 0;
  
    objectValue.forEach((element) => {
      if (element.checked) checked++;
    });
  
    return (
      <div className="w-full bg-teal-300 py-16">
        <div className="flex justify-center items-center font-roboto font-extrabold text-xl">
          {flag === false ? (
            <h1> Start adding some items to your packing list 🚀 </h1>
          ) : (
            <h1>
              💼 You have {fullLength} items on your list, and you already packed{" "}
              {checked} ({Math.floor((checked * 100) / fullLength)}%)
            </h1>
          )}
        </div>
      </div>
    );
  };

  export default FooterDesign;