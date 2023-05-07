import React from 'react';


type Props = {
    title: string;
    value: number;
}

function ProgressBar({title, value}: Props) {
//szükséges refaktorálni -> szebb megoldás a switch case helyett a w-${value}/6
    return (
        <div>
            <span className='text-xl font-[poppins] capitalize'>{title}</span>
            <div className="w-full h-3 bg-blue-200 mt-2 rounded-full">
                {(() => {
                    switch (value) {
                        case 1:
                            return <div
                                className={`h-full  text-center text-xs text-white bg-[#F7AB0A] rounded-full w-1/6`}/>
                        case 2:
                            return <div
                                className={`h-full  text-center text-xs text-white bg-[#F7AB0A] rounded-full w-2/6`}/>
                        case 3:
                            return <div
                                className={`h-full  text-center text-xs text-white bg-[#F7AB0A] rounded-full w-3/6`}/>
                        case 4:
                            return <div
                                className={`h-full  text-center text-xs text-white bg-[#F7AB0A] rounded-full w-4/6`}/>
                        case 5:
                            return <div
                                className={`h-full  text-center text-xs text-white bg-[#F7AB0A] rounded-full w-5/6`}/>
                        case 6:
                            return <div
                                className={`h-full  text-center text-xs text-white bg-[#F7AB0A] rounded-full w-6/6`}/>
                        default:
                            return null;
                    }
                })()}
            </div>
        </div>
    );
}

export default ProgressBar;
