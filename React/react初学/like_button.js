class LikeButton extends React.Componet {
  render(){
    return React.createElement(
      'button',
      { onclick: () => this.setState({liked:true}) },
      'Like'
    )
  };
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer)