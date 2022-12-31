import React from "react";
import ReactEcharts from "echarts-for-react";

import WINEDATA from "./Wine-Data.json";

function App() {
    const alcohol = WINEDATA.map((data) => data["Alcohol"]);
    const alcoholLabels = Array.from(new Set(alcohol));

    const malicAcid = WINEDATA.map((data) => data["Malic Acid"]);
    const colorIntensity_hue = WINEDATA.map((data) => {
        let d = [];
        d.push(+data["Color intensity"]);
        d.push(+data["Hue"]);
        return d;
    });

    const optionBar = {
        xAxis: {
            type: "category",
            name: "Alcohol",
            data: alcoholLabels,
            axisLabel: {
                formatter: "{value} ",
                align: "center",
            },
        },
        yAxis: {
            type: "value",
            name: "Malic Acid",
        },
        series: [
            {
                data: malicAcid,
                type: "bar",
            },
        ],
    };

    const optionScatter = {
        xAxis: {
            type: "category",
            name: "Color Intensity",
            axisLabel: {
                formatter: "{value}",
            },
        },
        yAxis: {
            name: "Hue",
            axisLabel: {
                formatter: "{value}",
            },
        },

        series: [
            {
                data: colorIntensity_hue,
                type: "scatter",
            },
        ],
    };

    return (
        <div className='app'>
            <div className='app__charts'>
                <ReactEcharts className='app__chart' option={optionScatter} />
                <ReactEcharts className='app__chart' option={optionBar} />
            </div>
        </div>
    );
}
export default App;
