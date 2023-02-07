import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import Retour from '../components/Retour';
import InfoAgent from '../components/InfoAgent';


const Agent = () => {
    const id = useParams();
    const [agent, setAgent] = useState([]);

    
    useEffect(() => {
      getAgent();
    }, []);

    const getAgent = async () => {
        try {

            const response = await fetch(
              "http://localhost:5000/agent/" + id["num_agent"]
            );
            const data = await response.json();
            setAgent(data);
            
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div className="container-fluid">
            <Retour/>
            <h1 className='text-center mt-3 mb-3'>Information sur {agent.nom} {agent.prenom}</h1>
            <InfoAgent data={agent}/>
        </div>
    );
};

export default Agent;