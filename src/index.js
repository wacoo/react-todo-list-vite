import React from 'react';
import ReactDOM from 'react-dom/client';
import TodosLogic from './components/TodosLogic.jsx';
import './styles/style.css';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);
root.render(<TodosLogic />);
