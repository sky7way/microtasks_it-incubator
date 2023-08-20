import React, {MouseEvent} from 'react';
import './App.css';
import {Header} from "./Monday/1/Header";
import {Body} from "./Monday/1/Body";
import {Footer} from "./Monday/1/Footer";
import {MethodMap} from "./Monday/1/Map/Map";
import {Button} from "./Monday/1/Button/Button";

const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]

const students = [
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 38},
    {id: 5, name: "William", age: 48},
    {id: 6, name: "David", age: 58},
    {id: 7, name: "Richard", age: 68},
    {id: 8, name: "Joseph", age: 78},
    {id: 9, name: "Thomas", age: 88},
    {id: 10, name: "Charles", age: 98},
    {id: 11, name: "Christopher", age: 100},
]


function App() {
    const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("Hi, men!")
    }
    const meSecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("Yo!")
    }

    const onClickHandler = (name: string)=> {
        console.log(name)
    }

    const foo1 = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(100200)
    }

    const foo2 = (num: number) => {
        console.log(num)
    }

    return (
        <>
            <Header titleForHeader={"New Header"}/>
            <Body titleForBody={"New Body"}/>
            <Footer titleForFooter={"New Footer"}/>
            <MethodMap students={students} cars={topCars}/>
            <Button/>
        </>
    );
}

export default App;
