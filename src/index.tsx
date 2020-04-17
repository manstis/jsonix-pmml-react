import React from 'react';
import ReactDOM from 'react-dom';
import LinearRegressionHandler from './LinearRegressionHandler';
import { withCXML } from "./unmarshall/unmarshaller";
import * as PMML from "./generated/www.dmg.org/PMML-4_4";
import { example1, example2, example3 } from "./example"

//Typed marshalling
withCXML(example1).then((doc: PMML.document) => {
  if (doc.PMML.RegressionModel !== undefined) {
    if (doc.PMML.RegressionModel[0] !== undefined) {
      ReactDOM.render(
        <React.StrictMode>
          <LinearRegressionHandler model={doc.PMML.RegressionModel[0]} />
        </React.StrictMode>,
        document.getElementById('holder1')
      );
    }
  };
});

withCXML(example2).then((doc: PMML.document) => {
  if (doc.PMML.RegressionModel !== undefined) {
    if (doc.PMML.RegressionModel[0] !== undefined) {
      ReactDOM.render(
        <React.StrictMode>
          <LinearRegressionHandler model={doc.PMML.RegressionModel[0]} />
        </React.StrictMode>,
        document.getElementById('holder2')
      );
    }
  };
});

withCXML(example3).then((doc: PMML.document) => {
  if (doc.PMML.RegressionModel !== undefined) {
    if (doc.PMML.RegressionModel[0] !== undefined) {
      ReactDOM.render(
        <React.StrictMode>
          <LinearRegressionHandler model={doc.PMML.RegressionModel[0]} />
        </React.StrictMode>,
        document.getElementById('holder3')
      );
    }
  };
});
