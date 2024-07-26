import React from 'react';
import { PhoneIcon, MailIcon, LocationMarkerIcon, GlobeAltIcon } from '@heroicons/react/solid';

interface LogoAndContactInfoProps {
    logo: string;
    Firstname: string;
    Lastname: string;
    address: string;
    phone: string;
    email: string;
    website: string;
}

const LogoAndContactInfo: React.FC<LogoAndContactInfoProps> = ({ logo, Firstname, Lastname, address, phone, email, website }) => {
    return (
        <div className="mt-2 p-6 w-full max-w-10xl bg-gradient-to-r from-black via-gray-500 to-black mb-8 shadow-2xl flex justify-center relative overflow-hidden">
            <div className="border-4 border-gray-300 bg-white shadow-lg p-4 flex items-start w-3/5">
                <div className="flex justify-center items-center h-full w-2/5">
                    <div className="rounded-lg overflow-hidden">
                        <img src={logo} alt="Logo" className="h-full w-full object-cover transform" />
                    </div>
                </div>
                <div className="border-r-2 border-black h-full mx-4"></div>
                <div className="flex flex-col justify-start w-2/3 text-gray-900 pl-4 ml-16">
                    <h1 className="text-6xl font-bold mt-4 mb-4 drop-shadow-lg">{Firstname} {Lastname}</h1>
                    <div className="flex items-center mb-2">
                        <LocationMarkerIcon className="h-6 w-6 mr-2 drop-shadow-lg" />
                        <p className="text-xl">{address}</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <PhoneIcon className="h-6 w-6 mr-2 drop-shadow-lg" />
                        <p className="text-xl">{phone}</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <MailIcon className="h-6 w-6 mr-2 drop-shadow-lg" />
                        <p className="text-xl">{email}</p>
                    </div>
                    <div className="flex items-center">
                        <GlobeAltIcon className="h-6 w-6 mr-2 drop-shadow-lg" />
                        <p className="text-xl">
                            <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-yellow-400 transition-colors duration-300">{website}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoAndContactInfo;
