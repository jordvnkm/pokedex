const React = require("react");
const ToyIndexItem = require("./toy_index_item");


const ToysIndex = React.createClass({
  render: function(){
    let toys = "";
    if (this.props.toys) {
      toys = this.props.toys.map((toy) => {
        return <ToyIndexItem key={toy.name} toy={toy}/>;
      });
    }
    return (
      <ul>
        {toys}
      </ul>
    );
  }
});

module.exports = ToysIndex;
