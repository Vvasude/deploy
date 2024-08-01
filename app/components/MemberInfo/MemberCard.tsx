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
    address: string;
    type: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ firstName, lastName, logo, address, type }) => {
    const href = `/${type}/${firstName}-${lastName}`;

    const handleClick = () => {
        console.log(`Address clicked: ${address}`);
    };

    return (
        <Link href={href} passHref>
            <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                cursor: 'pointer',
                border: '4px solid #b3b3b3',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
                },
            }}>
                <CardActionArea sx={{ display: 'flex', flexDirection: 'column', height: '100%' }} onClick={handleClick}>
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
                            {address}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
};

export default MemberCard;
