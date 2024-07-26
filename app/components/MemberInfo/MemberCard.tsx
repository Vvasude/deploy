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
    type: string; // Add type here
}

const MemberCard: React.FC<MemberCardProps> = ({ firstName, lastName, logo, address, type }) => {
    const href = `/${type}/${firstName}-${lastName}`; // Ensure this matches the desired routing

    const handleClick = () => {
        console.log(`Address clicked: ${address}`);
    };

    return (
        <Link href={href} passHref>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer' }}>
                <CardActionArea sx={{ display: 'flex', flexDirection: 'column', height: '100%' }} onClick={handleClick}>
                    <CardMedia
                        component="img"
                        image={logo}
                        alt={`${firstName} ${lastName}`}
                        sx={{
                            height: 200,
                            objectFit: 'contain',
                            margin: '16px',
                        }}
                    />
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {firstName} {lastName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {address}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
};

export default MemberCard;
