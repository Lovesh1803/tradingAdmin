import "./App.css";
import AppContainer from "./base/AppContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import MessageProvider from "./base/context/MessageProvider";
import AuthProvider from "./base/context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <MessageProvider>
          <Provider store={store}>
            <AppContainer />
          </Provider>
        </MessageProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
