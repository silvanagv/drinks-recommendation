import React from 'react';
import Questions from './Questions.jsx'


class DrinkSuggestion extends React.Component {

  render () {
    function testResults (form) {
      var paperrr = form.paperrr.value
      var closet = form.closet.value
      document.getElementById('wholeform').style.height = '3px'
      document.getElementById('wholeform').style.visibility = 'hidden'

      if (paperrr === 'poor') {
        if (closet === 'tiny') {
          document.getElementById('demo').innerHTML = 'You should try pleats!'
          document.getElementById('trendpic').src = 'img/pleats.jpg'
        }
        else if (closet === 'medium') {
          document.getElementById('demo').innerHTML = 'You should try lightweight denim'
          document.getElementById('trendpic').src = 'img/lightweightdenim.jpg'
        }
        else {
          document.getElementById('demo').innerHTML = 'You should try mesh & net'
          document.getElementById('trendpic').src = 'img/mesh.jpg'
        }
      }

      else if (paperrr === 'ok')
        {if (closet === 'tiny')
          {
         document.getElementById('demo').innerHTML = 'You should try white shirt redux'
          document.getElementById('trendpic').src = 'img/whiteshirt.jpg'
              }
          else if (closet === 'medium')
          {
         document.getElementById('demo').innerHTML = 'You should try fringe'
          document.getElementById('trendpic').src = 'img/fringe.jpg'

              }
          else {
         document.getElementById('demo').innerHTML = 'You should try Spanish influences. Olé!'
          document.getElementById('trendpic').src = 'img/spanish.jpg';
              }
        }

      else {if (closet === 'tiny')
          {
         document.getElementById('demo').innerHTML = 'You should try marled knits'
          document.getElementById('trendpic').src = 'img/marledknits.jpg'
          }
          else if (closet === 'medium')
          {
         document.getElementById('demo').innerHTML = 'You should try lingerie as daywear'
          document.getElementById('trendpic').src = 'img/lingerie.jpg'
          }
          else {
         document.getElementById('demo').innerHTML = 'You should try a half moon bag'
         document.getElementById('trendpic').src = 'img/halfmoonbag.jpg'
        }
      }

    }

    return (
    <div>
      <div className="title">
        <h1> SUMMER 2016
          <span> DRINKS</span>
        </h1>
        <p> WHICH ONE SHOULD YOU TRY?</p>
      </div>
      <Questions />
    </div>
    );
  }

}

export default DrinkSuggestion;
