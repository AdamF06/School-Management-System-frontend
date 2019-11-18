import React, { Component } from 'react';
import './Collapse.css';

const features = [
  {
    title: 'High Contrast UI',
    detail: `High Contrast enhances the colour contrast of the UI (text, buttons, etc.), making those items more distinct and easier to identify. Note: Institution branding will be disabled.`

  },
  {
    title: 'Underlinke Links',
    detail: `Underline Links displays hyperlinks in navigation menus, the Dashboard, and page sidebars as underlined text. This feature option does not apply to user-generated content links in the Rich Content Editor, which always underlines links for all users.`
  },
  {
    title: 'Include Byte-Order Mark in compatible',
    detail: `Optionally include a byte-order mark in compatible spreadsheet exports so they can be imported into Excel for users in some locales.`
  },
  {
    title:` Use semicolons to separate fields in compatible spreadsheet exports`,
    detail:`Use semicolons instead of commas to separate fields in compatible spreadsheet exports so they can be imported into Excel for users in some locales.`
  },
  {
    title:` Autodetect field separators in compatible spreadsheet exports`,
    detail:`Attempt to detect an appropriate field separator in compatible spreadsheet exports based on the number format for your language.`
  }


]

export default class Collapsible extends Component {


    constructor(props){
        super(props);
        this.state = {
        open:false,
        index:-1
        }
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e,index){
      this.setState({
        open: !this.state.open,
        index:index  //if clicked update to clicked index
      })
    }

    render () {

            return (
              features.map((item,index)=>
              <div>
                  <div onClick={(e)=>this.togglePanel(e,index)} >
                    
                      <li className='feature-flag'>
                        <div className='span7'>
                        <span>{item.title}</span>       
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                        </div>
                        {/* if open=true, then expand content       */}
                        {this.state.index===index&this.state.open?  //if clicked then corresponded index expand
                          (
                          <div className='hide-content'>
                              {item.detail}
                              </div>)
                          : null
                        }
                      </li>   
                  </div>
                  

                  
              </div>       
            )
            );
          
    }
  }
    
