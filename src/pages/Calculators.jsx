import React from 'react';
import Rule503020 from '../components/calculators/Rule503020';

const Calculators = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            <div>
                <h2 className="text-2xl font-bold text-slate-800">Calculadoras</h2>
                <p className="text-slate-500">Ferramentas para te ajudar a tomar melhores decisões financeiras.</p>
            </div>

            <Rule503020 />

            {/* Future calculators can be added here */}
        </div>
    );
};

export default Calculators;
