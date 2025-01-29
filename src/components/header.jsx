import React from 'react';

const Header = () => {
    return (
        <div className="position-relative">
            {/* Image with reduced opacity */}
            <img
                src="/images/coverphoto2.jpg"
                alt="cover"
                className="img-fluid"
                style={{ opacity: 0.8, maxHeight: '300px', width: '100%' }}  // Adjust opacity (0.6) and height
            />

            {/* Text Overlay */}
            <div className="position-absolute top-50 start-50 translate-middle text-center text-light">
                <h1>Optimized Your Meal</h1>
                <p className='mt-3'><small>Select Meal to Add in Week. you will be able to update. modify and change the Meal Weaks</small></p>
            </div>
        </div>
    );
};

export default Header;
