"use client";

import InfoBox from './Infobox';

type InfoBoxData = {
    color: string;
    heading: string;
    text: string;
    total: number;
    responded: number;
}[];

const infoBoxData: InfoBoxData = [
    {
        color: '#A0B810',
        heading: "Accepted",
        text: "Total",
        total: 40,
        responded: 30,
    },
    {
        color: '#E56721',
        heading: "Rejected",
        text: "Total",
        total: 40,
        responded: 5,
    },
    {
        color: '#2C2634',
        heading: "Not Answered",
        text: "Send a reminder",
        total: 0,
        responded: 5,
    },

];

function List() {
    return (
            <div className="flex gap-3 justify-around items-center">
                {infoBoxData.map((info, index) => (
                    <InfoBox
                        key={index}
                        color={info.color}
                        heading={info.heading}
                        text={info.text}
                        total={info.total}
                        responded={info.responded}
                    />
                ))}
                {/* <InfoBox color="#E56721" heading="Sales" text="Total" total={40} responded={5} />
                <InfoBox color="#2C2634" heading="Sales" text="Total sales for the month" total={0} responded={5} /> */}
            </div>
    )
}

export default List