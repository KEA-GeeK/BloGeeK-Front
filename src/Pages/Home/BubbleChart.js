import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useNavigate } from 'react-router-dom';

const BubbleChart = ({ data }) => {

  const navigate = useNavigate();
  const svgRef = useRef(null);

  useEffect(() => {
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    const width = 800 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom);

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const pack = data => d3.pack()
      .size([width, height])
      .padding(30)
      (d3.hierarchy({ children: data })
        .sum(d => d.amount));

    const root = pack(data);

    const node = g.selectAll('g')
      .data(root.descendants())
      .join('g')
      .attr('transform', d => `translate(${d.x},${d.y})`);

      const dataCircles = node
      .filter(d => !d.children)
      .append('circle')
      .attr('r', d => { return d.r;})
      .attr('fill', 'lightblue')
      .attr('class', 'data-circle')
      .on('click', (event, d) => {
        console.log('Clicked data:', d.data.category);
        navigate(`/bubble_login/${d.data.category}`);
      });
    
    // 데이터 동그라미 위에 텍스트 추가
    node.filter(d => !d.children)
      .append('text')
      .attr('dy', 5)
      .attr('text-anchor', 'middle')
      .text(d => d.data.category)
      .attr('class', 'data-label')
      .style('font-family', 'TmoneyRoundWindRegular');

    // // 회색 동그라미에 스타일 적용
    // node.filter(d => d.depth === 0)
    //   .append('circle')
    //   .attr('r', d => d.r)
    //   .attr('fill', '#FFF')
    //   .attr('class', 'gray-circle');

    // 데이터 동그라미와 텍스트를 같이 이동시키기
    dataCircles.each(function (d) {
      const circle = d3.select(this);
      const text = d3.select(this.parentNode).select('.data-label');
      text.attr('x', circle.attr('cx'));
      text.attr('y', circle.attr('cy'));
    });

    node.append('title')
      .text(d => `${d.data.category}\n${d.value}`);
  }, [data]);

  // Render the selected category details outside the useEffect
  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default BubbleChart;