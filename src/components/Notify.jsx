import { CheckIcon } from "@heroicons/react/outline";
import React from "react";

const Notify = () => {
  return (
    <div name="platforms" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">
          All-Inclusive Platform
        </h2>
        <p className="text-2xl py-8 text-gray-500 text-center">
          {" "}
          Our all-inclusive platform empowers businesses to streamline their
          cloud management
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Security Alerts</h3>
              <p className="text-lg pt-2 pb-4">
                {" "}
                Stay on top of any potential security threats with real-time
                alerts
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Performance Insights</h3>
              <p className="text-lg pt-2 pb-4">
                {" "}
                et actionable insights into how your apps are performing in
                real-time
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Billing Updates</h3>
              <p className="text-lg pt-2 pb-4">
                {" "}
                Keep track of your cloud spending and receive updates on any
                changes
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Service Maintenance</h3>
              <p className="text-lg pt-2 pb-4">
                {" "}
                Stay informed about any scheduled maintenance or downtime
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Resource Recommendations</h3>
              <p className="text-lg pt-2 pb-4">
                {" "}
                eceive personalized recommendations to optimize your cloud usage
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">API Usage Reports</h3>
              <p className="text-lg pt-2 pb-4">
                {" "}
                Keep track of your API usage and get detailed reports for
                analysis
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Dashboard Changes</h3>
              <p className="text-lg pt-2 pb-4">
                {" "}
                Be notified of any changes or updates made to your custom
                dashboards
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Account Management</h3>
              <p className="text-lg pt-2 pb-4">
                {" "}
                Get updates on any changes to your account, billing, and access
                control
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notify;
