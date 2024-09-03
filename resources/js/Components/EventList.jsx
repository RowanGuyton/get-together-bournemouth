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
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Event Page</th>
                </tr>
                </thead>
                <tbody>
                {eventList.length > 0 ? (
                    eventList.map((event, index) => (
                        <tr key={index}>
                            <td>{event.name}</td>
                            <td><a href={event.event_url}>Link</a></td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td>No Events</td>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    );
}
