import React from "react";
import Paper from "@material-ui/core/Paper";
import { Fade } from "@material-ui/core";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";

import styles from "./CompanyCard.module.css";

class CompanyCard extends React.Component {
  state = {
    clicked: false,
    index: 0
  };

  handleClick = (firma, idx) => {
    console.log("clicked", firma, idx);
    const nowState = this.state.clicked;
    this.setState({ clicked: !nowState, index: idx });
  };

  render() {
    return this.props.duomenys.map((firma, idx) => (
      <div
        key={idx}
        style={{
          margin: 15,
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Paper
          style={{ padding: 5, width: 400 }}
          onClick={() => this.handleClick(firma, idx)}
        >
          <div className={styles.h2}>{firma.navn}</div>
          <br />
          Org.nr. {firma.organisasjonsnummer}
          {firma.registrertIMvaregisteret && " MVA"}
          <br />
          {firma.forretningsadresse != undefined &&
            `${firma.forretningsadresse.land}`}
        </Paper>

        <Fade
          in={this.state.clicked && idx === this.state.index ? true : false}
        >
          <Paper
            elevation={4}
            style={{
              position: "fixed",
              top: "35%",
              left: "35%",
              background: "#333333",
              color: "#F5F5F5",
              width: 400,
              height: 250,
              padding: 5
            }}
          >
            <div
              style={{
                position: "absolute",
                right: -10,
                top: -10,
                background: "#333333",
                padding: "5px 10px",
                borderRadius: 4
              }}
              onClick={() => this.setState({ clicked: false })}
            >
              <CancelPresentationIcon color="inherit" fontSize="small" />
            </div>

            <div style={{ width: 250, height: 100 }}>
              <div className={styles.h2}>{firma.navn}</div>
              <div className={styles.key}>Org.nr.:</div>
              <div className={styles.value}>
                {firma.organisasjonsnummer}
                {firma.registrertIMvaregisteret && " MVA"}
              </div>
              <div className={styles.key}>Organisasjonsform:</div>
              <div className={styles.value}>{firma.organisasjonsform.kode}</div>
              <div className={styles.key}>Registreringsdato:</div>{" "}
              <div className={styles.value}>
                {firma.registreringsdatoEnhetsregisteret}
              </div>
              <div className={styles.key}>Adresse:</div>
              <div className={styles.value}>
                {firma.forretningsadresse != undefined &&
                  `${firma.forretningsadresse.adresse}`}
                {firma.forretningsadresse != undefined &&
                  `${firma.forretningsadresse.postnummer}`}{" "}
                {firma.forretningsadresse != undefined &&
                  `${firma.forretningsadresse.poststed}`}
              </div>
              <div className={styles.key}>Ansatte:</div>{" "}
              <div className={styles.value}> {firma.antallAnsatte}</div>
              <br />
              {firma.hjemmeside && "Hjemmeside: " + `${firma.hjemmeside}`}
            </div>
          </Paper>
        </Fade>
      </div>
    ));
  }
}
export default CompanyCard;
