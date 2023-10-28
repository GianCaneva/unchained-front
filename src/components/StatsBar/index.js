import React, { useContext, useEffect, useState } from "react";
import { SessionContext } from "../../context/session/SessionContext";
import { NewsContext } from "../../context/news/NewsContext";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
} from "victory";
import { LeftArrowIcon, RightArrowIcon, Row, Wrapper } from "./styled";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  {
    value: "politicsInterest",
    label: 'POL'
  },
  {
    value: "economyInterest",
    label: 'ECO'
  },
  {
    value: "sportsInterest",
    label: 'DEP'
  },
  {
    value: "socialInterest",
    label: 'SOC'
  },
  {
    value: "internationalInterest",
    label: 'INT'
  },
  {
    value: "policeInterest",
    label: 'PLC'
  },
];

const StatsBar = () => {
  const { user, modifyStats } = useContext(SessionContext);
  const { topics } = useContext(NewsContext);

  const [data, setData] = useState([]);
  const [xAxis, setXAxis] = useState([]);

  const [selectedTopic, setSelectedTopic] = useState(options[0])

  useEffect(() => {
    const chartData = [];
    const chartXAxis = [];
    if(!user){
      return
    }
    topics.forEach((topic, i) => {
      if (topic.id === "home") return;
      chartData.push({ labelNum: i, value: user[topic.interestStat]});
      chartXAxis.push(topic.graphLabel);
    });
    setXAxis(chartXAxis);
    setData(chartData);
  }, [user, topics]);

  const modifyValue = (isMinus) => {
    const index = topics.findIndex((t) => t.interestStat === selectedTopic.value)
    let newChartData = [...data]
    let oldDataObject = {...newChartData[index - 1]}

    const newValue = isMinus ? oldDataObject.value - 10 : oldDataObject.value + 10
    
    if ((isMinus && oldDataObject.value > 0) || (!isMinus &&  oldDataObject.value !==100)){
      const newData = {
        ...oldDataObject,
        value: newValue
      }
      newChartData[index - 1] = newData
      setData(newChartData)

      const newUser = {
        ...user,
        [selectedTopic.value] : newValue
      }

      modifyStats(newUser)

    }
  }

  return (
    <Wrapper>
      <VictoryChart
        width={600}
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis
          tickValues={data.map((x) => x.labelNum)}
          tickFormat={xAxis}
        />
        <VictoryAxis
          dependentAxis
          tickValues={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
        />
        <VictoryBar horizontal data={data} x="labelNum" y="value" />
      </VictoryChart>
      <Row> 
        <LeftArrowIcon onClick={() => modifyValue(true)}/>
          <Dropdown options={options} onChange={event => setSelectedTopic(event)} value={selectedTopic} placeholder="Selecciona un tópico" />
        <RightArrowIcon onClick={() => modifyValue(false)}/>
      </Row>
    </Wrapper>
  );
};

export default StatsBar;
