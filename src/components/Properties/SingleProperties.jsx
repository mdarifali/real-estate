import {property} from '../data.js';
import { useParams } from 'react-router-dom';

const SingleProperties = () => {

    const {id} = useParams()
    const AllPropertys = property;
    // const {images, address, name, price, about, bed, bath, area, owner} = items;

    return (
        <div>
            <h1>Single Properties Details</h1>
            <p>{id}</p>
            {
                AllPropertys.map((item) => {
                    return (
                        <div key={item.id}>
                            <p>{item.id}</p>
                            <img src={id == item.id && item.images} alt="" />
                        </div>
                    )
                })
            }
            {/* <img src={images} alt="image" /> */}
        </div>
    );
};

export default SingleProperties;