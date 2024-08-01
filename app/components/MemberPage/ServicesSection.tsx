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
        <div className="w-full max-w-8xl bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ml-4 sm:ml-8 md:ml-14 text-left">
                Services Provided
            </h1>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)',
                    },
                    gap: 2,
                    maxWidth: '1200px',
                    margin: '0',
                    justifyContent: 'start',  // Aligns the boxes to the left
                    marginLeft: { lg: '60px' }, // Match with header alignment
                }}
            >
                {services.map((service, index) => (
                    <Card key={index} sx={{ minWidth: 280, maxWidth: '100%', margin: '0', justifySelf: 'start' }}>
                        <CardContent>
                            <Typography variant="body1" component="div" className="max-w-lg mx-auto mt-4">
                                <div className="flex items-center space-x-2">
                                    <service.icon size={30} />
                                    <span className='text-base sm:text-lg md:text-xl'>{service.description}</span>
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
