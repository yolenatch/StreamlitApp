// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders StreamlitApp title', () => {
    render(<App />);
    const titleElement = screen.getByText(/StreamlitApp/i);
    expect(titleElement).toBeInTheDocument();
});
