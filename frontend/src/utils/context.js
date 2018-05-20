import React from 'react';

const { localizationObj } = document.getElementById('root').dataset;

export const localization = JSON.parse(localizationObj);
const LocalizationContext = React.createContext();
export default LocalizationContext;
