import React from 'react';

interface AboutUsAndMapSectionProps {
    aboutus: string;
    iframe: string;
}

const formatAboutUsText = (text: string) => {
    return text.split('. ').map((sentence, index) => (
        <p key={index} className="text-start mb-2 text-xl">
            {sentence}.
        </p>
    ));
};

const AboutUsAndMapSection: React.FC<AboutUsAndMapSectionProps> = ({ aboutus, iframe }) => {
    return (
        <div className="w-full max-w-8xl p-4 bg-white mb-8 shadow-lg rounded-lg">
            <h1 className="text-start text-4xl font-bold mb-2 ml-20">About Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 ml-20 max-w-8xl mt-4 bg-white">
                <div>
                    {formatAboutUsText(aboutus)}
                </div>
                <div className="flex justify-center items-center mb-8">
                    <iframe
                        src={iframe}
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="max-w-full"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default AboutUsAndMapSection;
