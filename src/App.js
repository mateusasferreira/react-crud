import "./App.css";
import PostsForm from "./components/form";
import Feed from "./components/feed";
import { PostsContextProvider} from "./context/postContext.js";
import Modal from './components/modal'



function App() {

  return (
    <div className="App">
      <PostsContextProvider>
        <PostsForm />
        <Feed />
        <Modal/>
      </PostsContextProvider>
    </div>
  );
}

export default App;
