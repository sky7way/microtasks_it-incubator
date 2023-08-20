type MapPropsType = {
    students: StudentType[]
    cars: CarType[]
}

type StudentType = {
    id: number
    name: string
    age: number
}

type CarType = {
    manufacturer: string
    model: string
}

export const MethodMap = (props: MapPropsType) => {
    const studentsList = () => {

    }
    // const myCar = (c) => {
    //     c.map(el => <li></li>)
    // }

    return (
        <>
            Студенты:
            <ul>
                {props.students.map(el => (
                    <li key={el.id}>{`Имя: ${el.name},  Возраст: ${el.age}`}</li>
                ))}
            </ul><p/>
            Мои автомобили:
            {/*<ol>*/}
            {/*    {props.cars.map((el, index) => {*/}
            {/*        return (*/}
            {/*            <li key={index}>{`Марка: ${el.manufacturer}, Модель: ${el.model}`}</li>*/}
            {/*        );*/}
            {/*    })}*/}
            {/*</ol>*/}
            <table>
                <thead>
                <tr>
                    <th>№</th>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
                </thead>
                <tbody>
                {props.cars.map((el, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{el.manufacturer}</td>
                        <td>{el.model}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}