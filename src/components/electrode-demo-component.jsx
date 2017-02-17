import React from "react";
import { FormattedMessage } from "react-intl";

import styles from "../../src/styles/electrode-demo-component.css";
import messages from "../lang/default-messages";

export default class ElectrodeDemoComponent extends React.Component {
  render() {
    return (
      <div className={styles.someStyle}>
        <FormattedMessage {...messages.editMe} />
      </div>
    );
  }
}

ElectrodeDemoComponent.displayName = "ElectrodeDemoComponent";

ElectrodeDemoComponent.propTypes = {};

ElectrodeDemoComponent.defaultProps = {};
