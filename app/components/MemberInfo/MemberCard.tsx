'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
                border: '4px solid #b3b3b3', // Lighter, thinner border
                borderRadius: '8px', // Slightly rounded corners
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // 3D shadow effect
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
                            height: { xs: 150, sm: 180, md: 200 }, // Responsive height
                            objectFit: 'contain',
                            margin: '16px',
                        }}
                    />
                    <CardContent sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: { xs: '12px', sm: '16px' }, // Responsive padding
                    }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                            fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' }, // Responsive font size
                        }}>
                            {firstName} {lastName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{
                            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' }, // Responsive font size
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