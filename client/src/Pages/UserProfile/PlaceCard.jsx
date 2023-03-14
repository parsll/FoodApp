import React from "react";

const PlaceCard = () => {
  return (
    <>
      <div className="m-auto max-w-4xl sm:w-4/12 md:w-6/12 lg:w-8/12">
        <div className="py-4 text-xl">Booking:</div>
        <div className="">
          <div className="flex flex-col gap-4">
            <div className="cursor relative flex w-max flex-col items-start justify-center rounded-sm border border-primary bg-blue-200 px-4 py-2 text-primary">
             
            </div>

            <div className="cursor relative flex w-max flex-col items-start justify-center rounded-sm border border-primary bg-red-200 px-4 py-2 text-primary">
            
            </div>

            <div className="flex h-32 w-full items-center justify-center rounded-sm border border-primary bg-blue-200">
              NO Booking available
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceCard;
