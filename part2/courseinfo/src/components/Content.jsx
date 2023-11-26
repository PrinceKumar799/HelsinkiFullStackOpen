import Part from "./Part";
import Total from "./Total";

const Content = ({ parts }) => {
   // console.log(parts);
    return (
        <>
            {parts.map(part => <Part key={part.id} courseName={part.name} exercises={part.exercises} />)}
            <Total parts={parts} />
        </>
    )
}

export default Content;