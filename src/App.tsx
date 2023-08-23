import React, {MouseEvent, useState} from 'react';
import './App.css';
import {Header} from "./Monday/1/Header";
import {Body} from "./Monday/1/Body";
import {Footer} from "./Monday/1/Footer";
import {MethodMap} from "./Monday/1/Map/Map";
import {Button} from "./Monday/1/Button/Button";
import {CountButton} from "./Monday/UseState/CountButton";
import {FilterMoney} from "./Monday/Filter/FilterMoney";
import {Money} from "./Monday/Filter/Money";
import {Message} from "./Monday/Input/Message";
import {Input} from "./Monday/Input/Input";

type ButtonType = "plus" | "minus" | "null";
type MoneyType = 'Dollars' | 'RUBLS' | 'All';


// const topCars = [
//     {manufacturer: 'BMW', model: 'm5cs'},
//     {manufacturer: 'Mercedes', model: 'e63s'},
//     {manufacturer: 'Audi', model: 'rs6'}
// ]

// const students = [
//     {id: 1, name: "James", age: 8},
//     {id: 2, name: "Robert", age: 18},
//     {id: 3, name: "John", age: 28},
//     {id: 4, name: "Michael", age: 38},
//     {id: 5, name: "William", age: 48},
//     {id: 6, name: "David", age: 58},
//     {id: 7, name: "Richard", age: 68},
//     {id: 8, name: "Joseph", age: 78},
//     {id: 9, name: "Thomas", age: 88},
//     {id: 10, name: "Charles", age: 98},
//     {id: 11, name: "Christopher", age: 100},
// ]

function App() {

    // let [count, setCount] = useState(0)

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<MoneyType>('All')

    // const FirstButton = (sub: string, age: number) => {
    //     console.log(sub, age)
    // }
    // const SecondButton = (sub: string) => {
    //     console.log(sub)
    // }
    //
    // const StupidButton = () => {
    //     console.log("I'm stupid button")
    // }

    // const onClickHandler = (click: ButtonType) => {
    //     if (click === "plus") {
    //         setCount(++count)
    //     }
    //     if (click === "minus") {
    //         setCount(--count)
    //     }
    //     if (click === "null") {
    //         setCount(0)
    //     }
    // }
    let currentMoney = money;
    if(filter === 'Dollars') currentMoney = money.filter(el => el.banknots !== 'Dollars');
    if(filter === 'RUBLS') currentMoney = money.filter(el => el.banknots !== 'RUBLS');

    const filterMoney = (cur: MoneyType) => {
       return  setFilter(cur);
    }

    return (
        <>
            {/*<Header titleForHeader={"New Header"}/>*/}
            {/*<Body titleForBody={"New Body"}/>*/}
            {/*<Footer titleForFooter={"New Footer"}/>*/}

            {/*<MethodMap students={students} cars={topCars}/>*/}

            {/*<Button nameButton={"My first button"} callBack={() => FirstButton("My first button", 37)}/>*/}
            {/*<Button nameButton={"My second button"} callBack={() => SecondButton("My second button")}/>*/}
            {/*<Button nameButton={"Stupid button"} callBack={StupidButton}/>*/}

            {/*<h1>{count}</h1>*/}
            {/*<CountButton nameButton={"+"} callBack={() => onClickHandler("plus")}/>*/}
            {/*<CountButton nameButton={"-"} callBack={() => onClickHandler("minus")}/>*/}
            {/*<CountButton nameButton={"0"} callBack={() => onClickHandler("null")}/>*/}

            {/*<Money money={currentMoney}/>*/}
            {/*<FilterMoney nameButton={'Dollars'} filter={() =>filterMoney('RUBLS')}/>*/}
            {/*<FilterMoney nameButton={'RUBLS'} filter={() => filterMoney('Dollars')}/>*/}
            {/*<FilterMoney nameButton={'All'} filter={() => filterMoney('All')}/>*/}

            <Input />
            <Message />
        </>
    );
}

export default App;
