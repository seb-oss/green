export const Bootstrap = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Navbar w/ text
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <span className="navbar-text">
            Navbar text with an inline element
          </span>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col mt-4">
            <div className="card">
              <div className="card-body">
                <h1>This is a form</h1>
                <p>
                  This is a from that is built with SEBbootstrap as styling
                  framework
                </p>
                <div className="row">
                  <div className="col col-md-4">
                    <div className="form-group mb-5">
                      <label htmlFor="">Dropdown label</label>
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          type="button"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Dropdown button
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-5">
                      <label htmlFor="" className="mb-0">
                        Radio Group
                      </label>
                      <p className="form-info mb-2">
                        This is a description for the radio group
                      </p>
                      <div className="row">
                        <div className="col-12 col-md-auto mb-2 mb-md-0">
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              name="radioGrid"
                              className="custom-control-input"
                              id="customRadioInline1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadioInline1"
                            >
                              Fusilli
                            </label>
                          </div>
                        </div>
                        <div className="col-12 col-md-auto mb-2 mb-md-0">
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              name="radioGrid"
                              className="custom-control-input"
                              id="customRadioInline2"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadioInline2"
                            >
                              Penne
                            </label>
                          </div>
                        </div>
                        <div className="col-12 col-md-auto mb-2 mb-md-0">
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              name="radioGrid"
                              className="custom-control-input"
                              id="customRadioInline3"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadioInline3"
                            >
                              Farfalle
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1" id="emailHelp">
                        Label
                      </label>
                      <p>
                        This is some information about the thing that gets
                        longer if i say so
                      </p>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="form-group mb-5">
                      <div>
                        <label htmlFor="appendPrependBtnIcon" className="mb-0">
                          Stepper label
                        </label>
                        <p className="mb-2">
                          This is a description for the stepper
                        </p>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <button className="btn btn-secondary" type="button">
                              <i className="far fa-minus"></i>
                            </button>
                          </div>
                          <input
                            id="appendPrependBtnIcon"
                            type="tel"
                            className="form-control text-center"
                            value={0}
                          />
                          <div className="input-group-append">
                            <button className="btn btn-secondary" type="button">
                              <i className="far fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
