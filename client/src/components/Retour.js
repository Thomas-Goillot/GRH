import React from 'react';

const Retour = () => {
    return (
        <div className="d-flex">
            <button className="btn btn-link mr-3 mt-3" onClick={() => window.history.back()}>Retour</button>
        </div>
    );
};

export default Retour;