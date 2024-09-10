import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from '@inertiajs/react';

export default function Show({auth, event}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>

            <div className="py-12">
                <div className="flex justify-center items-center max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="col-span-2">
                                <h1 className={"text-xl"}>{event.name}</h1>
                            </div>

                            <div className={"col-span-2"}>
                                <p>
                                    {event.date}
                                </p>
                            </div>

                            <div className={"col-span-2"}>
                                <p>
                                    {event.description}
                                </p>
                            </div>

                            <div className={"col-span-2"}>
                                <p>Link to website</p>
                                <p>
                                    {event.event_url}
                                </p>
                            </div>

                            <div className={"col-span-2"}>
                                <iframe
                                    src="https://www.google.co.uk/maps/place/Dorchester/@50.7092845,-2.4474325,15z/data=!3m1!4b1!4m6!3m5!1s0x48724238b3c1c9d1:0x7b51bfabb0ae8e7a!8m2!3d50.7111639!4d-2.441181!16zL20vMDFudmNf?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
                                    width="100%"
                                    height="100%"
                                    style={{border: 0}}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Embedded Map"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
