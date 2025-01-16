import React, { useEffect, useState } from 'react';
import RecentContactCard from '../../components/RecentContactCard'
import useApiService from '../../services/ApiServices';


"use client";
import { useErrorBoundary } from "react-error-boundary";

export default function RecentContacts() {


    const { showBoundary } = useErrorBoundary();

    const { postAPI } = useApiService();

    const [recentContacts, setRecentContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetchRecentContacts();

    }, []);

    const fetchRecentContacts = async () => {

        try {

            setIsLoading(true);

            const authToken = localStorage.getItem("Tokenobject");

            const Tokenobject = JSON.parse(authToken);


            const customHeaders = {
                TokenAuthentication: Tokenobject?.Token,
                pageNumber: 0,
                pageSize: 5,
            };

            const raw = JSON.stringify({
                recentContactType: null,
                ContactCount: null,
                SinceDate: null,
                ReturnType: null,
            });

            const response = await postAPI("/RecentContactAccount", customHeaders, raw);

            if (response?.Success) {

                // console.log(response?.Data)
                // console.log(response?.Data[0].Account.Name)

                setRecentContacts(response?.Data)

            } else {
                throw new Error('Something went wrong');
            }



        } catch (e) {
            console.error('something went wrong');
            showBoundary(e);
        } finally {
            setIsLoading(false);
        }




    }




    // const recentContactsData = [
    //     {
    //         name: 'Vrund',
    //         organization: 'Sprigstack',
    //         imageUrl: 'https://via.placeholder.com/50',
    //     },
    //     {
    //         name: 'Sneh',
    //         organization: 'Sprigstack',
    //         imageUrl: 'https://via.placeholder.com/50',
    //     },
    //     {
    //         name: 'Jon Doe',
    //         organization: 'Google',
    //         imageUrl: 'https://via.placeholder.com/50',
    //     },
    //     {
    //         name: 'Jane Doe',
    //         organization: 'Microsoft',
    //         imageUrl: 'https://via.placeholder.com/50',
    //     },
    //     {
    //         name: 'Lance',
    //         organization: 'Fedco',
    //         imageUrl: 'https://via.placeholder.com/50',
    //     },
    // ];


    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    return (
        <>

            <div>
                <h5>Recent Contacts</h5>
            </div>
            {recentContacts.map((contact, index) => (
                <RecentContactCard
                    key={index}
                    name={`${contact.FirstName} ${contact.LastName}`}
                    company={contact.Account.Name}
                />
            ))}
        </>
    );
}
