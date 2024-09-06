import { useState, useEffect } from 'react';

export default function EventList() {
    const [eventList, setEventList] = useState([]);

    const fetchEventList = async () => {
        try {
            const response = await fetch('/events/all'); // Replace with your API endpoint
            const data = await response.json();
            setEventList(data); // Assuming data is an array of events
        } catch (error) {
            console.error('Error fetching event list:', error);
        }
    };

    // Use useEffect to fetch the event list when the component mounts
    useEffect(() => {
        fetchEventList();
    }, []);

    return (
        <>
            <div className="flex justify-center items-center mb-4"> {/* Flex container to center */}
                <div className="w-full max-w-4xl"> {/* Responsive width container */}
                    <table className="table-auto border-collapse border border-gray-300 w-full text-center">
                        <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Event Page</th>
                            <th className="border border-gray-300 px-4 py-2">Edit</th>
                            <th className="border border-gray-300 px-4 py-2">Remove</th>
                            {/*<th className="border border-gray-300 px-4 py-2">Added By</th>*/}
                        </tr>
                        </thead>
                        <tbody>
                        {eventList.length > 0 ? (
                            eventList.map((event, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-300 px-4 py-2">{event.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <a href={event.event_url} className="text-blue-500 underline">Link</a>
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <button className="px-4 py-2 bg-blue-500 text-white shadow-sm">
                                            <a href={`/events/edit/${event.id}`} className="text-white">Edit</a>
                                        </button>
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <button className="px-4 py-2 bg-red-500 text-white shadow-sm">
                                            <a href={`/events/remove/${event.id}`}
                                               className="text-white">Remove</a>
                                        </button>

                                    </td>
                                    {/*<td className="border border-gray-300 px-4 py-2">*/}
                                    {/*    <a href={event.event_url} className="text-blue-500 underline">Added By</a>*/}
                                    {/*</td>*/}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className="border border-gray-300 px-4 py-2" colSpan="2">No Events</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
