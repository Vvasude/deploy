import React from 'react';

interface AboutUsAndMapSectionProps {
    aboutus: string;
    iframe: string;
}

const formatAboutUsText = (text: string) => {
    return text.split('. ').map((sentence, index) => (
        <p key={index} className="text-start mb-2 text-base sm:text-lg md:text-xl">
            {sentence}.
        </p>
    ));
};

const AboutUsAndMapSection: React.FC<AboutUsAndMapSectionProps> = ({ aboutus, iframe }) => {
    return (
        <div className="w-full max-w-8xl p-4 bg-white mb-8 shadow-lg rounded-lg">
            <h1 className="text-start text-2xl sm:text-3xl md:text-4xl font-bold mb-2 ml-4 sm:ml-8 md:ml-20">
                About Us
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-14 ml-4 sm:ml-8 md:ml-20 max-w-8xl mt-4 bg-white">
                <div>
                    {formatAboutUsText(aboutus)}
                </div>
                <div className="flex justify-center items-center mb-8">
                    <iframe
                        src={iframe}
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="max-w-full md:w-[600px] md:h-[450px]"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default AboutUsAndMapSection;