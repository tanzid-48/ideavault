import { getSinglesIdea } from '@/lib/data';
import React from 'react';

const DetailsPage = async({params})=>{
    const {id} = await params
    const idea = await getSinglesIdea(id);
    return (
        <div>
            <h2>Details Page</h2>
            {
                idea.title
            }
        </div>
    );
};

export default DetailsPage;