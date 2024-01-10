import React from 'react';
import Title from '../Title';

const Progress = () => {
    return (
        <div className='py-14 lg:py-20 bg-[#FFC629]'>
            <div className="container mx-auto">
                <Title title="Our Leasing Process" position="left" />
                <div className="grid grid-cols-3 gap-10">
                    <div className="">
                        <div className="flex items-center justify-center w-24 h-24 p-2 rounded-full bg-[#FFE287] mb-5"><img src="/images/process_icon_1.svg" alt="" /></div>
                        <h4 className='mb-3 text-lg font-bold'>STEP 1</h4>
                        <p className='text-2xl'>Management agreement & W-9 signed for tax purposes</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Progress;