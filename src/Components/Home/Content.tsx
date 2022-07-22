import MapContent from './MapContent';
import Image from 'next/image';
import banner from '../../assets/imgs/banner.jpg'

const Content = () => {

    return (
        <div className="container">
            <div className="container-content">
                <div className="flexbox-item flexbox-item-1">
                    <h1>
                        Holly Sidings
                    </h1>
                    <Image src={banner} width={550} height={350}></Image>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec ultrices dolor. Cras aliquet felis eget nunc bibendum, vel sodales quam rutrum. Curabitur placerat et dolor sit amet vestibulum. Pellentesque efficitur accumsan ante, eget placerat felis efficitur sed. Ut rutrum suscipit dolor et ultricies. Cras nisl mauris, laoreet ac quam sed, faucibus semper lacus. Mauris metus turpis, facilisis non purus eu, scelerisque vehicula sapien.</p>
                </div>
                <div className="flexbox-item flexbox-item-2">
                    <h1>
                        What can you do here?
                    </h1>
                    <p>Duis gravida quis nisl id cursus. Suspendisse elit felis, ultrices ac augue scelerisque, maximus porttitor justo. Cras pellentesque tellus non purus consequat, a fermentum ex placerat. Sed vulputate finibus metus. Morbi nec pellentesque justo. Praesent at tristique elit. Ut vulputate, arcu ac accumsan consectetur, turpis est porttitor tortor, ac efficitur orci ante a arcu. Proin ac turpis ultrices, aliquet libero ut, imperdiet elit. Praesent semper dolor a ipsum iaculis consequat. Curabitur tincidunt dolor a convallis congue. Duis eget fringilla dui. Nullam at malesuada ante, id ultricies quam. Nam non turpis eu felis suscipit sollicitudin efficitur sed dui.</p>
                </div>
                <div className="flexbox-item flexbox-item-3">
                    <h1>
                        More information
                    </h1>
                    <p>Aliquam tincidunt est eu condimentum feugiat. Morbi condimentum consectetur condimentum. Ut mollis eros eu sapien vestibulum fermentum. Curabitur dolor magna, sollicitudin a augue et, fermentum aliquet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam justo augue, laoreet non tincidunt ornare, consequat vitae mauris. In id nibh ornare, tempus magna non, porttitor odio. Aliquam erat volutpat. Donec ut convallis massa. Sed enim orci, sagittis ac augue nec, suscipit finibus diam. In gravida odio cursus, laoreet leo vel, eleifend felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur aliquam maximus vestibulum. Mauris dui augue, molestie a risus id, maximus aliquet ante. Proin suscipit, tortor eget iaculis dignissim, ipsum nunc consectetur ligula, id fringilla velit mauris id turpis.</p>
                </div>
            </div>
        </div>
    )

}

export default Content;