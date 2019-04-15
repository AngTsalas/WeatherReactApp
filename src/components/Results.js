import React from "react";
import { Segment, Header, Image } from "semantic-ui-react";
import { getName } from "country-list";
import { normalize } from "../util";
const d2d = require("degrees-to-direction");

const Results = ({ data }) => {
  return (
    <Segment>
      {!data ? (
        <p>No results found. Try typing some more letters.</p>
      ) : (
        <React.Fragment>
          <Header>
            {data.name}, {getName(data.sys.country)}
          </Header>
          <p>
            <Image
              src={`http://openweathermap.org/img/w/${
                data.weather[0].icon
              }.png`}
              verticalAlign="middle"
            />
            <span>{normalize(data.weather[0].description)}</span>
          </p>
          <p>
            Temperature: {data.main.temp} °C (Min {data.main.temp_min} °C - Max{" "}
            {data.main.temp_max} °C)
          </p>
          <p>Cloudiness: {data.clouds.all}%</p>
          <p>Pressure: {data.main.pressure} hpa</p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>
            Wind: {data.wind.speed} m/s, {d2d(data.wind.deg)} ({data.wind.deg})
          </p>
        </React.Fragment>
      )}
    </Segment>
  );
};

export default Results;
