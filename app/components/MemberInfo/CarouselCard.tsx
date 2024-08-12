'use client'
import React from 'react';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface MemberCardProps {
    firstName: string;
    lastName: string;
    logo: string;
    type: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ firstName, lastName, logo, type }) => {
    const href = `/${type}/${firstName}-${lastName}`;

    return (
        <Link href={href} passHref>
            <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                width: { xs: 220, sm: 220, md: 220, lg: 300 }, // Adjusted width
                height: { xs: 220, sm: 220, md: 220, lg: 300 }, // Adjusted height accordingly
                cursor: 'pointer',
                border: '2px solid #b3b3b3',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                // marginRight: { xs: '4px', sm: '6px', md: '8px' }, // Reduced margin to bring cards closer
                '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                },
            }}>
                <CardActionArea sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <CardMedia
                        component="img"
                        image={logo}
                        alt={`${firstName} ${lastName}`}
                        sx={{
                            height: { xs: 80, sm: 100, md: 120 },
                            objectFit: 'contain',
                            // margin: '0 0 0 0', // Adjusted to remove lateral margins
                        }}
                    />
                    <CardContent sx={{
                        flexGrow: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        // padding: { xs: '4px 4px 0 4px', sm: '8px 8px 0 8px' }, // Reduced padding
                        textAlign: 'center',
                    }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                        }}>
                            {firstName} {lastName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{
                            fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
                        }}>
                            {/* Placeholder for additional info */}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
};

export default MemberCard;
