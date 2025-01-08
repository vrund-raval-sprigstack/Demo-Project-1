import React from 'react';
import RecentContacts from './RecentContacts';
import RecentEmails from './RecentEmails';
import ScheduledEmails from './ScheduledEmails';

export default function HomeLayout() {
    return (
        // <div className='container-fluid bg-primary'>Hii</div>


        <div className="container-fluid">
            <div className="row w-100">
                <div className="col-3">
                    <RecentContacts />
                </div>
                <div className="col-4">
                    <RecentEmails />
                </div>
                <div className="col-5">
                    <ScheduledEmails />
                </div>
            </div>
        </div>
    );
}
