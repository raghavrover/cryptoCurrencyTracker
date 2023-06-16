import './index.css'

const CryptocurrencyItem = props => {
  const {currencyCoin} = props
  const {currencyName, euroValue, usdValue, currencyLogo} = currencyCoin

  return (
    <li className="cryptocurrency-list-item">
      <div className="cryptocurrency-list-header-container">
        <div className="coin-type currency-coin-container">
          <img
            src={currencyLogo}
            className="currency-logo"
            alt={currencyName}
          />
          <p className="currency-item-text-size">{currencyName}</p>
        </div>

        <p className=" currency currency-item-text-size">{usdValue}</p>
        <p className="currency currency-item-text-size">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
