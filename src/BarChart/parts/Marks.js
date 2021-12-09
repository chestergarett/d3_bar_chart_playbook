import classes from './Parts.module.css';

export const Marks = ({data,xScale,yScale,xValue,yValue,tooltipFormat}) => {
    
    return(
        <>
        {data.map( (d,i)=>{
            return( 
                <rect
                    className={classes.mark}
                    key={i}
                    x={0}
                    y={yScale(yValue(d))}
                    width={xScale(xValue(d))}
                    height={yScale.bandwidth()}
                >
                    <title>{tooltipFormat(xValue(d))}</title>
                </rect>
            )
        })}
        </>
    )
}
