
import './App.css';
import './normal.css';

function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className="chatbox">
      <div className="chat-log">
        <div className="chat-message">
          <div className="avatar">
            ME
          </div>
          <div className="message">
            HELLO
          </div>
        </div>
      </div>
        <div className="chat-input-holder">
          <textarea 
            rows="1"
            className="chat-input-textarea"
          ></textarea>
        </div>
      </section>
    
      
    </div>
  );
}

export default App;
