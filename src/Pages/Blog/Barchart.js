import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    // 데이터
    var data = [
      { category: "긍정", value: 30, color: "#4cd964" },
      { category: "부정", value: 10, color: "#ff3b30" },
      { category: "중립", value: 20, color: "#ffcc00" }
    ];

    // 총합 계산
    var totalValue = d3.sum(data, d => d.value);

    // SVG 설정
    var svgWidth = 500, svgHeight = 300, barPadding = 5;
    var barHeight = (svgHeight / data.length) / 2;

    // x축 스케일 설정
    var xScale = d3.scaleLinear()
                   .domain([0, totalValue])
                   .range([0, svgWidth]);

    // D3를 사용하여 SVG 요소 선택
    const svg = d3.select(svgRef.current)
      .attr('width', svgWidth)
      .attr('height', svgHeight);

    // 바 차트 생성 (가로 방향)
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("width", d => xScale(d.value))
      .attr("height", barHeight - barPadding)
      .attr("fill", d => d.color)
      .attr("y", (d, i) => barHeight * i * 2 + barPadding);

    // 레이블 추가
    svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text(d => `${d.category}: ${d.value}`)
      .attr("x", d => xScale(d.value) + 5) // 텍스트 위치 조정
      .attr("y", (d, i) => barHeight * i * 2 + barHeight / 2 + barPadding)
      .attr("fill", "#000");

  }, [data]);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default BarChart;
