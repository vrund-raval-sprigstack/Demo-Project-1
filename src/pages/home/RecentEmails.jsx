import React, { useState, useEffect } from 'react';
import IconCard from '../../components/IconCard';
import RecentEmailCard from '../../components/RecentEmailCard';
import useApiService from '../../services/ApiServices';
import FadeLoader from "react-spinners/FadeLoader";

export default function RecentEmails() {

    const { postAPI } = useApiService();


    const [recentEmails, setRecentEmails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [todaysEmailCount, setTodaysEmailCount] = useState(0);
    const [thisWeekEmailCount, setThisWeekEmailCount] = useState(0);
    const [thisMonthEmailCount, setThisMonthEmailCount] = useState(0);

    useEffect(() => {


        fetchRecentEmails();
    }, []);

    const fetchRecentEmails = async () => {

        try {

            setIsLoading(true);



            const authToken = localStorage.getItem("Tokenobject");

            const Tokenobject = JSON.parse(authToken);

            const raw = JSON.stringify({
                MarketingEmailType: "sent",
            });

            const customHeaders = {
                TokenAuthentication: Tokenobject?.Token,
                pageNumber: 0,
                pageSize: 5,
            };

            const response = await postAPI(
                "/Dashboard/GetEmaildata",
                customHeaders,
                raw
            );

            if (response?.Success) {
                console.log(response?.Data.Emails[0]);
                console.log(response?.Data.Emails[0].fromName);


                setRecentEmails(response?.Data.Emails);

                setTodaysEmailCount(response?.Data.TodayCount);
                setThisWeekEmailCount(response?.Data.ThisWeekCount);
                setThisMonthEmailCount(response?.Data.ThisMonthCount);


            } else {
                throw new Error('Something went wrong');
            }



        } catch (e) {
            console.error(e.message);
            showBoundary(e);
        } finally {
            setIsLoading(false);
        }


    };


    const formatDate = (dateString) => {
        const date = new Date(dateString);

        // Options for formatting
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true, // To show time in 12-hour format (with AM/PM)
        };

        // Format the date
        const formattedDate = date.toLocaleString('en-US', options);

        return formattedDate;
    }

    // const emailsList = [
    //     {
    //         id: 1,
    //         sender: "Ayush Jain",
    //         title: "Cybersecurity Risks to Cryptocurrency Exchange Users",
    //         date: "28-08-2024, 05:00 PM",
    //         sendCount: "100",
    //         readCount: "60"
    //     },
    //     {
    //         id: 2,
    //         sender: "James Brown",
    //         title: "Cybersecurity Risks to Cryptocurrency Exchange Users",
    //         date: "28-08-2024, 02:00 PM",
    //         sendCount: "100",
    //         readCount: "60"
    //     },
    //     {
    //         id: 3,
    //         sender: "Emma Miller",
    //         title: "Cybersecurity Risks to Cryptocurrency Exchange Users",
    //         date: "27-08-2024, 08:00 PM",
    //         sendCount: "100",
    //         readCount: "60"
    //     },
    //     {
    //         id: 4,
    //         sender: "Jane Robinson",
    //         title: "Cybersecurity Risks to Cryptocurrency Exchange Users",
    //         date: "27-08-2024, 05:00 PM",
    //         sendCount: "100",
    //         readCount: "60"
    //     }
    // ];

    return (
        <div className="card tw-border tw-border-gray-300 tw-rounded-xl">
            <div className="card-body tw-px-5">
                {/* Header section */}
                <div className="d-flex justify-content-between align-items-center mb-3 ">

                    <div className='tw-text-lg tw-font-medium primary-color-text'>
                        Recent Emails
                    </div>
                    <a href="#" className="text-primary text-decoration-underline tw-text-sm tw-font-semibold">View More</a>
                </div>

                {/* Stats section */}
                <div className="d-flex gap-2 mb-2 bg-light rounded">
                    <IconCard label="Today: " value={todaysEmailCount} />
                    <IconCard label="This week: " value={thisWeekEmailCount} />
                    <IconCard label="This month: " value={thisMonthEmailCount} />
                </div>

                {/* Email cards section */}
                <div className="tw-flex tw-flex-col tw-gap-4">
                    {isLoading ? (
                        <div className="tw-flex tw-justify-center tw-items-center tw-h-80">
                            {/* FadeLoader Spinner */}
                            <FadeLoader color="gray" size={50} />
                        </div>
                    ) : (
                        recentEmails.map((email) => (
                            <RecentEmailCard
                                key={email.ID}
                                sender={email.fromName}
                                title={email.subject}
                                date={formatDate(email.executeDate)}
                                sendCount={email.totalSent}
                                readCount={email.uniqueViews}
                            />
                        ))
                    )}
                </div>

            </div>
        </div>
    );
}
