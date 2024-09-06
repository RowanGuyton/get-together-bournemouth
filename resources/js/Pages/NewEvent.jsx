import {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';
import TextInput from "@/Components/TextInput.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import axios from "axios";

export default function NewEvent({auth}) {
    // State to store form data
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        description: '',
        event_url: '',
        maps_url: ''
    });

    // Function to handle input changes
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to handle form submission
    const onSubmit = async (e) => {
        e.preventDefault();

        // Creating a new FormData object to send form data as multipart/form-data
        const formPayload = new FormData();
        formPayload.append('name', formData.name);
        formPayload.append('date', formData.date);
        formPayload.append('description', formData.description);
        formPayload.append('event_url', formData.event_url);
        formPayload.append('maps_url', formData.maps_url);

        try {
            // Sending the form data with Axios as a POST request
            const response = await axios.post('/events/create', formPayload, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) {
                alert("Event added successfully!");
            } else {
                alert("Failed to add event.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while adding the event.");
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>

            <div className="py-12">
                <div className="flex justify-center items-center max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <form onSubmit={onSubmit} className="grid grid-cols-2 gap-6">
                            <div className="col-span-1">
                                <InputLabel value={'Event Name'}/>
                                <TextInput
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-span-1">
                                <InputLabel value={'Date'}/>
                                <TextInput
                                    name="date"
                                    type="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-span-1">
                                <InputLabel value={'Description'}/>
                                <TextInput
                                    name="description"
                                    type="text"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-span-1">
                                <InputLabel value={'Website'}/>
                                <TextInput
                                    name="event_url"
                                    type="text"
                                    value={formData.event_url}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-span-1">
                                <InputLabel value={'Map Link'}/>
                                <TextInput
                                    name="maps_url"
                                    type="text"
                                    value={formData.maps_url}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-span-2 flex justify-end">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white shadow-sm"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
