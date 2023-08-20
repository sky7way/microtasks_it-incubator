type MoneyPropsType = {
    nameButton: string
}

export const FilterMoney = (props: MoneyPropsType) => {
    return (
        <button>{props.nameButton}</button>
    );
}