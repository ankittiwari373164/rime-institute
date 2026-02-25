import React from 'react'
import Controls from './Controls';
import CampusHeader from './CampusHeader';
import { CAMPUS_DATA } from './Data.js';
import Indicators from './Indicators.jsx';
import Progressbar from './Progressbar.jsx';

const CampusFacilities = () => {
  return (
    <div>
        <Controls />
        <CampusHeader />
        <Indicators />
        <Progressbar />
    </div>
  )
}

export default CampusFacilities;