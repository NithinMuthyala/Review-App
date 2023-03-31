import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  rightarrow = () => {
    // console.log('Event triggered')
    const {index} = this.state
    if (index >= 0 && index < 3) {
      this.setState(prevState => ({index: prevState.index + 1}))
    } else {
      this.setState(prevState => ({index: prevState.index}))
    }
  }

  leftarrow = () => {
    const {index} = this.state
    if (index > 0 && index <= 3) {
      this.setState(prevState => ({index: prevState.index - 1}))
    } else {
      this.setState(prevState => ({index: prevState.index}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const userData = reviewsList[index]
    const {imgUrl, username, companyName, description} = userData
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div>
          <img src={imgUrl} alt={username} />
        </div>

        <p className="user-name">{username}</p>
        <div className="arrow-container">
          <button
            data-testid="leftArrow"
            type="button"
            onClick={this.leftarrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrow"
              alt="left arrow"
            />
          </button>
          <button
            data-testid="rightArrow"
            type="button"
            onClick={this.rightarrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrow"
              alt="right arrow"
            />
          </button>
        </div>

        <div className="name-container">
          <p className="company-name">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
