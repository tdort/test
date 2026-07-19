import React from "react";
import MyMoney from "../../components/myMoney";
import MoneyPageStore from "../../components/myMoney/stores/moneyPageStore";

const MyCurrencyExchangePage = props => {
  return <MoneyPageStore.Provider>
    <MyMoney type='Currency Exchange'></MyMoney>
  </MoneyPageStore.Provider>
}

export default MyCurrencyExchangePage;
