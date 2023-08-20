type MoneyPropsType = {
    nameButton: string
    filter: () => void
}

export const FilterMoney = (props: MoneyPropsType) => {
    return (
        <button onClick={props.filter}>{props.nameButton}</button>
    );
}