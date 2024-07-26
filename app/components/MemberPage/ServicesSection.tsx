import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconType } from "react-icons";

interface ServiceItem {
    icon: IconType;
    description: string;
}

interface ServicesSectionProps {
    services: ServiceItem[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
    return (
        <div className="w-full max-w-8xl bg-white rounded-lg shadow-xl p-10">
            <h1 className="text-4xl font-bold mb-4 ml-14 text-left">Services Provided</h1>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${services.length}, 1fr)`,
                    gap: 2,
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}
            >
                {services.map((service, index) => (
                    <Card key={index} sx={{ minWidth: 280, maxWidth: 380 }}>
                        <CardContent>
                            <Typography variant="body1" component="div" className="max-w-lg mx-auto mt-4">
                                <div className="flex items-center space-x-2">
                                    <service.icon size={30} />
                                    <span className='text-xl'>{service.description}</span>
                                </div>
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </div>
    );
}

export default ServicesSection;
