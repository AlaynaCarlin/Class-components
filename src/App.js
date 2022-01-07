import logo from './logo.svg';
import './App.css';



export default class ClassComponentDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { simpleMessage: "Welcome user!!!" };
  }

  render() {
    return (
      <div className='main'>
        <div className='mainDiv'>
          <ClassComponentNotes />
          <h4>
            {this.state.simpleMessage}
          </h4>
        </div>
      </div>
    );
  }
}

const ClassComponentNotes = function () {
  return (
    <div>
      <h1>Class Components</h1>

      <p>Class components are considered the "React Way" of writing components.</p>
      <dl>
        <dt> Es6 JS Classes</dt>
        <dd>Built on these, must understand them</dd>
        <dt>Must extend Component</dt>
        <dd>Class components need to extend the React Component.</dd>
        <dt>render()</dt>
        <dd>Class components must always have a render method.</dd>
        <dt>export</dt>
        <dd>Only one class component exported per file.</dd>
      </dl>
    </div>
  )
}