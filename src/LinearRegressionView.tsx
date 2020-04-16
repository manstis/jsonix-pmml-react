import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartVoronoiContainer, ChartLegendOrientation, ChartLegendPosition } from '@patternfly/react-charts';

type Legend = {
    orientation?: ChartLegendOrientation;
    position?: ChartLegendPosition;
}

interface Props {

    legend: Legend;

    m:number;

    c:number;
}

interface State {
}

class LinearRegressionView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div style={{ height: '250px', width: '600px' }}>
                <Chart
                    ariaDesc="Average number of pets"
                    ariaTitle="Line chart example"
                    containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
                    legendData={[{ name: 'Cats' }]}
                    legendOrientation={this.props.legend.orientation}
                    legendPosition={this.props.legend.position}
                    height={250}
                    maxDomain={{ y: 10 }}
                    minDomain={{ y: 0 }}
                    padding={{
                        bottom: 50,
                        left: 50,
                        right: 200, // Adjusted to accommodate legend
                        top: 50
                    }}
                    width={600}
                >
                    <ChartAxis tickValues={[2, 3, 4]} />
                    <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />
                    <ChartGroup>
                        <ChartLine
                            data={[
                                { name: 'Cats', x: '2015', y: 1 },
                                { name: 'Cats', x: '2016', y: 2 },
                                { name: 'Cats', x: '2017', y: 5 },
                                { name: 'Cats', x: '2018', y: 3 }
                            ]}
                        />
                    </ChartGroup>
                </Chart>
            </div>
        )
    }
}

export { LinearRegressionView }