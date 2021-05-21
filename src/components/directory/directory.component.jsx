import React, {Component} from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';


class Directory extends Component {
constructor(){
    super();

    this.state = {
        sections: 
        [
            {
                id : 1,
                title: 'hats' ,
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
            },
            {
                id : 2,
                title: 'jackets' ,
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
            },
            {
                id : 3,
                title: 'tops' ,
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
            },
            {
                id : 4,
                title: 'tops' ,
                size: 'large',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
            },
            {
                id : 5,
                title: 'tops' ,
                size: 'large',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
            }
        ]
    }
}
    render(){
        return (
            <div  className='directory-menu'>
                {
                    this.state.sections.map(({id,title,size,imageUrl}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }

 }

  export default Directory;