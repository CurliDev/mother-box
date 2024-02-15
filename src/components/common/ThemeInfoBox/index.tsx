import React from 'react';

interface InfoBoxProps {
    color: string;
    text: string;
    heading: string;
    total: number;
    responded: number;
}
// bg-${color}-200
const InfoBox: React.FC<InfoBoxProps> = ({ color, text, heading, total, responded }) => {
    return (
        <div style={{ backgroundColor: `${color}1F` }} className={` w-full max-w-[400px] rounded-lg shadow-md p-6`}>
            <div className='flex justify-between items-center'>
                <div className="flex flex-col items-start justify-start">
                    <div className='flex gap-1 items-center '>

                        <div style={{ backgroundColor: `${color}33` }} className={`flex items-center justify-center w-4 h-4 rounded-full `}>
                            <div style={{ backgroundColor: total === 0 ? 'white' : `${color}` }} className={` w-[10px] h-[10px] rounded-full`}></div>
                        </div>
                        <h2 className=" text-[#2C2634] text-lg font-semibold">{heading}</h2>

                    </div>
                    <div className='flex items-center gap-1'>
                        <span className={`text-[rgba(44,38,52,0.5)] text-sm font-normal`}>{text}</span>
                        <span className={`text-[rgba(44,38,52,0.5)] text-sm font-normal`}>{total === 0 ? '' : total}</span>
                    </div>
                </div>
                <div className='flex items-end justify-end'>
                    <span className="text-[#2C2634] text-6xl font-normal">{responded}</span>
                </div>
            </div >
        </div >
    );
};

export default InfoBox;