import React from 'react'
import H5 from '../Typography/H5'
import Para from '../Typography/Para'
import "../widgets.css"

const Card1 = ({ content, layout }) => {
    return (
        < >
            {
                layout ?
                    ""
                    :
                    <>
                        {
                            content?.map(item => (
                                <div className='col-lg-4 col-md-12 col-sm-12 card1 '>
                                    <div key={item.id} className=''>
                                        <H5 title={item.title} className="card1h5" />
                                        <Para title={item.para} />
                                    </div>
                                </div>
                            ))
                        }
                    </>
            }


        </>

    )
}

export default Card1