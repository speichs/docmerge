import React from 'react'
import FileDnd from './FileDnd'

export default class MyProjects extends React.Component{

  handledrop(e){
    console.log(e.target)
  }

  render(){
    return (
      <div className="container-fluid">

        <div className="row">
          <div id="dnd" className="col-12">
            <FileDnd></FileDnd>
          </div>
        </div>

        <div className="row">
          <div className="col-5">
            <button type="button" className="btn btn-primary">
              <i className="fa fa-plus aria-hiden="true></i>
              Create New Project
            </button>
          </div>
        </div>


        <div className="row">
          <div id='dndbox' className="col-5 push-4">
            <p className="text-center">Drag and Drop File</p>
          </div>
        </div>

        <div className="row">
          <div className="col-1"></div>
          <div className="col-4">
            <h3 className="text-center">Your Projects</h3>
            <div className="row">
              <div className="col-6">
                <div className="card">
                  <div className="card-block">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card">
                  <div className="card-block">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card">
                  <div className="card-block">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-4">
            <h3 className="text-center">Shared Projects</h3>
            <div className="row">
              <div className="col-6">
                <div className="card">
                  <div className="card-block">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
                <div className="col-6">
                  <div className="card">
                    <div className="card-block">
                      <h4 className="card-title">Card title</h4>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>



        <div className="row">
          <div className="col-2 push-10">
            <button type="button" className="btn btn-primary">
              <i className="fa fa-envelope-o" aria-hiden="true"></i>
               Email Project
            </button>
          </div>
        </div>

    </div>
    )
  }
}
