import React from "react";
import { FaCalendarDay } from "react-icons/fa";

const CreateEvent = ({ handleDisplayButton, list, handleDelete, handleSelect }) => {
  return (
    <div className="container mx-auto md:min-w-96 min-w-80 p-4">
      <div className="bg-gray-800 shadow-2xl rounded-lg p-6 max-w-lg mx-auto">
        <div className="sticky top-0 z-20 text-white p-4 rounded-t-lg">
          <div className="flex items-center gap-2">
            <FaCalendarDay className="text-2xl" />
            <h3 className="text-lg font-semibold">Events |</h3>
            <button
              onClick={handleDisplayButton}
              className="bg-indigo-600 text-white rounded-md p-2 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
            >
              Create Event
            </button>
          </div>
        </div>

        <div className="mt-4 h-64 md:max-w-full max-w-60 overflow-y-scroll scrollbar-hide">
          {list.length > 0 ? (
            <ul className="space-y-4">
              {list
                .map((e) => (
                  <li key={e.id} className="p-4 bg-slate-700 text-white rounded-lg shadow-md ">
                    <h3 className="font-bold text-xl">{e.topic}</h3>
                    <p className="mt-1">Date: {e.date}</p>
                    <p className="mt-1">Time: {e.time}</p>
                    <p className="mt-1 max-w-60 break-words whitespace-normal truncate line-clamp-4">Description: {e.description}</p>
                    <div className="flex gap-2 mt-4">
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
            <div className="flex items-center justify-center w-full h-full p-4">
              <p className="text-center text-white">
                There are no upcoming events
                <br />
                Click the button above to create a new event
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
