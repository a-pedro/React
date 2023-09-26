class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits />
        <Vegetables />
        {/* Change code above this line */}
      </div>
    );
    
  }
};
let targetNode = document.getElementById("challenge-node")
ReactDOM.render(<TypesOfFood />, targetNode)

// Change code below this line
