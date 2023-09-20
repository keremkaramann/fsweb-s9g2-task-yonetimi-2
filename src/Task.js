import React from "react";
import { differenceInDays, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const difference =
    differenceInDays(new Date(taskObj.deadline), new Date()) <= 3
      ? "normal"
      : "urgent";

  const timeDifference = formatDistanceToNow(new Date(taskObj.deadline), {
    locale: tr,
    addSuffix: true,
  });

  return (
    <div className=" bg-white rounded p-6 mt-4 leading-6 shadow-customShadow">
      <h3 className="text-[#c8781a] text-lg">{taskObj.title}</h3>
      <div className="text-xs pt-1.5">
        son teslim:{" "}
        <span className={`${difference} py-1 px-2 rounded inline-block`}>
          {timeDifference}
        </span>
      </div>
      <p className="text-sm text-[#444] pt-2 pb-3">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block py-1.5 px-3 mr-2 mb-1.5 text-sm border-solid border-2 border-[#ccc] rounded-3xl"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block py-1.5 px-3.5 bg-[#fecc91] shadow-customShadow rounded border-0 cursor-pointer ml-auto"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
