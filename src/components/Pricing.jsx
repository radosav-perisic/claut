import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

const Pricing = () => {
  return (
    <div className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay">Absolute</div>
      <div>
        <div>
          <h2>Pricing</h2>
          <h3>Find the perfect price for your research</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iure
            quod voluptate inventore fugit fuga perferendis exercitationem
            voluptatibus consequatur. Harum quisquam est labore, possimus
            dignissimos numquam quasi repudiandae earum iusto.
          </p>
        </div>
        <div>
          <div>
            <span>Standard</span>
            <div>
                <p>$38<span>/mo</span></p>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div>
                <p><CheckIcon className="w-8 text-green-800 mr-5"/>Lorem, ipsum dolor</p>
                <p><CheckIcon className="w-8 text-green-800 mr-5"/>Lorem, ipsum dolor</p>
                <p><CheckIcon className="w-8 text-green-800 mr-5"/>Lorem, ipsum dolor</p>
                <p><CheckIcon className="w-8 text-green-800 mr-5"/>Lorem, ipsum dolor</p>
                <p><CheckIcon className="w-8 text-green-800 mr-5"/>Lorem, ipsum dolor</p>
                <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
