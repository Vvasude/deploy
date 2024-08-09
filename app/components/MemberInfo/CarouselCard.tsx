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
    // address: string;
    type: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ firstName, lastName, logo, type }) => {
    const href = `/${type}/${firstName}-${lastName}`;

    return (
        <Link href={href} passHref>
            <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                width: { xs: 120, sm: 140, md: 160, lg: 280 }, // Width adjusted to be small, like a sticky note
                height: { xs: 140, sm: 160, md: 180, lg: 280 }, // Height adjusted accordingly
                cursor: 'pointer',
                border: '2px solid #b3b3b3', // Thinner border to suit the smaller size
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Softer shadow to match the smaller size
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                    transform: 'translateY(-3px)', // Smaller translate for a subtle hover effect
                    boxShadow: '0 4px 8px rgba(0,0,0,0.15)', // Slightly stronger shadow on hover
                },
            }}>

                <CardActionArea sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <CardMedia
                        component="img"
                        image={logo}
                        alt={`${firstName} ${lastName}`}
                        sx={{
                            height: { xs: 150, sm: 180, md: 200 },
                            objectFit: 'contain',
                            margin: '16px',
                        }}
                    />
                    <CardContent sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center', // Vertically centers content
                        alignItems: 'center', // Horizontally centers content
                        padding: { xs: '12px', sm: '16px' },
                        textAlign: 'center', // Ensures text is centered
                    }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                            fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
                        }}>
                            {firstName} {lastName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{
                            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                        }}>

                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
};

export default MemberCard;
