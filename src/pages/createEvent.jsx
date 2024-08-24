import React from "react";
import { FaCalendarDay } from "react-icons/fa";

const CreateEvent = ({ handleDisplayButton, list, handleDelete, handleSelect }) => {
  return (
<div className="bg-cont rounded-lg shadow-md overflow-y-scroll scrollbar-hide w-full max-w-xs sm:max-w-md h-64 md:max-w-lg lg:w-96">

      <div className="sticky top-0 z-20 bg-cont text-white p-2">
        <div className="flex items-center gap-2">
          <FaCalendarDay className="" />
          <h3 className="text-lg font-semibold">Events |</h3>
          <button
            onClick={handleDisplayButton}
            className="bg-btn text-white rounded-md p-2 hover:bg-black ml-auto sm:ml-0"
          >
            Create Event
          </button>
        </div>
      </div>

      <div className="h-48">
        {list.length > 0 ? (
          <ul>
            {list
              .map((e) => (
                <li key={e.id} className="w-full mb-2 p-2 text-white bg-list rounded shadow-sm overflow-hidden">
                  <h3 className="font-bold">{e.topic}</h3>
                  <p>Date: {e.date}</p>
                  <p>Time: {e.time}</p>
                  <p>Description: {e.description}</p>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-xl hover:bg-red-600"
                      onClick={() => handleDelete(e.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded-xl hover:bg-green-600"
                      onClick={() => handleSelect(e)}
                    >
                      Update
                    </button>
                  </div>
                </li>
              ))
              .reverse()}
          </ul>
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <p className="text-center text-gray-600">
              There are no upcoming events
              <br />
              Click the button above to create a new event
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateEvent;
