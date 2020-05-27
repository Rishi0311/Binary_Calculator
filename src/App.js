import React, { Component } from 'react';
import { Button } from './button.js';
import './Style/App.css';

const btnTexts = [0, 1, 'C', '=', '+', '-', '*', '/'];
const oprtxArr = ['+', '-', '*', '/'];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: []
    };

  }



  updateDisplay = (event) => { //this method runs on every button click
    event.preventDefault();
    console.log('clicked:', event.currentTarget.value);
    let temp = [...this.state.text];
    temp.push(event.currentTarget.value);//pushing in temp array to be used later to display inside input field

    //When user clicks = to get the result
    if (event.currentTarget.value === '=') {
      //if (this.state.text == []) { alert("Please select 1's or 0's"); }
      let arr1 = temp.filter(i => {
        return oprtxArr.includes(i) ? i : null;
      });
      if (arr1.length > 1) {
        alert("Oops!Please type in only one operator!");
      }
      else {
        let oprtr = arr1[0];
        console.log('Operator is:', oprtr);
        let index = temp.indexOf(oprtr);
        console.log('index is:', index);
        let oprnd1 = temp.slice(0, index).join('');
        let oprnd1Int = parseInt(oprnd1, 2);
        console.log('oprnd1 is:', oprnd1Int);
        let oprnd2 = temp.slice(index + 1, temp.length - 1).join('');
        let oprnd2Int = parseInt(oprnd2, 2);
        console.log('oprnd2 is:', oprnd2Int);

        let result = 0;

        //delete window.alert;
        document.getElementById("input").style.backgroundColor = '#d9e8b3';

        switch (oprtr) {
          case '+':
            result = (oprnd1Int + oprnd2Int).toString(2);
            console.log('result:', result);
            temp.push(result);
            //alert("Result in Decimal:", result);
            break;

          case '-':
            result = (oprnd1Int - oprnd2Int).toString(2);
            console.log('result:', result);
            temp.push(result);
            break;

          case '*':
            result = (oprnd1Int * oprnd2Int).toString(2);
            temp.push(result);
            break;

          case '/':
            result = (oprnd1Int / oprnd2Int).toString(2);
            if (oprnd1Int < oprnd2Int) { alert("Oops!Division operation must be integer division only!"); }
            temp.push(result);
            break;

          default:
            alert('Opps something went wrong, please try again!');

        }

      }

    }

    this.setState( //finally assigning temp to text to get reflected on input after each rerendering of component
      {
        text: [...temp]
      }
    )
    if (event.currentTarget.value === 'C') {
      console.log('Cancel clicked');
      document.getElementById("input").style.backgroundColor = 'transparent';
      this.setState(
        {
          text: []
        }
      )

    }





  }

  render() {
    console.log('new state:', this.state.text);
    return (
      <div id="main">
        <div id="display" >
          <h3>Binary Calculator</h3>
          <input id="input" type="text" value={this.state.text.join('')} />
        </div>
        <div id="btnContainer" >
          <Button lable={btnTexts} changeText={this.updateDisplay} />

        </div>


      </div >
    )
  }
}

export default App;
