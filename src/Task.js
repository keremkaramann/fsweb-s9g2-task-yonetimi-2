import React from "react";
import { differenceInDays, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const difference = differenceInDays(new Date(taskObj.deadline), {
    locale: tr,
  });

  const timeDifference = formatDistanceToNow(
    new Date(taskObj.deadline),

    {
      locale: tr,
      addSuffix: true,
    }
  );

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim:{" "}
        <span className={difference <= 3 ? "bg-[#ffd9d4]" : "bg-indigo-200"}>
          {difference <= 3 ? difference : timeDifference}
        </span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
