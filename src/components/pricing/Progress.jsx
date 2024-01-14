import React from "react";
import Title from "../Title";

const Progress = () => {
  return (
    <div className="progress py-14 lg:py-20 bg-[#FFC629]">
      <div className="container p-5 mx-auto">
        <Title title="Our Leasing Process" position="left" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-12">
          <div className="progress__item">
            <div className="flex items-center justify-center z-10 relative w-24 h-24 p-2 rounded-full bg-[#FFE287] mb-5">
              <img
                className="w-14 h-14"
                src="/images/process_icon_1.svg"
                alt="progress__item"
              />
            </div>
            <h4 className="mb-3 text-lg font-bold">STEP 1</h4>
            <p className="text-2xl">
              Management agreement & W-9 signed for tax purposes
            </p>
          </div>
          <div className="progress__item">
            <div className="flex items-center justify-center z-10 relative w-24 h-24 p-2 rounded-full bg-[#FFE287] mb-5">
              <img
                className="w-14 h-14"
                src="/images/process_icon_2.svg"
                alt="progress__item"
              />
            </div>
            <h4 className="mb-3 text-lg font-bold">STEP 2</h4>
            <p className="text-2xl">
              Property inspection conducted & inspection report generated
            </p>
          </div>
          <div className="progress__item">
            <span className="progress_item_3"></span>
            <div className="flex items-center justify-center z-10 relative w-24 h-24 p-2 rounded-full bg-[#FFE287] mb-5">
              <img
                className="w-14 h-14"
                src="/images/process_icon_3.svg"
                alt="progress__item"
              />
            </div>
            <h4 className="mb-3 text-lg font-bold">STEP 3</h4>
            <p className="text-2xl">Create repair lists</p>
          </div>
          <div className="progress__item">
            <span className="progress_item_6"></span>
            <div className="flex items-center justify-center z-10 relative w-24 h-24 p-2 rounded-full bg-[#FFE287] mb-5">
              <img
                className="w-14 h-14"
                src="/images/process_icon_6.svg"
                alt="progress__item"
              />
            </div>
            <h4 className="mb-3 text-lg font-bold">STEP 4</h4>
            <p className="text-2xl">Listings photos taken</p>
          </div>
          <div className="progress__item">
            <div className="flex items-center justify-center z-10 relative w-24 h-24 p-2 rounded-full bg-[#FFE287] mb-5">
              <img
                className="w-14 h-14"
                src="/images/process_icon_5.svg"
                alt="progress__item"
              />
            </div>
            <h4 className="mb-3 text-lg font-bold">STEP 5</h4>
            <p className="text-2xl">
              Property posted on all major rental websites
            </p>
          </div>
          <div className="progress__item">
            <div className="flex items-center justify-center z-10 relative w-24 h-24 p-2 rounded-full bg-[#FFE287] mb-5">
              <img
                className="w-14 h-14"
                src="/images/process_icon_4.svg"
                alt="progress__item"
              />
            </div>
            <h4 className="mb-3 text-lg font-bold">STEP 6</h4>
            <p className="text-2xl">Showings conducted</p>
            <span>Scheduled using ShowMojo</span>
          </div>
          <div className="progress__item">
            <div className="flex items-center justify-center z-10 relative w-24 h-24 p-2 rounded-full bg-[#FFE287] mb-5">
              <img
                className="w-14 h-14"
                src="/images/process_icon_7.svg"
                alt="progress__item"
              />
            </div>
            <h4 className="mb-3 text-lg font-bold">STEP 7</h4>
            <p className="text-2xl">Contact HOA</p>
            <span>Provide the realty medics information</span>
          </div>
          <div className="progress__item">
            <div className="flex items-center justify-center z-10 relative w-24 h-24 p-2 rounded-full bg-[#FFE287] mb-5">
              <img
                className="w-14 h-14"
                src="/images/process_icon_8.svg"
                alt="progress__item"
              />
            </div>
            <h4 className="mb-3 text-lg font-bold">STEP 8</h4>
            <p className="text-2xl">Process all applications</p>
            <span>(Background, criminal & credit)</span>
          </div>
          <div className="progress__item">
            <span className="progress_item_3"></span>
            <div className="flex items-center justify-center z-10 relative w-24 h-24 p-2 rounded-full bg-[#FFE287] mb-5">
              <img
                className="w-14 h-14"
                src="/images/process_icon_9.svg"
                alt="progress__item"
              />
            </div>
            <h4 className="mb-3 text-lg font-bold">STEP 9</h4>
            <p className="text-2xl">Identify qualified applicant</p>
            <span>Obtain owner’s final approval</span>
          </div>
          <div className="progress__item">
            <span className="progress_item_6"></span>
            <div className="flex items-center justify-center z-10 relative w-24 h-24 p-2 rounded-full bg-[#FFE287] mb-5">
              <img
                className="w-14 h-14"
                src="/images/process_icon_11.svg"
                alt="progress__item"
              />
            </div>
            <h4 className="mb-3 text-lg font-bold">STEP 10</h4>
            <p className="text-2xl">Collect 1st month’s rent</p>
          </div>
          <div className="progress__item">
            <div className="flex items-center justify-center z-10 relative w-24 h-24 p-2 rounded-full bg-[#FFE287] mb-5">
              <img
                className="w-14 h-14"
                src="/images/process_icon_10.svg"
                alt="progress__item"
              />
            </div>
            <h4 className="mb-3 text-lg font-bold">STEP 11</h4>
            <p className="text-2xl">Tenant intiates utilities</p>
            <span>Provides account numbers as proof</span>
          </div>
          <div className="progress__item">
            <div className="flex items-center justify-center z-10 relative w-24 h-24 p-2 rounded-full bg-[#FFE287] mb-5">
              <img
                className="w-14 h-14"
                src="/images/process_icon_10.svg"
                alt="progress__item"
              />
            </div>
            <h4 className="mb-3 text-lg font-bold">STEP 12</h4>
            <p className="text-2xl">Collect security deposit</p>
            <span>Put deposit in Escrow account</span>
          </div>
          <div className="progress__item">
            <div className="flex items-center justify-center z-10 relative w-24 h-24 p-2 rounded-full bg-[#FFE287] mb-5">
              <img
                className="w-14 h-14"
                src="/images/process_icon_12.svg"
                alt="progress__item"
              />
            </div>
            <h4 className="mb-3 text-lg font-bold">STEP 13</h4>
            <p className="text-2xl">Ensure tenant’s move in without issue</p>
          </div>
          <div className="progress__item">
            <div className="flex items-center justify-center z-10 relative w-24 h-24 p-2 rounded-full bg-[#FFE287] mb-5">
              <img
                className="w-14 h-14"
                src="/images/process_icon_13.svg"
                alt="progress__item"
              />
            </div>
            <h4 className="mb-3 text-lg font-bold">STEP 14</h4>
            <p className="text-2xl">
              Provide tenants all necessary documentation
            </p>
          </div>
          <div className="progress__item">
            <div className="flex items-center justify-center z-10 relative w-24 h-24 p-2 rounded-full bg-[#FFE287] mb-5">
              <img
                className="w-14 h-14"
                src="/images/process_icon_14.svg"
                alt="progress__item"
              />
            </div>
            <h4 className="mb-3 text-lg font-bold">STEP 15</h4>
            <p className="text-2xl">Ongoing management process</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
