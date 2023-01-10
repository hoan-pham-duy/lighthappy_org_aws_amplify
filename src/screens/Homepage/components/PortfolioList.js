import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import AboutMeImg from '../assets/img/portfolio/AboutMe.png'
import ToolPdfImg from '../assets/img/portfolio/ToolPdf.png'
import RealTimeChatRoomImg from '../assets/img/portfolio/ChatRoom.png'
import HowIBuildImg from '../assets/img/portfolio/How_I_build.png'

function redirectTo (path) {
  window.location.href = path
}

function redirectAboutMe (event) {
  redirectTo('about-me')
}

function redirectToolPdf (event) {
  redirectTo('pdf-tools')
}

function redirectRealTimeChatRoom (event) {
  redirectTo('real-time-chat-room')
}

function redirectTechnicalDetails (event) {
  redirectTo('technical-details')
}

const imgPortfolioStyles = {
  width: '150px',
  height: '100%',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const emptyVeritcalDivStyle = {
  height: '20px'
}

class PortfolioList extends React.Component {
  render () {
    return (
      <section className='page-section portfolio' id='portfolio'>
      <div className='container'>
        {/* Portfolio Section Heading */}
        <div style={emptyVeritcalDivStyle}> </div>
        <h2 className='page-section-heading text-center text-uppercase text-secondary mb-0'>My Projects</h2>
        {/* Icon Divider */}
        <div className='divider-custom'>
          <div className='divider-custom-line' />
          <FontAwesomeIcon icon={faCoffee} />
          <div className='divider-custom-line' />
        </div>
        {/* Portfolio Grid Items */}
        <div className='row justify-content-center'>
          {/* Portfolio Item 1 */}
          <div className='col-md-6 col-lg-4 mb-5' onClick={redirectAboutMe}>
            <div className='portfolio-item mx-auto' data-toggle='modal' data-target='#portfolioModal1'>
              <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                <div className='portfolio-item-caption-content text-center text-white'><i className='fas fa-plus fa-3x' /></div>
              </div>
              <img style={imgPortfolioStyles} className='img-fluid' src={AboutMeImg} alt='' />
              <p className='text-center'> About Me </p>
            </div>
          </div>
          {/* Portfolio Item 2 */}
          <div className='col-md-6 col-lg-4 mb-5' onClick={redirectToolPdf}>
            <div className='portfolio-item mx-auto' data-toggle='modal' data-target='#portfolioModal2'>
              <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                <div className='portfolio-item-caption-content text-center text-white'><i className='fas fa-plus fa-3x' /></div>
              </div>
              <img style={imgPortfolioStyles} className='img-fluid' src={ToolPdfImg} alt='' />
              <p className='text-center'> Tools for PDF files </p>
            </div>
          </div>
          {/* Portfolio Item 3 */}
          <div className='col-md-6 col-lg-4 mb-5' onClick={redirectRealTimeChatRoom}>
            <div className='portfolio-item mx-auto' data-toggle='modal' data-target='#portfolioModal2'>
              <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                <div className='portfolio-item-caption-content text-center text-white'><i className='fas fa-plus fa-3x' /></div>
              </div>
              <img className='img-fluid' style={imgPortfolioStyles} src={RealTimeChatRoomImg} alt='' />
              <p className='text-center'> Realtime Chat Room </p>
            </div>
          </div>
          <div className='col-md-6 col-lg-4 mb-5' onClick={redirectTechnicalDetails}>
            <div className='portfolio-item mx-auto' data-toggle='modal' data-target='#portfolioModal2'>
              <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                <div className='portfolio-item-caption-content text-center text-white'><i className='fas fa-plus fa-3x' /></div>
              </div>
              <img style={imgPortfolioStyles} className='img-fluid' src={HowIBuildImg} alt='' />
              <p className='text-center'> How I develop this project </p>
            </div>
          </div>
          {/* <div>
            <li><a href='/about-me'>About Me </a></li>
            <li><a href='/tool-pdf'>Tools for processing your PDF files </a></li>
            <li><a href='/classify-data'>Get Models to classify your data</a></li>
            <li><a href='/technical-details'>This is how I build this website! </a></li>
          </div> */}
        </div>
      </div>
    </section>
    )
  }
}

export default PortfolioList
