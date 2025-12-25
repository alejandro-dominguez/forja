import Image from 'next/image';

type Props = {
    image: string
    name: string
}

const FeaturedProductImage = ({ image, name }: Props) => {
    return (
        <div className='h-52 w-full bg-white flex items-center justify-center'>
            <img
                src={image}
                alt={name}
                className='h-full object-contain p-4'
            />
        </div>
    )
}

export default FeaturedProductImage;

// npm install react-image-magnify
// Example Implementation
// import ReactImageMagnify from 'react-image-magnify';
//
// export default function MagnifierImage({ src, width, height }) {
//  return (
//    <div style={{ width: '500px' }}>
//      <ReactImageMagnify {...{
//        smallImage: { alt: 'Product', isFluidWidth: true, src: src, width: width, height: height },
//        largeImage: { src: src, width: width * 2, height: height * 2 },
//        enlargedImageContainerDimensions: { width: '150%', height: '150%' }
//      }} />
//    </div>
//  );
// }