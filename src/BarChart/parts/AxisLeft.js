import classes from './Parts.module.css';

export const AxisLeft = ({yScale}) => {

    return (
        <>
        {
            yScale.domain().map( (tickValue, i) => {
                return (
                    <g className={classes.tick} key={i}>
                        <text
                            style={{textAnchor: 'end '}}
                            x={-3}
                            y={yScale(tickValue) + yScale.bandwidth() /2 }
                            dy='.32em'
                        >
                            {tickValue}
                        </text>
                    </g>
                )
            })
        }
        </>
    )
}