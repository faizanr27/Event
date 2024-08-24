import React, { useState, useEffect } from "react";
import EventForm from "./EventForm";
import CreateEvent from "./createEvent";

const Layout = () => {
  const [list, setList] = useState(() => {
    // Load events from localStorage when the component mounts
    try {
      const storedEvents = localStorage.getItem("eventList");
      return storedEvents ? JSON.parse(storedEvents) : [];
    } catch (error) {
      console.error("Error loading from localStorage:", error);
      return [];
    }
  });

  const [displayForm, setDisplayForm] = useState(false);
  const [displayButton, setDisplayButton] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  // Save events to localStorage whenever the list changes
  useEffect(() => {
    try {
      localStorage.setItem("eventList", JSON.stringify(list));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [list]);

  const handleDisplayButton = () => {
    setDisplayButton(false);
    setDisplayForm(true);
  };

  const handleDisplayForm = () => {
    setDisplayButton(true);
    setDisplayForm(false);
    setSelectedItem(null);
  };

  const addEvent = (newEvent) => {
    setList([...list, newEvent]);
  };

  const handleDelete = (id) => {
    setList(list.filter((e) => e.id !== id));
  };

  const handleSelect = (e) => {
    setSelectedItem(e);
    handleDisplayButton();
  };

  const handleUpdateList = (updatedItem) => {
    setList(
     list.map((e) => (e.id === updatedItem.id ? updatedItem : e))
    );
  };

  return (
    <div className="flex items-center">
      <div className={`box-one ${displayForm ? "form-open" : ""}`}>
        {!displayForm && (
          <CreateEvent
            handleDisplayButton={handleDisplayButton}
            list={list}
            handleDelete={handleDelete}
            handleSelect={handleSelect}
          />
        )}

        {!displayButton && (
          <EventForm
            addEvent={addEvent}
            handleDisplayForm={handleDisplayForm}
            selecteditem={selectedItem}
            handleUpdateList={handleUpdateList}
          />
        )}
      </div>
    </div>
  );
};

export default Layout;
