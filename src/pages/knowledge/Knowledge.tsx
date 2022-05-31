import * as React from 'react'
import {knoledgeDummy, portafolioDummy} from "../../utils/dummyData";

interface IKnowledgeProps {}

const Knowledge: React.FC<IKnowledgeProps> = (props) => {

    const data = knoledgeDummy.map(({id, mastery, description,skill}) => {
        return (<div key={id} className="w-1/3 my-4">
                <h4>{skill}</h4>
                <p>{description}</p>
                <p>{mastery}/100</p>
            </div>
        )
    })
    return (
        <div className=''>
            <h1 className='text-center text-xl my-5'>Knowledge</h1>
            <div className='flex flex-col justify-around items-center'>
                {data}
            </div>
        </div>
    )
}

export default Knowledge
