import React from 'react';
const date = new Date().toISOString().slice(0, 19).replace("T", " ");
const infoAgent = ({data}) => {
    console.log(data);
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {data.civilite} {data.nom} {data.prenom}{" "}
            <small className="text-muted">{"(" + data.num_agent + ")"}</small>{" "}
            {data.date_sortie_organisme && data.date_sortie_organisme < date ? (
              <small className="text-danger">Innactif</small>
            ) : (
              <small className="text-success">Actif</small>
            )}
          </h5>
          <div className="card-text">
            <ul>
              <li>
                <strong>Emploi : </strong>
                {data.libelle_emploi}{" "}
                <small className="text-muted">({data.code_emploi})</small>
              </li>
              <li>
                <strong>Date de naissance : </strong>
                {data.date_naissance}
              </li>
              <li>
                <strong>Nom de naissance : </strong>
                {data.nom_naissance}
              </li>
              <li>
                <strong>Commune de naissance : </strong>
                {data.commune_naissance}
              </li>
              <li>
                <strong>Adresse : </strong>
                {data.num_voie +
                  " " +
                  data.type_voie +
                  " " +
                  data.nom_voie +
                  " " +
                  data.localite +
                  " " +
                  data.code_postal +
                  " " +
                  data.localite}
              </li>
              <li>
                <strong>Date et motif de sortie de l'organisme : </strong>
                {data.date_sortie_organisme
                  ? data.date_sortie_organisme
                  : "Non renseigné"}{" "}
                {data.motif_sortie_organisme
                  ? date.motif_sortie_organisme
                  : "Non renseigné"}
              </li>
              <li>
                <strong>Contrat : </strong>
                {data.contrat}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default infoAgent;