
import React from "react";
import styled from "styled-components";
import { ResponsiveLine } from "@nivo/line";

import Card from "../../utility/Card";

import data from "../../utility/lineData";

const LineContainer = styled.div`
  width: 100%;
  .line-graph {
    padding: 1rem;
    h3 {
      margin: 1rem 0;
      font-size: 1.2rem;
    }
    p {
      color: #939597;
      margin: 0.5rem 0;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .chart {
    height: 375px;
  }
`;
const Line = () => {
  return (
    <LineContainer>
      <Card>
        <div className="line-graph">
          <h3>Sales Statistical Overview</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            molestiae corporis similique omnis? Quam maxime,
          </p>
        </div>

        <div className="chart">
          <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              orient: "bottom",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "transportation",
              legendOffset: 36,
              legendPosition: "middle",
            }}
            axisLeft={{
              orient: "left",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "count",
              legendOffset: -40,
              legendPosition: "middle",
            }}
            colors={{ scheme: "nivo" }}
            lineWidth={5}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabel="y"
            pointLabelYOffset={-12}
            enableArea={true}
            useMesh={true}
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        </div>
      </Card>
    </LineContainer>
  );
};

export default Line;