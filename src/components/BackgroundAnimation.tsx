import React from 'react';
import './BackgroundAnimation.css';

const BackgroundAnimation: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <ul className="circles">
                <li className="ju-reveal"></li>
                <li className="ju-reveal"></li>
                <li className="ju-reveal"></li>
                <li className="ju-reveal"></li>
                <li className="ju-reveal"></li>
                <li className="ju-reveal"></li>
                <li className="ju-reveal"></li>
                <li className="ju-reveal"></li>
                <li className="ju-reveal"></li>
                <li className="ju-reveal"></li>
            </ul>
        </div>
    );
};

export default BackgroundAnimation;
