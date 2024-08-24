import React, { useState, useEffect } from "react";
import { Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const EventForm = ({ addEvent, handleDisplayForm, selecteditem, handleUpdateList }) => {
    const [id, setId] = useState("");
    const [topic, setTopic] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (selecteditem) {
            setId(selecteditem.id);
            setTopic(selecteditem.topic);
            setDate(selecteditem.date);
            setTime(selecteditem.time);
            setDescription(selecteditem.description);
        } else {
            setId("");
            setTopic("");
            setDate("");
            setTime("");
            setDescription("");
        }
    }, [selecteditem]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            const updatedItem = { id, topic, date, time, description };
            handleUpdateList(updatedItem);
        } else {
            const newEvent = { id: uuidv4(), topic, date, time, description };
            addEvent(newEvent);
        }
        
        setId("");
        setTopic("");
        setDate("");
        setTime("");
        setDescription("");

        handleDisplayForm();
    }

    return (
        <div className="container mx-auto p-4">
            
            <Form onSubmit={handleSubmit} className="space-y-6">
            
                <div className="bg-cont shadow-2xl rounded-lg p-6">
                <span className="block text-xl font-semibold mb-4 text-center text-white">What's your event about?</span>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-white">Event Topic</label>
                            <input 
                                type="text" 
                                placeholder="What's your event?" 
                                value={topic} 
                                onChange={(e) => setTopic(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-white">Start Date</label>
                                <input 
                                    type="date" 
                                    value={date} 
                                    onChange={(e) => setDate(e.target.value)} 
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-white">Start Time</label>
                                <input 
                                    type="time" 
                                    value={time} 
                                    onChange={(e) => setTime(e.target.value)} 
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">Description</label>
                            <textarea 
                                value={description} 
                                onChange={(e) => setDescription(e.target.value)} 
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <button type="submit" className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500">
                        Submit
                    </button>
                </div>
            </Form>
        </div>
    );
};

export default EventForm;
