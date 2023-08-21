import { PureComponent, Fragment } from "react";
// import img3 from '../images/3.png'
import OurService from '../comp/OurService'
import ChooseUs from "../comp/ChooseUs";
// import Sliders from '../comp/Sliders'
import { Helmet } from 'react-helmet';
import FAQ from "../comp/FAQ";
import { Link } from "react-router-dom";

class Service extends PureComponent {
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>Treatments Provided at Dr Vikas Mind Clinic</title>
                    <meta name="description" content="Here are the various Treatments provided at Dr Vikas Mind Clinic." />
                </Helmet>
            
                <div className="Service-hero d-flex justify-content-center">
                    <div className="text-center mt-4 pt-4 mb-4 pb-4 container">
                        <h1 className="mt-4 blue mb-4 pb-4 pt-4">
                        Service 
                        </h1>
                    </div>
                </div>
                {/* <div> */}
                <div className="landingChooseUs">
                <div className="me-2 ms-2">
                    <div className="container" style={{ marginTop: '30px' }} >
                        {/* <img src={img3} alt="#" /> */}
                        {/* </div> */}
                        <p className="text-center">
                            Today, millions suffer silently from some or other form of mental issues like addiction, stress, anxiety and depression.
                            The reason behind, is the social stigma and the harsh criticism patients and families have to bear.
                            Secondly, the unavailability of a special clinic where they can be discreetly heard and provided treatment lacks even today.
                            But not anymore.
                            Break away from the shackles of fear and come to Dr Vikas Mind Clinic.
                            A specialty clinic in West Delhi that treats a wide variety of lifestyle, psychiatric, and neuropsychiatric issues in children, adults and aged people.
                            This specialty clinic is the brainchild of the <Link to='\' >best psychiatrist Delhi</Link> - Dr. Vikas Moun. With over 10 years of experience Dr. Moun, an MD from the prestigious King George's Medical University Lucknow, is a trusted and preferred doctor for many psychiatric and other mental ailments in West Delhi as well as in entire Delhi NCR.
                            His specialty is in de-addiction of various forms - drugs, smoking, pan masala, gutka, social media, pornography, etc.
                            With new-age medical treatment, the clinic is your go-to place for various mental illnesses or disorders, where you can expect discreet, safe, reliable and best treatment to soon walk the path of recovery.
                        </p>
                    </div>
                </div>
                </div>
                {/* Our service slider */}
                <div className="service-our-service" style={{ marginTop: '30px' }}>
                <div className="me-2 ms-2">
                    <div className="container pt-4">
                        <h2 className="white text-center">Our Services</h2>
                        <OurService />
                    </div>
                    </div>
                </div>
                {/* Choose US */}
                <div className='landingChooseUs' style={{ marginTop: '30px' }}>
                <div className="me-2 ms-2">
                    <div className="container">
                        <h3 className=" blue text-center">
                            What <span className="green"> we assure </span>
                        </h3>
                        <ChooseUs />
                    </div>
                    </div>
                </div>

                {/*  client says */}


                {/* <div className='landingClientSays'>
                    <div className="container mt-4">
                        <div className="text-hero-bold text-center">
                            What our <span> clients says</span>
                        </div>
                        <Sliders />
                    </div>
                </div> */}
                {/* FAQ */}

                {/* <FAQ /> */}
            </Fragment>
        )
    }
}
export default Service;