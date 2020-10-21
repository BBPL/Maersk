import React from 'react';
import {ResponsiveLine} from '@nivo/line'

type LineChartProp = {
    data: any
}

function mouseEnter(){
    console.log("hello world")
}

export const MyLineChart = ({data}: LineChartProp) => (
    <ResponsiveLine 
        data={data}
        animate={true}
        // xScale={{type:"linear"}}
        yScale={{type:"linear"}}
        margin={{top:40, right:80, bottom: 80, left: 80}}
        enablePoints={true}
        enablePointLabel={true}
        pointSize={10}
        motionStiffness={90}
        motionDamping={15}
        debugMesh={true}
        useMesh={true}
        isInteractive={true}
        onMouseEnter={mouseEnter}
        // colors={{scheme:"blues"}}
        legends={[
            {
                anchor:"bottom-right",
                direction:"column",
                justify:true,
                itemWidth:100,
                itemHeight:20,
                itemsSpacing:30,
                symbolSize:20,
                itemTextColor:'#f8f8f8'
            }
        ]}
    />
)