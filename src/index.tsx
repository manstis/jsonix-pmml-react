import React from 'react';
import ReactDOM from 'react-dom';
import LinearRegressionHandler from './LinearRegressionHandler';
import { withCXML } from "./unmarshall/unmarshaller";
import * as PMML from "./generated/www.dmg.org/PMML-4_4";
import xml from "./example"

//Typed marshalling
withCXML(xml).then((doc: PMML.document) => {
  if (doc.PMML.RegressionModel !== undefined) {
    if (doc.PMML.RegressionModel[0] !== undefined) {
      ReactDOM.render(
        <React.StrictMode>
          <LinearRegressionHandler model={doc.PMML.RegressionModel[0]} />
        </React.StrictMode>,
        document.getElementById('holder')
      );
    }
  };
});
