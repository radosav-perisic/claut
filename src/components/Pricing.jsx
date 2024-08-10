import { useState } from "react";
import { CheckIcon, InformationCircleIcon, XIcon } from "@heroicons/react/outline";

const Pricing = () => {
  const [showInfo, setShowInfo] = useState(null);

  const featureTitles = {
    "basic-features": "Basic Features",
    "limited-api": "Limited API Calls",
    "email-support": "Email Support Only",
    "no-encryption": "No Data Encryption",
    "no-branding": "No Custom Branding",
    "advanced-features": "Advanced Features",
    "unlimited-api": "Unlimited API Calls",
    "support": "24/7 Multi-Language Support",
    "encryption": "Data Encryption Included",
    "branding": "Custom Branding Available",
    "ai-analytics": "AI-Powered Security Analytics",
    "full-api": "Full-Suite API Access",
    "priority-support": "Priority 24/7 Support",
    "advanced-encryption": "Advanced Data Encryption",
    "compliance": "Global Compliance Suite",
    "white-labeling": "Custom Branding & White-Labeling",
    "multi-cloud": "Advanced Multi-Cloud Support",
    "backup-recovery": "Automated Backup & Disaster Recovery",
    "threat-intelligence": "Threat Intelligence Integration",
    "security-policies": "Customizable Security Policies",
    "cloud-resources": "Dedicated Cloud Resources"
  };

  const featureDetails = {
    "basic-features": "Includes essential tools and services necessary for basic cloud management. This covers core functionalities like resource monitoring, simple scaling options, and basic security protocols to ensure smooth cloud operations for smaller or less complex environments.",
    "limited-api": "The plan provides a restricted number of API calls per month, suitable for smaller projects or businesses that do not require extensive API interactions. This limitation helps manage costs while still offering sufficient API access for essential operations.",
    "email-support": "Support is provided exclusively through email, with responses typically within 24-48 hours. This is suitable for non-urgent inquiries and standard troubleshooting, ensuring that all issues are addressed in a timely manner via asynchronous communication.",
    "no-encryption": "Data within the cloud environment is not encrypted under this plan. This might be appropriate for non-sensitive data or internal use cases where encryption is not a critical requirement. However, it is recommended to upgrade to a plan with encryption for any sensitive or regulated data.",
    "no-branding": "The cloud management interface and related materials cannot be customized with your company’s branding. All interfaces will use the default branding provided by the service, which may be less desirable for businesses that want to maintain a consistent brand identity across all customer-facing tools.",
    "advanced-features": "Provides access to more sophisticated tools and functionalities that enhance cloud management capabilities. These may include advanced security measures, automated scaling, in-depth analytics, and more flexible resource management options, tailored for medium to large enterprises.",
    "unlimited-api": "Allows for an unlimited number of API requests, ensuring that large-scale operations or highly dynamic applications can operate without restrictions. This is ideal for businesses that rely heavily on API interactions for continuous integration, automation, or real-time data processing.",
    "support": "Provides round-the-clock support in multiple languages, ensuring that users from different regions can receive assistance in their native language at any time. This level of support is crucial for global operations, allowing businesses to resolve issues quickly and efficiently, regardless of time zone or language barriers.",
    "encryption": "Ensures that all data stored and transmitted within the cloud environment is encrypted using industry-standard encryption protocols. This feature is essential for protecting sensitive information and complying with various data protection regulations, providing peace of mind that your data is secure from unauthorized access.",
    "branding": "Allows businesses to customize the cloud management interface and associated materials with their own branding. This includes the ability to add logos, choose color schemes, and apply other brand elements, ensuring a consistent and professional appearance that aligns with your company's identity across all user interactions.",
    "ai-analytics": "Advanced AI-driven analytics that provide real-time insights into security threats and vulnerabilities. The system learns from past incidents to predict and prevent future attacks.",
    "full-api": "Unlimited API calls with access to advanced endpoints, allowing for deeper integration with existing tools and platforms.",
    "priority-support": "Dedicated account manager with 24/7 priority support, including phone, email, and live chat. This tier also includes quarterly personalized security reviews and consultations.",
    "advanced-encryption": "Military-grade encryption for data at rest and in transit, with custom encryption keys and enhanced security protocols to meet the highest industry standards.",
    "compliance": "Full compliance management with automated updates for global regulations (e.g., GDPR, CCPA, HIPAA). Includes detailed compliance reports and audit trails.",
    "white-labeling": "Full white-labeling capabilities for branding the cloud management interface and reports, making it a seamless extension of your business.",
    "multi-cloud": "Seamless management of security across multiple cloud providers, with unified dashboards and automated policy enforcement.",
    "backup-recovery": "Enhanced backup options with faster recovery times, automated failover, and regular disaster recovery drills to ensure business continuity.",
    "threat-intelligence": "Real-time integration with global threat intelligence networks, providing updates and alerts on emerging threats as they happen.",
    "security-policies": "Advanced customization options for security policies, allowing businesses to tailor their security posture to meet specific organizational needs.",
    "cloud-resources": "Guaranteed dedicated cloud resources for enhanced performance and reliability, ensuring that your security operations are never compromised by resource limitations."
  };

  const handleInfoClick = (feature) => {
    setShowInfo(feature === showInfo ? null : feature);
  };

  return (
    <div name="pricing" className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-[#140e25] absolute mix-blend-overlay"></div>
      <div className="max-w-[1240px] mx-auto py-12 relative">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl font-bold text-white py-8">
            Find the perfect price for your research
          </h3>
          <p className="text-3xl">
            Our pricing plans are designed to fit the needs of researchers of
            all sizes. Choose from our flexible monthly or annual plans, or
            contact us to discuss a custom plan that fits your specific research
            needs. With our transparent pricing and no hidden fees, you can
            trust that you're getting the perfect price for your research.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Standard Plan */}
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative flex flex-col">
            <span className="py-1 px-3 uppercase bg-violet-200 text-purple-900 rounded-2xl text-sm w-max">
              Standard
            </span>
            <div className="mt-4">
              <p className="text-6xl flex py-4 font-bold">
                $38
                <span className="flex flex-col text-xl text-slate-500 justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-4 text-slate-500 flex-grow">
              Affordable cloud management services
            </p>
            <div className="text-xl mb-4 flex-grow">
              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckIcon className="w-6 text-green-500 mr-3" />
                    <span>Basic features included</span>
                  </div>
                  <InformationCircleIcon
                    className="w-6 text-blue-500 cursor-pointer"
                    onClick={() => handleInfoClick("basic-features")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckIcon className="w-6 text-green-500 mr-3" />
                    <span>Limited API calls</span>
                  </div>
                  <InformationCircleIcon
                    className="w-6 text-blue-500 cursor-pointer"
                    onClick={() => handleInfoClick("limited-api")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckIcon className="w-6 text-green-500 mr-3" />
                    <span>Email support only</span>
                  </div>
                  <InformationCircleIcon
                    className="w-6 text-blue-500 cursor-pointer"
                    onClick={() => handleInfoClick("email-support")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <XIcon className="w-6 text-red-500 mr-3" />
                    <span>No data encryption</span>
                  </div>
                  <InformationCircleIcon
                    className="w-6 text-blue-500 cursor-pointer"
                    onClick={() => handleInfoClick("no-encryption")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <XIcon className="w-6 text-red-500 mr-3" />
                    <span>No custom branding</span>
                  </div>
                  <InformationCircleIcon
                    className="w-6 text-blue-500 cursor-pointer"
                    onClick={() => handleInfoClick("no-branding")}
                  />
                </div>
              </div>
            </div>
            <button className="w-full py-3 mt-auto bg-purple-600 text-white rounded-lg hover:bg-purple-700 duration-300">
              Subscribe
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative flex flex-col">
            <span className="py-1 px-3 uppercase bg-violet-200 text-purple-900 rounded-2xl text-sm w-max">
              Premium
            </span>
            <div className="mt-4">
              <p className="text-6xl flex py-4 font-bold">
                $78
                <span className="flex flex-col text-xl text-slate-500 justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-4 text-slate-500 flex-grow">
              Comprehensive cloud management services
            </p>
            <div className="text-xl mb-4 flex-grow">
              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckIcon className="w-6 text-green-500 mr-3" />
                    <span>Advanced features included</span>
                  </div>
                  <InformationCircleIcon
                    className="w-6 text-blue-500 cursor-pointer"
                    onClick={() => handleInfoClick("advanced-features")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckIcon className="w-6 text-green-500 mr-3" />
                    <span>Unlimited API calls</span>
                  </div>
                  <InformationCircleIcon
                    className="w-6 text-blue-500 cursor-pointer"
                    onClick={() => handleInfoClick("unlimited-api")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckIcon className="w-6 text-green-500 mr-3" />
                    <span>24/7 multi-language support</span>
                  </div>
                  <InformationCircleIcon
                    className="w-6 text-blue-500 cursor-pointer"
                    onClick={() => handleInfoClick("support")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckIcon className="w-6 text-green-500 mr-3" />
                    <span>Data encryption included</span>
                  </div>
                  <InformationCircleIcon
                    className="w-6 text-blue-500 cursor-pointer"
                    onClick={() => handleInfoClick("encryption")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckIcon className="w-6 text-green-500 mr-3" />
                    <span>Custom branding available</span>
                  </div>
                  <InformationCircleIcon
                    className="w-6 text-blue-500 cursor-pointer"
                    onClick={() => handleInfoClick("branding")}
                  />
                </div>
              </div>
            </div>
            <button className="w-full py-3 mt-auto bg-purple-600 text-white rounded-lg hover:bg-purple-700 duration-300">
              Subscribe
            </button>
          </div>

          {/* Enterprise Plus Plan */}
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative flex flex-col">
            <span className="py-1 px-3 uppercase bg-violet-200 text-purple-900 rounded-2xl text-sm w-max">
              Enterprise Plus
            </span>
            <div className="mt-4">
              <p className="text-6xl flex py-4 font-bold">
                $128
                <span className="flex flex-col text-xl text-slate-500 justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-4 text-slate-500">
              Premium cloud security and compliance management
            </p>
            <div className="text-xl mb-4 flex-grow">
              {/* Features List with Scroll */}
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckIcon className="w-6 text-green-500 mr-3" />
                    <span>AI-Powered Security Analytics</span>
                  </div>
                  <InformationCircleIcon
                    className="w-6 text-blue-500 cursor-pointer flex-shrink-0"
                    onClick={() => handleInfoClick("ai-analytics")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckIcon className="w-6 text-green-500 mr-3" />
                    <span>Full-Suite API Access</span>
                  </div>
                  <InformationCircleIcon
                    className="w-6 text-blue-500 cursor-pointer flex-shrink-0"
                    onClick={() => handleInfoClick("full-api")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckIcon className="w-6 text-green-500 mr-3" />
                    <span>Priority 24/7 Support</span>
                  </div>
                  <InformationCircleIcon
                    className="w-6 text-blue-500 cursor-pointer flex-shrink-0"
                    onClick={() => handleInfoClick("priority-support")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckIcon className="w-6 text-green-500 mr-3" />
                    <span>Advanced Data Encryption</span>
                  </div>
                  <InformationCircleIcon
                    className="w-6 text-blue-500 cursor-pointer flex-shrink-0"
                    onClick={() => handleInfoClick("advanced-encryption")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckIcon className="w-6 text-green-500 mr-3" />
                    <span>Global Compliance Suite</span>
                  </div>
                  <InformationCircleIcon
                    className="w-6 text-blue-500 cursor-pointer flex-shrink-0"
                    onClick={() => handleInfoClick("compliance")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckIcon className="w-6 text-green-500 mr-3" />
                    <span>Custom Branding & White-Labeling</span>
                  </div>
                  <InformationCircleIcon
                    className="w-6 text-blue-500 cursor-pointer flex-shrink-0"
                    onClick={() => handleInfoClick("white-labeling")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckIcon className="w-6 text-green-500 mr-3" />
                    <span>Advanced Multi-Cloud Support</span>
                  </div>
                  <InformationCircleIcon
                    className="w-6 text-blue-500 cursor-pointer flex-shrink-0"
                    onClick={() => handleInfoClick("multi-cloud")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckIcon className="w-6 text-green-500 mr-3" />
                    <span>Automated Backup & Disaster Recovery</span>
                  </div>
                  <InformationCircleIcon
                    className="w-6 text-blue-500 cursor-pointer flex-shrink-0"
                    onClick={() => handleInfoClick("backup-recovery")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckIcon className="w-6 text-green-500 mr-3" />
                    <span>Threat Intelligence Integration</span>
                  </div>
                  <InformationCircleIcon
                    className="w-6 text-blue-500 cursor-pointer flex-shrink-0"
                    onClick={() => handleInfoClick("threat-intelligence")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckIcon className="w-6 text-green-500 mr-3" />
                    <span>Customizable Security Policies</span>
                  </div>
                  <InformationCircleIcon
                    className="w-6 text-blue-500 cursor-pointer flex-shrink-0"
                    onClick={() => handleInfoClick("security-policies")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckIcon className="w-6 text-green-500 mr-3" />
                    <span>Dedicated Cloud Resources</span>
                  </div>
                  <InformationCircleIcon
                    className="w-6 text-blue-500 cursor-pointer flex-shrink-0"
                    onClick={() => handleInfoClick("cloud-resources")}
                  />
                </div>
              </div>
            </div>
            <button className="w-full py-3 mt-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Modal */}
        {showInfo && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-lg w-full">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {featureTitles[showInfo]}
              </h3>
              <p className="text-lg text-slate-700">
                {featureDetails[showInfo]}
              </p>
              <button
                className="mt-6 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                onClick={() => setShowInfo(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pricing;