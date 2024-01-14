import React from 'react';
import Title from '../Title';

const ServicesExplained = () => {
    return (
        <div className='py-20'>
            <div className="container p-5 mx-auto">
                <Title title="Leasing Services Explained" />

                <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
                    <div className="p-10 border border-black">
                        <img className='mb-3' src="/icons/services_1.svg" alt="" />
                        <h3 className='text-xl font-bold'>Leasing Fee</h3>
                        <p>Fee charged for placing a new tenant.</p>
                    </div>
                    <div className="p-10 border border-black">
                        <img className='mb-3' src="/icons/services_2.svg" alt="" />
                        <h3 className='text-xl font-bold'>Maintenance Coordination</h3>
                        <p>Repair efforts and coordination between tenants & maintenance team or outside vendors.</p>
                    </div>
                    <div className="p-10 border border-black">
                        <img className='mb-3' src="/icons/services_3.svg" alt="" />
                        <h3 className='text-xl font-bold'>Lease Renewal Fee</h3>
                        <p>Fee charged upon annual lease renewal.</p>
                    </div>
                    <div className="p-10 border border-black">
                        <img className='mb-3' src="/icons/services_4.svg" alt="" />
                        <h3 className='text-xl font-bold'>Monthly Reporting</h3>
                        <p>Monthly statements documenting a rental's income & expenses.</p>
                    </div>
                    <div className="p-10 border border-black">
                        <img className='mb-3' src="/icons/services_5.svg" alt="" />
                        <h3 className='text-xl font-bold'>Annual Market Rent Analysis</h3>
                        <p>Annual analysis performed using comparable rental properties to determine the market value of the unit.</p>
                    </div>
                    <div className="p-10 border border-black">
                        <img className='mb-3' src="/icons/services_6.svg" alt="" />
                        <h3 className='text-xl font-bold'>24/7 Emergency Response</h3>
                        <p>Response service for tenants in the event of a repair emergency or other urgent problems.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesExplained;