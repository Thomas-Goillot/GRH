import React, {useEffect,useState} from 'react';
import { NavLink } from 'react-router-dom';

const ListAgent = () => {

    const [agents, setAgents] = useState([]);
    const [nbRowDisplay, setNbRowDisplay] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeStatut, setActiveStatut] = useState(false);

    const getAgent = async () => {
        try {

            const response  = await fetch('http://localhost:5000/agent');
            const data = await response.json();
            setAgents(data);
            
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getAgent();
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }


    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');

    return (
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center justify-content-center">
            <input
              type="range"
              name=""
              id=""
              min="1"
              max={agents.length / 4}
              defaultValue={nbRowDisplay}
              onChange={(e) => setNbRowDisplay(e.target.value)}
            />
            <p className="mb-0 mx-2">{nbRowDisplay}</p>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onChange={(e) =>
                e.target.checked
                  ? setActiveStatut(true)
                  : setActiveStatut(false)
              }
            />
            <label className="form-check-label" for="flexSwitchCheckDefault">
              {activeStatut ? (
                <p className="mb-0 mx-2">Actif</p>
              ) : (
                <p className="mb-0 mx-2">Inactif</p>
              )}
            </label>
          </div>


          <input
            type="search"
            className="form-control w-25"
            name="searchBar"
            id="searchBar"
            placeholder="Rechercher"
            onChange={handleSearch}
          />
        </div>

        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th>Num Agent</th>
              <th>Prénom</th>
              <th>Nom</th>
              <th>Civilite</th>
              <th>Emploi</th>
              <th>Date de naissance</th>
              <th>Adresse</th>
              <th>Statut</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {agents
              .filter((val) => {
                return (
                  val.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  val.prenom.toLowerCase().includes(searchTerm.toLowerCase())
                );
              })
              .slice(0, nbRowDisplay)
              .map((agent) => (
                <tr key={agent.num_agent}>
                  <td>{agent.num_agent}</td>
                  <td>{agent.nom}</td>
                  <td>{agent.prenom}</td>
                  <td>{agent.civilite}</td>
                  <td>{agent.libelle_emploi}</td>
                  <td>{agent.date_naissance}</td>
                  <td>
                    {agent.num_voie +
                      " " +
                      agent.type_voie +
                      " " +
                      agent.nom_voie +
                      " " +
                      agent.localite}
                  </td>
                  <td>
                    {agent.date_sortie_organisme &&
                    agent.date_sortie_organisme < date
                      ? "innactif"
                      : "Actif"}{" "}
                  </td>
                  <td>
                    <NavLink to={"/agent/" + agent.num_agent}>
                      <p>Détails</p>
                    </NavLink>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
};

export default ListAgent;