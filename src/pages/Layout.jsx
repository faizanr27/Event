import React, { useState } from "react";
import EventForm from "./EventForm";
import CreateEvent from "./createEvent";
// import '../Style/Layout.css';

const Layout = () => {
    const [list, setList] = useState([]);
    const [displayform, setDisplayForm] = useState(false);

    const [displaybutton, setDisplayButton] = useState(true);
    const [selecteditem, setSelectedItem] = useState(null);

    const handleDisplayButton = () => {
        setDisplayButton(false);
        setDisplayForm(true);
    }

    const handleDisplayForm = () => {
        setDisplayButton(true);
        setDisplayForm(false);
        setSelectedItem(null);

    }
    
    const addEvent = (newEvent) => {
        setList([...list, newEvent]);
    }

    const handleDelete = (id) =>{
        setList(list.filter(e => e.id !==id))
    }

    const handleSelect = (e) => {
        setSelectedItem(e);
        handleDisplayButton();
    }
    const handleUpdateList = (updatedItem) => {
        
        setList(list => list.map(e => e.id === updatedItem.id ? updatedItem : e));

    }
    return(
        <div className="flex items-center">
            <div className={`box-one ${displayform ? 'form-open' : ''}`}>
            {!displayform && 
                 <CreateEvent 
                 handleDisplayButton={handleDisplayButton} 
                 list={list} 
                 handleDelete={handleDelete} 
                 handleSelect={handleSelect}
                 />
            }

            {!displaybutton && 
                  <EventForm 
                  addEvent={addEvent} 
                  handleDisplayForm={handleDisplayForm} 
                  selecteditem={selecteditem}
                  handleUpdateList={handleUpdateList}
                  />
                  
            }

            </div>
        </div>
    );
}

export default Layout;