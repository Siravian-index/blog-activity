import * as React from 'react'
import {portafolioDummy} from "../../utils/dummyData";

interface IPortfolioProps {
}

const Portfolio: React.FC<IPortfolioProps> = (props) => {

    const data = portafolioDummy.map(({id, url, description,title}) => {
        return (<div key={id}>
                <h4>{title}</h4>
                <p>{description}</p>
                <a href={url} target="_blank">github</a>
            </div>
        )
    })

    return (
        <div className=''>
            <h1 className='text-center text-xl my-5'>Portfolio</h1>
            <div className='flex flex-col md:flex-row md:justify-around items-center'>
                {data}
            </div>
        </div>
    )
}

export default Portfolio
