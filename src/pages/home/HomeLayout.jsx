import React from 'react';
import RecentContacts from './RecentContacts';
import RecentEmails from './RecentEmails';
import ScheduledEmails from './ScheduledEmails';



"use client";
import { ErrorBoundary } from "react-error-boundary";



export default function HomeLayout() {
    return (
        <div className="container-fluid">
            <div className="row w-100">
                <div className="col-3">

                    <ErrorBoundary fallback={<div>Failed to fetch Recent Contacts.</div>}>

                        <RecentContacts />

                    </ErrorBoundary>

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
