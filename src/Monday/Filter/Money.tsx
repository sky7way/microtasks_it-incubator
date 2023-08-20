type MoneyPropsType = {
    money: MoneyType[]
}

type MoneyType = {
    banknots: string
    value: number
    number: string
}

export const Money = (props: MoneyPropsType) => {
    const moneyList = props.money.map(el => {
            return(
              <li key={el.number}>
                  ---{el.banknots}, {el.value}, {el.number}---
              </li>
            );
        })

    return(
        <ul>{moneyList}</ul>
    );
}