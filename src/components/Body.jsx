import Progress from "../constent/Progress";
import { details } from "../utils/static";

function Body() {
  return (
    <div className="lg:px-28 px-11 ">
      <Progress />
      <div className="flex  flex-col md:flex-row md:justify-between items-center cursor-pointer my-5  ">
        {details.map((item) => (
          <div
            className={`flex items-center rounded-md gap-3 py-3 lg:px-9 md:px-5 px-3  text-sm mb-5  ${
              item.id === 3
                ? `bg-[#0A8A97] shadow-lg shadow-[#0A8A97]/50 `
                : `bg-[#58DBBA]`
            } `}
            key={item.id}
          >
            <img className="w-7 h-7 " src={item.icon} alt="" />

            <h1 className="text-white font-medium">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
