import { useState } from 'react';
import loginPage from '../assets/registration/LoginPage.png'


const Products = () => {



    const [zoomed, setZoomed] = useState(false);

    const toggleZoom = () => {
        setZoomed(!zoomed);
    };

    const imageStyle = {
        transition: 'transform 0.3s ease-in-out',
        transform: zoomed ? 'scale(1)' : 'scale(.5)',
    };

    return (
        <div className="bg-white">
            <div className="grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8 mx-0">

                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">Self Register</h2>
                    <p className="mt-4 text-gray-500">
                        To register Digi banking app you need a valid
                        <ul className="list-disc pl-10 mt-5">
                            <li>Account Number that not register to SBL Digibanking.</li>
                            <li>Active Mobile Number</li>
                        </ul>


                    </p>
                </div>
                <div>
                    <img
                        src={loginPage}
                        className="cursor-pointer transition-transform transform hover:scale-105"
                        style={imageStyle}
                        onClick={toggleZoom}
                    />



                </div>
                {/* <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className="rounded-lg bg-gray-100"
                    />
                </div> */}
            </div>
        </div>
    )
}

export default Products