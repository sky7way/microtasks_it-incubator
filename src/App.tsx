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
    const FirstButton = (sub: string, age: number) => {
        console.log(sub, age)
    }
    const SecondButton = (sub: string) => {
        console.log(sub)
    }

    return (
        <>
            <Header titleForHeader={"New Header"}/>
            <Body titleForBody={"New Body"}/>
            <Footer titleForFooter={"New Footer"}/>
            <MethodMap students={students} cars={topCars}/>
            <Button nameButton={"My first button"} callBack={() => FirstButton("My first button", 37)}/>
            <Button nameButton={"My second button"} callBack={() => SecondButton("My second button")}/>
        </>
    );
}

export default App;
