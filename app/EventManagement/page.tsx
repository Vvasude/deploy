// pages/RealEstate.tsx
import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Members } from '../components/MemberInfo/Members';
import MemberCard from '../components/MemberInfo/MemberCard';

const RealEstate: React.FC = () => {
    // Filter members whose type is 'RealEstate'
    const realEstateMembers = Members.filter(member => member.type === 'EventManagement');
    return (
        <Grid container spacing={3} justifyContent="center" marginTop={9}>
            {realEstateMembers.map((member, index) => (
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
