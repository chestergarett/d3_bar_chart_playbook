import classes from './Parts.module.css';

export const AxisBottom = ({xScale, innerHeight, tickFormat}) => {

    return (
        <>
        {
            xScale.ticks().map( (tickValue, index)=> {
                return(
                    <g className={classes.tick} key={index} transform={`translate(${xScale(tickValue)},0)`}>
                        <line y2={innerHeight} />
                        <text style={{ textAnchor: 'middle' }} dy=".71em" y={innerHeight + 3}>
                            {tickFormat(tickValue)}
                        </text>
                    </g>
                )
            })
        }
        </>
    )
}