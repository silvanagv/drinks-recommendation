import React from 'react';

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount: 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    let tastes = [
      "salty", //michelada
      "sweet", //nutty spiced chocolate
      "tangy",
      "fruity",
      "peaty",
      "smokey",
      "floral",
      "spicy", //fuego verde, serrano-spiced paloma, horseradish black pepper Gibson
      "refreshing", // link ray
      "herbaceous" //fuego verde, link ray
    ];

var tastesDivs = [];
      for (let i = 0; i < tastes.length; i++) {
                tastesDivs.push(<div>{tastes[i]}</div>)
      }
    let spirits = []
    return (
      <div>
        Likes : <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like Me</button></div>
      </div>
    );
  }

}

export default AwesomeComponent;
