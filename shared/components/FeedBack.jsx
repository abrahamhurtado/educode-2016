import React from 'react';
import { Link } from 'react-router';
import PieChart from 'react-simple-pie-chart';

var styles = {
  materialIconsHack: {
    dev:{
        color: "#0277BD"
    },
    intg:{
        color: "#4527A0"
    },
    alb:{
      color: "#C62828"
    },
    ecu:{
      color: "#FF8F00"
    }
    
  }
}
export default class FeedBack extends React.Component {

  render () {
    return (
     
      <div className="row">
         <div className="col s4 offset-s4">
         <h4>Evaluación de habilidades</h4>
       <PieChart
  slices={[
    {
      color: '#0277BD',
      value: 10
    },
    {
      color: '#4527A0',
      value: 20
    },
    {
      color: '#C62828',
      value: 40
    },
    {
      color: '#FF8F00',
      value: 30
    }
  ]}/>
  <table>
        <thead>
          <tr>
              <th data-field="id">Habilidades</th>
              <th data-field="name">Procentaje</th>
          </tr>
        </thead>

        <tbody>
          <tr style={styles.materialIconsHack.dev}>
            <td>Derivadas</td>
            <td>10%</td>
          </tr>
          <tr style={styles.materialIconsHack.intg}>
            <td>Algebra</td>
            <td>20%</td>
          </tr>
          <tr style={styles.materialIconsHack.alb}>
            <td>Integrales</td>
            <td>40%</td>
          </tr>
          <tr style={styles.materialIconsHack.ecu}>
            <td>Ecuaciones de primer orden</td>
            <td>30%</td>
          </tr>
        </tbody>
      </table>
  </div>
  </div>
             );
  }
}