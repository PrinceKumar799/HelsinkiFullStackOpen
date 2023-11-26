const Total = ({ parts }) => {
    const calcTotal = () => parts.reduce((prev, curr) => prev+ curr.exercises, 0);
    console.log(parts);
    return <b>total of {calcTotal()} exercises</b>
}

export default Total;