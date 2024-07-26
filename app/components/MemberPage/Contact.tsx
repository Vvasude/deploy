'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ContactProps {
    ccEmail: string;
}

const Contact: React.FC<ContactProps> = ({ ccEmail }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;

        console.log('Form Data:', { firstName, lastName, email, message });
        console.log('Email sent to:', 'vvasude3@uwo.ca');
        console.log('CC:', ccEmail);

        form.submit(); // Proceed with the form submission
    };

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card>
                <CardContent className='justify-center'>
                    <h1 className="text-start text-4xl font-bold mb-2 ml-20 mt-8">Get In Touch</h1>
                    <h3 className="text-center text-2xl from-neutral-400 mb-8">Our Lovely Team Would Love To Hear From You!</h3>
                    <div className="max-w-lg mx-auto">
                        <form
                            className="space-y-4"
                            action="https://formsubmit.co/vvasude3@uwo.ca" // Default action
                            method="POST"
                            onSubmit={handleSubmit} // Attach handleSubmit function
                        >
                            <input type="hidden" name="_cc" value={ccEmail} /> {/* Use ccEmail prop */}
                            <div className="border border-gray-800 rounded-lg p-4">
                                <label htmlFor="firstName" className="block text-lg font-medium text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    placeholder='Please Enter Your First Name Here'
                                    required
                                />
                            </div>
                            <div className="border border-gray-800 rounded-lg p-4">
                                <label htmlFor="lastName" className="block text-lg font-medium text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    placeholder='Please Enter Your Last Name Here'
                                    required
                                />
                            </div>
                            <div className="border border-gray-800 rounded-lg p-4">
                                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    placeholder='Please Enter Your Email Here'
                                    required
                                />
                            </div>
                            <div className="border border-gray-800 rounded-lg p-4">
                                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={3}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    placeholder='Please Enter Your Message Here'
                                    required
                                ></textarea>
                            </div>
                            <div className="flex justify-end p-4">
                                <Button variant="contained" size="large" color="primary" type="submit">
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Contact;
