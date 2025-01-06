import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: "LSTM Based Price Prediction Model",
      link: "https://github.com/Eyuelwoldeh/LSTM-based-Bitcoin-Price-Prediction-Model",
      description: "This project implements a Long Short-Term Memory (LSTM) model to predict Bitcoin prices based on historical data. By utilizing deep learning techniques, the model captures patterns in the time series data, making it suitable for forecasting financial assets like cryptocurrencies. It is trained on minute-level Bitcoin price data and evaluated using metrics like RMSE."
    },
    {
      name: "Habit Tracker App",
      link: "https://github.com/Eyuelwoldeh/habit-tracker",
      description: "A simple web app built with React to help users track and maintain daily habits. The app allows users to add, track, and delete habits while storing progress persistently using localStorage. The responsive design ensures it works seamlessly across devices, offering a clean and interactive user experience for habit management."
    },

  ];

  return (
    <section id="projects">
      <h1>Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
