import { withJsonix, withCXML } from "./unmarshall/unmarshaller";
import * as PMML from "./generated/www.dmg.org/PMML-4_4";

const xml: string = "<PMML xmlns='http://www.dmg.org/PMML-4_4' version='4.4'> \
<Header copyright='DMG.org'/> \
<DataDictionary numberOfFields='4'> \
  <DataField name='age' optype='continuous' dataType='double'/> \
  <DataField name='salary' optype='continuous' dataType='double'/> \
  <DataField name='car_location' optype='categorical' dataType='string'> \
    <Value value='carpark'/> \
    <Value value='street'/> \
  </DataField> \
  <DataField name='number_of_claims' optype='continuous' dataType='integer'/> \
</DataDictionary> \
<RegressionModel modelName='Sample for linear regression' functionName='regression' algorithmName='linearRegression' targetFieldName='number_of_claims'> \
  <MiningSchema> \
    <MiningField name='age'/> \
    <MiningField name='salary'/> \
    <MiningField name='car_location'/> \
    <MiningField name='number_of_claims' usageType='target'/> \
  </MiningSchema> \
  <RegressionTable intercept='132.37'> \
    <NumericPredictor name='age' exponent='1' coefficient='7.1'/> \
    <NumericPredictor name='salary' exponent='1' coefficient='0.01'/> \
    <CategoricalPredictor name='car_location' value='carpark' coefficient='41.1'/> \
    <CategoricalPredictor name='car_location' value='street' coefficient='325.03'/> \
  </RegressionTable> \
</RegressionModel> \
</PMML>";

//Un-typed marshalling
const pmml = withJsonix(xml).then((doc: any) => {
  console.log("With jsonix");
  console.log("-----------");
  console.log("Header=" + JSON.stringify(doc.value.header.c, null, " "));
  console.log("RegressionModel=" + JSON.stringify(doc.value.anomalyDetectionModelOrAssociationModelOrBayesianNetworkModel[0], null, " "));
});

//Typed marshalling
withCXML(xml).then((doc: PMML.document) => {
  console.log("With CXML");
  console.log("---------");
  console.log("Header=" + JSON.stringify(doc.PMML.Header, null, " "));
  console.log("RegressionModel=" + JSON.stringify(doc.PMML.RegressionModel, null, " "));
});
