import React from 'react';
import { Chart, ChartAxis, ChartGroup, ChartLine, ChartVoronoiContainer } from '@patternfly/react-charts';

class Line {
    //y=mx+c
    m: number = 0;
    c: number = 0;
    title: string = "";
}

type Props = {
    modelName: string
    width?: number
    height?: number
    lines: Line[]
}

type State = {
}

class LinearRegressionView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    private roundedToFixed(_float: number, _digits: number) {
        var rounded = Math.pow(10, _digits);
        return (Math.round(_float * rounded) / rounded).toFixed(_digits);
    }

    render() {
        const modelName: string = this.props.modelName;
        const width: number = this.props.width === undefined ? 800 : this.props.width;
        const height: number = this.props.height === undefined ? 800 : this.props.height;
        const independentAxisTitle: string = "age";
        const dependentAxisTitle: string = "number of claims";

        const legendData: any = [];
        this.props.lines.forEach(line => {
            legendData.push({ name: line.title });
        });

        const minDomain: number = 0;
        const maxDomain: number = Math.max(...this.props.lines.map(line => line.c)) * 2;

        return (
            <div style={{ height: height, width: width }}>
                <Chart
                    ariaTitle={modelName}
                    containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} constrainToVisibleArea />}
                    legendData={legendData}
                    legendOrientation="horizontal"
                    legendPosition="bottom"
                    maxDomain={{ y: maxDomain }}
                    minDomain={{ y: minDomain }}
                    padding={{
                        bottom: 100,
                        left: 50,
                        right: 50,
                        top: 50
                    }}
                    height={height}
                    width={width}
                >
                    <ChartAxis label={independentAxisTitle} showGrid tickValues={[-100, -50, 0, 50, 100]} />
                    <ChartAxis label={dependentAxisTitle} dependentAxis showGrid tickValues={[0, maxDomain * 0.25, maxDomain * 0.5, maxDomain * 0.75, maxDomain]} tickFormat={(x) => this.roundedToFixed(x, 2)} />
                    <ChartGroup>
                        {this.props.lines.map((line) => {
                            return <ChartLine
                                data={[
                                    { name: line.title, x: -100, y: -100 * line.m + line.c },
                                    { name: line.title, x: 0, y: line.c },
                                    { name: line.title, x: 100, y: 100 * line.m + line.c }
                                ]}
                            />
                        })}
                    </ChartGroup>
                </Chart>
            </div>
        )
    }

}

export { LinearRegressionView, Line }