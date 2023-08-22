import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/app.css';
import TodoApp from './components/TodoApp.jsx';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);
root.render(<TodoApp />);
