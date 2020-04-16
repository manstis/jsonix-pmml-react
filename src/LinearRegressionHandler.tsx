import React from 'react';
import { LinearRegressionView } from './LinearRegressionView'
import { ChartLegendOrientation, ChartLegendPosition } from '@patternfly/react-charts';

interface Props {

}

interface State {
}


class LinearRegressionHandler extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        <LinearRegressionView m={1.0} c={1.0} legend={{ orientation: ChartLegendOrientation.vertical, position: ChartLegendPosition.right }} />
      </div>
    );
  }
}

export default LinearRegressionHandler;