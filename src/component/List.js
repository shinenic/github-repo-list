import React, { Component } from 'react'
import '../styles/List.scss'
import * as actions from '../action'
import { connect } from 'react-redux'

class List extends Component {
  componentDidMount() {
    const container = document.querySelector('.list-container')
    container.addEventListener('scroll', () => {
      if (container.scrollTop + container.clientHeight >= container.scrollHeight - 2) {
        this.props.loadMore()
      }
    })
  }
  componentWillUnmount() {
    const container = document.querySelector('.list-container')
    container.removeEventListener('scroll', () => {
      if (container.scrollTop + container.clientHeight >= container.scrollHeight - 2) {
        this.props.loadMore()
      }
    })
  }
  render() {
    return (
      <div className="list-container">
        {this.props.list.length !== 0 && this.props.list.map((value, index) => {
          return (
            <div className="list-container__list" key={index}>
              <div className="name">
                {/* <div> */}
                <span>
                  {value.name}
                </span>
                {value.language !== null &&
                  <div>
                    <span className="name__language__tag" >
                      {value.language}
                    </span>
                  </div>}
              </div>
              <div className="line">
                <div className="black-line" />
              </div>
              <div className="description">{value.description === null ? 'no description for this repository' : value.description}</div>
              <div className="update">{value.updated_at.replace(/[TZ]/g, ' ')}</div>
              <div className="language">
                {value.language !== null &&
                  <div className="language__tag">{value.language}</div>}
              </div>
              <div className="link">
                <div>
                  <a href={value.html_url} target="_blank" rel="noopener noreferrer">GitHub</a>
                  {value.homepage !== null && <a href={value.homepage} target="_blank" rel="noopener noreferrer">HomePage</a>}

                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    data: state.root.data,
    list: state.root.list
  }
}


export default connect(mapStateToProps, actions)(List)