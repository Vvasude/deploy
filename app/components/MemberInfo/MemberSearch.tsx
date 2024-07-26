import React, { useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import { Member } from './types';
import MemberCard from './MemberCard';

interface MemberSearchProps {
    searchQuery: string;
    members: Member[];
}

const MemberSearch: React.FC<MemberSearchProps> = ({ searchQuery, members }) => {
    const options = {
        keys: ['Firstname', 'Lastname', 'phone', 'type', {
            name: 'fullName',
            getFn: (member: Member) => `${member.Firstname} ${member.Lastname}`,
        }],
        threshold: 0.3, // Adjust the threshold as needed
    };

    const fuse = new Fuse(members, options);
    const filteredMembers = searchQuery ? fuse.search(searchQuery).map(result => result.item) : members;

    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (searchQuery && listRef.current) {
            listRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [searchQuery]);

    return (
        <div ref={listRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 p-6">
            {searchQuery &&
                filteredMembers.map((member, index) => (
                    <MemberCard
                        key={index}
                        firstName={member.Firstname}
                        lastName={member.Lastname}
                        logo={member.logo}
                        address={member.address}
                        type={member.type} // Pass the type here
                    />
                ))}
        </div>
    );
};

export default MemberSearch;
