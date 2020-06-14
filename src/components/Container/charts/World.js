import React from "react";
import styled from "styled-components";
import { ResponsiveChoropleth } from "@nivo/geo";

import Card from "../../utility/Card";
import features from "../../utility//feature";
import data from '../../utility/worldData';

const WorldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    h3 {
      margin: 0.5rem 0;
    }
  }
  .chart {
    height: 300px;
    svg {
      width: 90%;
    }
  }
  .stats-container {
    margin-bottom: 1rem;
    color: #001837;
    .stats {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0.5rem;
      p {
        margin-right: 2rem;
        span {
          font-size: 0.8rem;
          margin-left: 1rem;
        }
      }
    }
  }
`;

const World = () => {
  return (
    <WorldContainer>
      <Card>
        <h3>Worlds</h3>
        <div className="chart">
          <ResponsiveChoropleth
            data={data}
            features={features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors="blues"
            domain={[0, 1000000]}
            unknownColor="#5244c1"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={45}
            projectionTranslation={[0.5, 0.45]}
            projectionRotation={[0, 0, 0]}
            graticuleLineColor="#dddddd"
            borderColor={{ theme: "background" }}
            legends={[]}
          />
        </div>

        <div className="stats-container">
          <div className="stats">
            <p>Carlifonia</p>
            <p>
              26,437
              <span>26%</span>
            </p>
          </div>

          <div className="stats">
            <p>Washington</p>
            <p>
              3252
              <span>64%</span>
            </p>
          </div>

          <div className="stats">
            <p>Michigan</p>
            <p>
              4,985
              <span>30%</span>
            </p>
          </div>
        </div>
      </Card>
    </WorldContainer>
  );
};

export default World;