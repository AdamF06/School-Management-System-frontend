import React, { Component } from 'react';
import '../Common/useritems.css';
import './file.css';


export default class File extends Component {
    state = {}
    render() {
        return(
            <div className="useritems file">
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <title>Document</title>

            <div className="container ef-main">
              <div className="ef-folder-list">
                <span className="file_path">
                  <div>
                    <ul role='tree'>
                        <li role='treeitem'>
                            <a className='treeLabel'>My Files</a>
                            <ul role='group'>
                                <li className='subtrees'>
                                    <ul>
                                        <li role='treeitems'>File_1</li>
                                        <li role='treeitems'>File_2</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                  </div>
                </span>
              </div>
              <vl/>
              <div className='ef-directory'>
                <div className="file_list">
                  <nav className="list_nav_bar">
                    <span> Name</span>
                    <span>Date Created</span>
                    <span>Date Modified</span>
                    <span>Size</span>
                  </nav>
                  <hr/>
                  <div className='file_detail col'>
                    <li>File_1</li>
                    <li>File_2</li>
                    <li>File_3</li>

                  </div>
            
                </div>

              </div>
            </div>
          </div>
        )
    }
}