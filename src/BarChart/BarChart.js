import { useData } from './useData';
import { scaleLinear, max, scaleBand, format } from 'd3';
//parts
import { Marks } from './parts/Marks';
import { AxisLeft } from './parts/AxisLeft';
import { AxisBottom } from './parts/AxisBottom';

const width = 960;
const height = 500;
const margin = { top: 20, right: 30, bottom: 65, left: 220 };
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;
const siFormat = format('.2s');
const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B');
//x axis 
const xValue = d => d.Population;
const xAxisLabelOffset = 50;
const xLabel = 'Population'
//y axis
const yValue = d => d.Country;
const yLabel = 'Country'

export const BarChart = () => {
    const data = useData();

    if(!data){
        return <pre>Loading...</pre>
    }

    const xScale = scaleLinear()
                .domain([0, max(data, xValue)])
                .range([0, innerWidth]);

    const yScale = scaleBand()
                .domain(data.map(yValue))
                .range([innerHeight, 0])
                .paddingInner(0.15);
    return(
        <svg width={width} height={height}>
            <g transform={`translate(${margin.left},${margin.top})`}>
                <AxisBottom
                    xScale={xScale}
                    innerHeight={innerHeight}
                    tickFormat={xAxisTickFormat}
                />
                <AxisLeft 
                    yScale={yScale}
                />
                <text
                    x={innerWidth / 2}
                    y={innerHeight + xAxisLabelOffset}
                    textAnchor="middle"
                    >
                    {xLabel}
                </text>
                <Marks 
                    data={data}
                    xScale={xScale}
                    yScale={yScale}
                    xValue={xValue}
                    yValue={yValue}
                    tooltipFormat={xAxisTickFormat}
                />
            </g>
        </svg>
    )
}