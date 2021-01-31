import React from 'react';

const AdditionalFeature = props => {

  const handleAddFeature = (e) => {
    e.preventDefault();
    this.props.addFeature(this.state.)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
