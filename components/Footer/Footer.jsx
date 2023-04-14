import './index.scss';
import gitLogo from '../../src/assets/imgs/icon_github.svg';
import linkedinLogo from '../../src/assets/imgs/icon_linkedin.svg';
import instaLogo from '../../src/assets/imgs/icon_instagram.svg';

const Footer = () => {
  return (
    <footer className='footerWeather'>
        <nav className='footerWeather__contact'>
            <a href="https://www.linkedin.com/in/eric-edward-k%C3%BCnzel-0b139574/" target="_blank" title="Github - Eric Kunzel"><img src={gitLogo} alt="Github" /></a>
            <a href="" target="_blank" title="Linkedin - Eric Kunzel"><img src={linkedinLogo} alt="Linkedin"/></a>
            <a href="https://www.instagram.com/erickunzel/" target="_blank" title="Instagram - Eric Kunzel"><img src={instaLogo} alt="Instagram" /></a>
        </nav>
        <p className='footerWeather__text'>Designed by Eric Kunzel, Powered by</p>
        <a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0"/></a>
    </footer>
  )
}

export default Footer