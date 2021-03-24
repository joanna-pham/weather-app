import React from 'react';

export default class WeekContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=bf183d6fa5ee812a3eb47d455f342877`

    fetch(weatherURL)
      .then(res => res.json())
      .then(data => console.log('data', data))
  }

  render() {
    return (
      <div>
        <h1>Hi</h1>
      </div>
    )
  }

}
