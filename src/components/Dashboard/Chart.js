import React from "react";
import PropTypes from "prop-types";
import { AreaChart, Area } from "recharts";

const Chart = ({ grafik, warna }) => {
  return (
    <AreaChart width={210} height={50} data={grafik}>
      <Area
        type="monotone"
        dot={false}
        dataKey="value"
        fill={warna}
        stroke={warna}
      />
    </AreaChart>
  );
};
export default Chart;

Chart.propTypes = {
  grafik: PropTypes.array,
  warna: PropTypes.string
};
