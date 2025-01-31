"use client";
import PrivacyChoiceform from "../component/privacyform";

export default function Privacychoices(){
    return (
        <main id="wrapper" className="wrapper">
        <section className="privacy_section inner_section">
            <h2 className="subtitle_40">YOUR PRIVACY CHOICES</h2>
            <div className="para_content">
                <p className="para">
                    Depending on where you live, you may have certain privacy rights that apply to your Personal Information or your Consumer Health Data.
                </p>
            </div>
            <div className="para_content">
                <p className="para">
                    California residents, this is your Notice of Right to Opt-out of Sale/Sharing. You may request to exercise their privacy rights under the California law, including directing us to not “sell” or “share” their Personal Information for targeted advertising or other purposes.
                </p>
            </div>
            <div className="para_content">
                <div className="para">
                    To respond to your request to exercise your rights, you must provide sufficient information to allow us to fulfill the request. After submitting a request, we may ask you for additional information to verify your identity. We will only use this information to verify your identity and respond to your request.
                </div>
            </div>
            <div className="para_content">
                <div className="para">
                    You may submit a privacy rights request by:
                </div>
            </div>
            <div className="para_content">
                <ul className="inner_list unOrder_list">
                    <li>
                        <p className="para"><span className="strong">Phone:</span> +1 844- 815- 3731</p>
                    </li>
                    <li>
                        <p className="para"><span className="strong">Email:</span> <a href="mailto:complianceandethicsoffice@lupin.com">complianceandethicsoffice@lupin.com</a></p>
                    </li>
                    <li>
                        <p className="para">
                            <span className="strong">Opt-out Preference Signal:</span>California residents may opt out of third-party 
                            Cookies on the Lupin Website or the Solosec Website by sending an Opt-Out Preference Signal, such as the 
                            Global Privacy Control (GPC) on the browsers or extensions that support such a signal. To download and use 
                            a browser supporting the GPC browser signal, click here: <a href="https://globalprivacycontrol.org/orgs." className="light_link">https://globalprivacycontrol.org/orgs</a>
                        </p>
                        <div className="para_content">
                            <p className="para">If you choose to use the GPC signal, you will need to turn it on for each supported browser or browser you use.</p>
                        </div>
                    </li>
                    <li>
                        <p className="para"><span className="strong">Webform:</span></p>
                        <PrivacyChoiceform />
                    </li>
                </ul>
                <div className="para_content">
                    <p className="para">
                        You may appoint an authorized agent to submit a request on your behalf. If you choose to use an authorized 
                        agent, the authorized agent must provide your signature showing your permission to submit requests on your behalf. 
                        We may deny a request from an authorized agent if we do not have proof that they are authorized by you to act on your
                        behalf.
                    </p>
                </div>
            </div>
        </section>
    </main>
    )
}