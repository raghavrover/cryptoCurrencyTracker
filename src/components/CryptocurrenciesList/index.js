import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptocurrenciesList: {}, isLoading: true}

  componentDidMount() {
    this.getCryptocurrenciesList()
  }

  getCryptocurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const cryptocurrenciesList = await response.json()
    const formattedList = cryptocurrenciesList.map(eachCurrency => ({
      currencyName: eachCurrency.currency_name,
      usdValue: eachCurrency.usd_value,
      euroValue: eachCurrency.euro_value,
      id: eachCurrency.id,
      currencyLogo: eachCurrency.currency_logo,
    }))

    this.setState({cryptocurrenciesList: formattedList, isLoading: false})
  }

  render() {
    const {cryptocurrenciesList, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="cryptocurrency-list-container">
            <h1 className="title">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              className="cryptocurrency-img"
              alt="cryptocurrency"
            />

            <ul className="cryptocurrency-list">
              <li className="cryptocurrency-list-header">
                <div className="cryptocurrency-list-header-container">
                  <p className="header-item-text coin-type">Coin Type</p>
                  <p className="header-item-text currency">USD</p>
                  <p className="header-item-text currency">EURO</p>
                </div>
              </li>
              {cryptocurrenciesList.map(eachItem => (
                <CryptocurrencyItem key={eachItem.id} currencyCoin={eachItem} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default CryptocurrenciesList
