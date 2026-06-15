import '../../assets/styles/popup.css';
import { type JSX, render } from 'preact';

const App = (): JSX.Element => {
  return (
    <div className="popup-container">
      <h1 className="popup-title">E-store extension</h1>
      <p className="popup-description">Change me</p>
      <button className="popup-button">Change me</button>
    </div>
  );
};

render(<App />, document.getElementById('root')!);
