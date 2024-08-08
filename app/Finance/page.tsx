'use client'
import * as React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Members } from '../components/MemberInfo/Members';
import MemberCard from '../components/MemberInfo/MemberCard';

// Define the Member type
interface Member {
    id: string;
    Firstname: string;
    Lastname: string;
    logo: string;
    address: string;
    type: string;
    phone: string;
    email: string;
    website: string;
    iframe: string;
    aboutus: string;
    sectionItem1: string;
    sectionItem2: string;
    sectionItem3: string;
}

const RealEstate: React.FC = () => {
    // Initialize the state with the correct type
    const [shuffledMembers, setShuffledMembers] = useState<Member[]>([]);

    // Shuffle the members array with typed parameter
    const shuffleArray = (array: Member[]): Member[] => {
        const shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    useEffect(() => {
        // Filter members whose type is 'RealEstate'
        const realEstateMembers = Members.filter(member => member.type === 'Finance');
        setShuffledMembers(shuffleArray(realEstateMembers));
    }, []); // Only run this effect once when the component mounts

    return (
        <Grid container spacing={3} justifyContent="center" marginTop={9}>
            {shuffledMembers.map((member, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                    <MemberCard
                        firstName={member.Firstname}
                        lastName={member.Lastname}
                        logo={member.logo}
                        address={member.address}
                        type={member.type}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default RealEstate;
