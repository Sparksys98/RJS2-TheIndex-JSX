import React from "react";
import authors from './data'
function App() {
  
  return (<div id="app" class="container-fluid">
  <div class="row">
    <div class="col-2">
      <div id="sidebar">
        <img src="theindex.svg" class="logo" alt="the index logo"/>
        <section>
          <h4 class="menu-item active">
            <button>AUTHORS</button>
          </h4>
        </section>
      </div>
    </div>
    <div class="content col-10">
      <div class="authors">
        <h3>Authors</h3>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12">
            <div class="card">
              <div class="image">
                <img class="card-img-top img-fluid" src={authors[0].imageUrl} alt="J.K. Rowling"/>
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  <span>{`${authors[0].first_name} ${authors[0].last_name}`}</span>
                </h5>
                <small class="card-text">{authors[0].books.length} books</small>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="card">
              <div class="image">
                <img class="card-img-top img-fluid" src={authors[1].imageUrl} alt="George R.R. Martin"/>
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  <span>{`${authors[1].first_name} ${authors[1].last_name}`}</span>
                </h5>
                <small class="card-text">{authors[1].books.length} books</small>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="card">
              <div class="image">
                <img class="card-img-top img-fluid" src={authors[2].imageUrl} alt="J.R.R Tolkein"/>
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  <span>{`${authors[2].first_name} ${authors[2].last_name}`}</span>
                </h5>
                <small class="card-text">{authors[2].books.length} books</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>);
}

export default App;
