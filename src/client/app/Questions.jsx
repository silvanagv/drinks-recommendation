import React from 'react';

class Questions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {imgSrc : 'mesh', confirmMoney : '', drink: '', tastes: ''}
    this.onRich = this.onRich.bind(this)
    this.onOk = this.onOk.bind(this)
    this.onPoor = this.onPoor.bind(this)
    this.onDrink = this.onDrink.bind(this)
  }

  onRich() {
    let newImgSrc = 'marledknits'
    this.setState({imgSrc: newImgSrc, confirmMoney: 'oh really?'})
  }

  onOk() {
    let newImgSrc = 'whiteshirt'
    this.setState({imgSrc: newImgSrc, confirmMoney: 'oh really?'})
  }

  onPoor() {
    let newImgSrc = 'pleats'
    this.setState({imgSrc: newImgSrc, confirmMoney: 'oh really?'})
  }
  onDrink(favoriteDrink) {
    this.setState({drink: favoriteDrink, tastes: "yes"})
  }
  render () {
  return (
  <div>
    <h3 className="drink-question"> What's your poison? </h3>
    <div className="drinks">
      <div className="drinkbox" onClick={ () => this.onDrink("suze")}>
        <p className="drinklabel"> Suze </p>
        <img className="drink" src="http://pernod-ricard.com/files/gamme/suze_small_0.jpg" />
      </div>
      <div className="drinkbox" onClick={ () => this.onDrink("vodka")}>
        <p className="drinklabel"> Vodka </p>
        <img className="drink" src="http://liquor.s3.amazonaws.com/wp-content/uploads/2014/07/Taaka-Vodka.jpg"/>
      </div>
      <div className="drinkbox" onClick={ () => this.onDrink("gin")}>
        <p> Gin </p>
        <img className="drink" src="http://theginisin.com/wp-content/uploads/2010/05/hendricks-bottle.jpg" />
      </div>
      <div className="drinkbox" onClick={ () => this.onDrink("mezcal")}>
        <p> Mezcal </p>
        <img className="drink" src="http://static1.squarespace.com/static/525c4a4be4b01707f4b592a5/t/52698211e4b082c85fe87780/1382646295554/ILEGAL-MEZCAL-3-BOTTLESLOW-RES-.jpg" />
      </div>
      <div className="drinkbox" onClick={() => this.onDrink("Whiskey")}>
        <p> Whiskey </p>
        <img className="drink" src="https://static.pexels.com/photos/8734/cold-light-alcohol-glass.jpg" />
      </div>
        <div className="drinkbox" onClick={() => this.onDrink("tequila")}>
          <p> Tequila </p>
          <img className="drink" src="https://www.danmurphys.com.au/media/DM/Product/308x385/376569_0_9999_med_v1_m56577569854546070.png" />
        </div>
        <div className="drinkbox" onClick={ () => this.onDrink("pisco")}>
          <p> Pisco </p>
          <img className="drink" src="http://www.drinkhacker.com/wp-content/uploads/2014/10/waqar-pisco.jpg" />
        </div>
      </div>
      {this.state.tastes}
      <h3 className="tastes-question">Which of these tastes do you appreciate in your mixed drinks?</h3>
      <div className="tastes">
        <div className="tastebox">
          <p>Herbs</p>
          <img src="https://baileyurbanfarm.files.wordpress.com/2015/02/thyme1.jpg" />
        </div>
        <div className="tastebox">
          <p>Fruit</p>
          <img src="http://www.theheraldng.com/wp-content/uploads/2016/03/Mangos_highres.jpg" />
        </div><
        div className="tastebox">
          <p>Salt</p>
          <img src="https://www.seasalt.com/media/wysiwyg/b2c/category/learnmore/himalayan-pink-salt-pile.jpg" />
        </div>
        <div className="tastebox">
          <p>Caramel</p>
          <img src="http://cdn.wholelifestylenutrition.com/wp-content/uploads/Salted-Caramel.png" />
        </div>
        <div className="tastebox">
          <p>Tang</p>
          <img src="http://img.enkivillage.com/s/upload/images/2016/01/a2508a168a64845bd90c189a4291b7a5.jpg" />
        </div>
        <div className="tastebox">
          <p>Peat</p>
          <img src="http://www.whiskypapa.com/wp-content/uploads/2011/08/peat.jpg" />
        </div>
        <div className="tastebox">
          <p>Flowers</p>
          <img src="http://www.flowermuse.com/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/p/e/peony_-_alex_f_2.jpg" />
        </div>
        <div className="tastebox">
          <p>Spice</p>
          <img src="http://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/8/5/2859/paprika-smoked-spanish-sweet-1.jpg" />
        </div>
      </div>

      <h3 className="money-question">How much money do you have? </h3>
      <button onClick={this.onRich}> Money to burn</button>
      <button onClick={this.onOk}> I do alright</button>
      <button onClick={this.onPoor}> Living off of Ramen and whatever free food I can scrounge</button>
      <div>{this.state.confirmMoney}</div>
        <div class="results">
          <p id="demo" class="results"></p>
          <img id="trendpic" class="results" src={`img/${this.state.imgSrc}.jpg`} />
        </div>
      <div>

      </div>
    </div>
  )
}

}

export default Questions;
