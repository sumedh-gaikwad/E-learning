import React from "react";
import CountUp from "react-countup";

const NumberCounter = () => {
  return (
    <section>
      <div className="bg-blue-600 text-white  py-12 ">
        <div className="ml-16 mr-16">
          <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center justify-center">
              <p className="text-3xl font-semibold">
                <CountUp start={0} end={898} duration={3} enableScrollSpy={true} scrollSpyDelay={500}/>
              </p>
              <p>Expert tutors</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-3xl font-semibold">
                <CountUp start={0} end={20000} separator=',' suffix="+" duration={3} enableScrollSpy={true}
                scrollSpyDelay={500} />
              </p>
              <p>Hours Content</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-3xl font-semibold">
                <CountUp start={0} end={298} duration={3} enableScrollSpy={true}
                scrollSpyDelay={500} />
              </p>
              <p>Subject and courses</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-3xl font-semibold">
                <CountUp start={0} end={72878} duration={3} separator=',' suffix="+" enableScrollSpy={true}
                scrollSpyDelay={500} />
              </p>
              <p>Active Students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumberCounter;
